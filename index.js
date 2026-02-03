const hot = [
  "الويز",
  "لبوسة",
  "مبلول",
  "صاحي وبيلعب",
  "حبوب منع الحمل",
  "كلوت",
  "بوكسر",
  "قولط",
  "بامبر",
  "قاعدة",
  "مبولة",
  "خازوق",
  "فنلة",
  "برا",
  "7.5",
  "10",
  "فيب",
  "سجاير",
  "بيرا",
  "دواء كحة",
  "فرشة جدو",
  "بلبل (دبور)",
  "نايت كلاب",
  "كروب توب",
  "زبل",
  "برابير",
  "جيصة",
  "فسية",
  "خرا كلاب",
  "شرشوحة",
  "ايلاينر",
  "افلام سيكو سيكو",
  "روج",
  "دراي فود",
  "زبالة",
  "مصنع الكراسي",
  "كلوت سبعة",
  "بعبصة",
  "كلوت فتلة",
  "لباس فلاحي",
  "توتوك",
  "حسود",
  "ام صرم",
  "صفرة",
  "موسم التزاوج",
  "تزاوج",
  "ارتباط",
  "خنزير",
  "كلب",
  "شامبنزي في موسم التزاوج",
  "كلية خرا البهايم",
  "الجيار",
  "فارس العصب",
  "واحد اندومي",
  "طارق بلاك ويل",
  "ناصر دوقة",
  "الكراش",
  "الإكس",
  "صاحبك اللي بيعمل نفسه تقيل",
  "أول ديت",
  "مقابلة بالصدفة مع الإكس",
  "حفلة",
  "هزار تقيل",
  "سرير",
  "لوب قلاس",
  "قميص مرمي",
  "باب مقفول بالمفتاح",
  "غمزة",
  "فتي مسير",
  "بنت جذابة",
  "مواقع",
  "باروكا",
  "بوتوكس",
  "جنت",
  "المصلحة",
  "شعلقة",
  "تشليف",
  "الفردة",
  "الفلقة",
  "كرنج",
  "قميص نوم",
  "بدلة رقص",
  "بت فجرة",
  "واد مز",
  "صاروخ",
  "صابونة",
  "رقاصة",
  "بيت دعارة",
  "بيرسينج",
  "تاتو",
  "ملبن",
  "بتاع",
  "معندوش",
  "فاجره",
  "جامدة",
  "7.5",
  "10",
  "بسكلته",
  "خول",
  "ديوس",
  "عرص",
  "نيكة",
  "مركوبة",
  "منيوكة",
  "متاخدة"
];

const players = [];

function savePlayers() {
  try {
    localStorage.setItem('elshela_players', JSON.stringify(players));
    console.log('Players saved', players.length);
  } catch (e) {
    console.warn('Could not save players to localStorage', e);
  }
}

function loadPlayers() {
  try {
    const data = localStorage.getItem('elshela_players');
    if (!data) return;
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      players.length = 0;
      parsed.forEach(p => players.push(p));
      console.log('Players loaded', players.length);
    }
  } catch (e) {
    console.warn('Could not load players from localStorage', e);
  }
}

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderPlayers() {
  const container = document.getElementById('players');
  if (!container) return;
  if (players.length === 0) {
    container.innerHTML = '<p>لا يوجد لاعبين</p>';
  } else {
    container.innerHTML = players.map((p, i) => `
      <div class="player-item" style="display:flex;align-items:center;gap:8px;">
        <span>${escapeHtml(p)}</span>
        <button class="remove-player" data-index="${i}" aria-label="حذف ${escapeHtml(p)}">حذف</button>
      </div>
    `).join('');
  }
  const statusEl = document.getElementById('status');
  if (statusEl) statusEl.textContent = 'عدد اللاعبين: ' + players.length;
}

function AddPlayer() {
  const statusEl = document.getElementById('status');
  if (statusEl) statusEl.textContent = '';
  const playerName = prompt("دخل اسم اللاعب");
  if (playerName === null) {
    if (statusEl) statusEl.textContent = 'لا خلاص مش هدخل';
    return; // user cancelled
  }
  const name = playerName.trim();
  if (!name) {
    alert('الاسم فاضي');
    if (statusEl) statusEl.textContent = 'الاسم فاضي';
    return;
  }
  players.push(name);
  savePlayers();
  renderPlayers();
  if (statusEl) statusEl.textContent = 'تم إضافة اللاعب: ' + name + ' (عدد الي بيلعبو: ' + players.length + ')';
}
// expose to inline handlers
window.AddPlayer = AddPlayer;

function removePlayer(index) {
  if (typeof index !== 'number' || index < 0 || index >= players.length) return;
  const name = players[index];
  if (!confirm('حذف اللاعب ' + name + ' ؟')) return;
  players.splice(index, 1);
  savePlayers();
  renderPlayers();
}

const GetRandomHot = () => {
  if (hot.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * hot.length);
  return hot[randomIndex];
}

const GetRandomPlayer = () => {
  if (players.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * players.length);
  return players[randomIndex];
}

const usedPlayers = new Set();
let pendingPlayer = null;
let roundItem = null; // single shared word for the round (same for every player)
let spyPlayer = null; // one random player who will receive the spy message
let roundFinished = false; // true when all players have been revealed (waiting for question time)
let spyRevealed = false; // true when the spy was revealed this round (waits for next to open Q&A)

function prepareNext() {
  const currEl = document.getElementById('current-player');
  const revealBtn = document.getElementById('reveal-btn');
  const nextBtn = document.getElementById('next-btn');
  if (!currEl) return;
  const remaining = players.filter(p => !usedPlayers.has(p));
  if (remaining.length === 0) {
    currEl.innerHTML = '';
    endGame();
    return;
  }
  // pick next and show it (before reveal)
  pendingPlayer = remaining[Math.floor(Math.random() * remaining.length)];
  currEl.innerHTML = `<p> تعالي يا: <strong>${escapeHtml(pendingPlayer)}</strong></p>`;
  if (revealBtn) revealBtn.disabled = false;
  if (nextBtn) nextBtn.disabled = true;
}

function initializeRound() {
  usedPlayers.clear();
  roundItem = GetRandomHot();
  // choose one random player as the spy for this round
  spyPlayer = players.length ? players[Math.floor(Math.random() * players.length)] : null;
  console.log('Spy chosen for this round:', spyPlayer);
  prepareNext();
} 



function endGame() {
  const revealBtn = document.getElementById('reveal-btn');
  const nextBtn = document.getElementById('next-btn');
  if (revealBtn) revealBtn.disabled = true;
  if (nextBtn) nextBtn.disabled = true;
  const statusEl = document.getElementById('status');
  if (statusEl) statusEl.textContent = 'اللعبة خلصت' + (roundItem ? ' — الكلمة للجولة: ' + escapeHtml(roundItem) : '');
}

function resetGame() {
  usedPlayers.clear();
  roundItem = null;
  roundFinished = false;
  const resultEl = document.getElementById('result');
  if (resultEl) resultEl.innerHTML = '';
  const currEl = document.getElementById('current-player');
  if (currEl) currEl.innerHTML = '';
  const revealBtn = document.getElementById('reveal-btn');
  const nextBtn = document.getElementById('next-btn');
  if (revealBtn) revealBtn.disabled = true;
  if (nextBtn) nextBtn.disabled = true;
  const statusEl = document.getElementById('status');
  if (statusEl) statusEl.textContent = 'عدد اللاعبين: ' + players.length;
  initializeRound();
}

function revealSpy() {
  const resultEl = document.getElementById('result');
  const revealBtn = document.getElementById('reveal-btn');
  const nextBtn = document.getElementById('next-btn');
  const currEl = document.getElementById('current-player');

  if (!resultEl || !currEl) return;
  if (players.length === 0) {
    resultEl.textContent = 'مافيش لاعيـبين، ';
    return;
  }

  // ensure there is a pending player chosen
  if (!pendingPlayer) {
    const remaining = players.filter(p => !usedPlayers.has(p));
    if (remaining.length === 0) {
      endGame();
      return;
    }
    pendingPlayer = remaining[Math.floor(Math.random() * remaining.length)];
    currEl.innerHTML = `<p> تعالي يا: <strong>${escapeHtml(pendingPlayer)}</strong></p>`;
  }

  const spyMessage = 'انت الجاسوس حاول تلعب في الميا العكرة';
  const item = (pendingPlayer && spyPlayer && pendingPlayer === spyPlayer) ? spyMessage : (roundItem || GetRandomHot());
  resultEl.innerHTML = `<p>الحاجة هي: <strong>${escapeHtml(item)}</strong></p>`;

  // if this player is the spy, mark it but do not change the current-player display.
  if (spyPlayer && pendingPlayer === spyPlayer) {
    spyRevealed = true;
  }

  // mark used and disable reveal until next
  usedPlayers.add(pendingPlayer);
  pendingPlayer = null;
  if (revealBtn) revealBtn.disabled = true;
  if (nextBtn) nextBtn.disabled = false;

  // if we've shown every player, set roundFinished — clicking "البعدووو" will show the questions panel
  if (usedPlayers.size === players.length) {
    roundFinished = true;
  }
}

function showQuestionTime() {
  const qt = document.getElementById('question-time');
  if (qt) qt.style.display = 'block';
  const revealBtn = document.getElementById('reveal-btn');
  const nextBtn = document.getElementById('next-btn');
  if (revealBtn) revealBtn.disabled = true;
  if (nextBtn) nextBtn.disabled = true;
  roundFinished = true;
  // when question-time opens, clear spyRevealed (we'll use awaitingNextAfterQuestions to control flow)
  spyRevealed = false;
}

function playAgain() {
  const qt = document.getElementById('question-time'); if (qt) qt.style.display = 'none';
  // If the round was finished (all players saw their mission), 'play again' restarts the round
  if (roundFinished) {
    resetGame();
    return;
  }
  // otherwise close Q&A and allow players to manually click 'البعدووو' to proceed
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) nextBtn.disabled = false;
}

function endGameNow() {
  const qt = document.getElementById('question-time'); if (qt) qt.style.display = 'none';
  const statusEl = document.getElementById('status');
  if (statusEl) statusEl.textContent = spyPlayer ? 'انتهت اللعبة — الجاسوس كان: ' + escapeHtml(spyPlayer) : 'انتهت اللعبة';
  const revealBtn = document.getElementById('reveal-btn');
  const nextBtn = document.getElementById('next-btn');
  if (revealBtn) revealBtn.disabled = true;
  if (nextBtn) nextBtn.disabled = true;
  const currEl = document.getElementById('current-player');
  const resultEl = document.getElementById('result');
  if (currEl) currEl.innerHTML = '';
  if (resultEl) resultEl.innerHTML = '';

  // go back to home immediately
  window.location.href = 'index.html';
}

window.playAgain = playAgain;
window.endGameNow = endGameNow;
// backwards-compatible name used in HTML
window.revalSpy = revealSpy;

function next() {
  const resultEl = document.getElementById('result');
  const currEl = document.getElementById('current-player');
  if (resultEl) resultEl.innerHTML = '';
  if (currEl) currEl.innerHTML = '';
  pendingPlayer = null;

  // if the round is finished, clicking next opens question-time instead of ending immediately
  if (roundFinished || usedPlayers.size >= players.length) {
    showQuestionTime();
    return;
  }

  // otherwise, proceed to the next player normally
  prepareNext();
}
window.next = next;

window.addEventListener('DOMContentLoaded', () => {
  loadPlayers();
  renderPlayers();
  const statusEl = document.getElementById('status');
  if (statusEl) statusEl.textContent = 'عدد اللاعبين: ' + players.length;

  const revealBtn = document.getElementById('reveal-btn');
  const nextBtn = document.getElementById('next-btn');

  if (revealBtn) {
    revealBtn.addEventListener('click', revealSpy);
    if (revealBtn.hasAttribute('onclick')) revealBtn.removeAttribute('onclick');
    // disabled until a player is prepared
    revealBtn.disabled = true;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', next);
    if (nextBtn.hasAttribute('onclick')) nextBtn.removeAttribute('onclick');
    // next should be disabled until reveal happens
    nextBtn.disabled = true;
  }

  // players list remove-button delegation
  const playersContainer = document.getElementById('players');
  if (playersContainer) {
    playersContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.remove-player');
      if (!btn) return;
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      removePlayer(idx);
    });
  }

  const playAgainBtn = document.getElementById('play-again');
  const endGameBtn = document.getElementById('end-game');
  if (playAgainBtn) playAgainBtn.addEventListener('click', playAgain);
  if (endGameBtn) endGameBtn.addEventListener('click', endGameNow);

  // start the round and show the first player immediately when the page loads
  initializeRound();
});