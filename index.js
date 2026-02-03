
// explicit category words — each category has 3 example words
const categoryWords = {

  'لبس': ["تيشيرت",
  "قميص",
  "بنطلون",
  "جينز",
  "شورت",
  "جيبة",
  "فستان",
  "بلوزة",
  "جاكيت",
  "بالطو",
  "بلوفر",
  "سويت شيرت",
  "فيست",
  "بدلة",
  "بليزر",
  "كرافتة",
  "ببيونة",
  "صديري",
  "عباية",
  "جلابية",
  "اسدال",
  "خمار",
  "نقاب",
  "حجاب",
  "طرحة",
  "سكارف",
  "شال",
  "ايس كاب",
  "طاقية",
  "برنيطة",
  "كاب",
  "شراب",
  "بوكسر",
  "فانلة",
  "كلسون",
  "بيجامة",
  "روب",
  "مايوه",
  "ترنج",
  "فستان زفاف",
  "فستان سواريه",
  "ليجن",
  "سالوبيت",
  "كارديجان",
  "توب",
  "كورسيه",
  "حزام",
  "حمالات",
  "جوانتي",
  "قفازات",
  "كوفية",
  "جزمة",
  "كوتشي",
  "صندل",
  "شبشب",
  "بوط",
  "هاف بوط",
  "صبوه",
  "جزمة كلاسيك",
  "جزمة كعب عالي",
  "بلارينا",
  "سليبر",
  "خلخال",
  "اسورة",
  "خاتم",
  "حلق",
  "سلسلة",
  "كوليه",
  "دبوس",
  "زرار",
  "سوستة",
  "ياقة",
  "كم",
  "جيب",
  "توكة",
  "مشبك شعر",
  "بندانة",
  "شمسية",
  "نظارة شمس",
  "نظارة نظر",
  "عدسات",
  "شنطة يد",
  "شنطة ضهر",
  "محفظة",
  "ساعة يد",
  "بدلة غطس",
  "بدلة فضاء",
  "مريلة مطبخ",
  "فوطة",
  "بشكير",
  "برنس",
  "شراب كولون",
  "شراب صوف"],
  'جماد': [  "كرسي", "ترابيزة", "كنبة", "سرير", "دولاب", 
  "كومودينو", "تسريحة", "جزامة", "شماعة", "مكتب", 
  "سبورة", "سجادة", "ستارة", "نجفة", "اباجورة", 
  "لمبة", "مروحة", "تكييف", "دفاية", "تليفزيون", 
  "ريسيفر", "راوتر", "كمبيوتر", "لابتوب", "موبايل", 
  "تابلت", "شاحن", "سماعة", "ماوس", "كيبورد", 
  "طابعة", "كاميرا", "ثلاجة", "غسالة", "بوتاجاز", 
  "فرن", "ميكروويف", "خلاط", "كاتل", "مكواة", 
  "مكنسة", "شفاط", "سخان", "حلة", "طاسة", 
  "طبق", "كوباية", "مج", "فنجان", "شوكة", 
  "معلقة", "سكين", "صينية", "براد", "زجاجة", 
  "جردل", "مساحة", "مقشة", "جروف", "سلة زبالة", 
  "مرآة", "برواز", "ساعة حائط", "فازة", "طفاية", 
  "ولاعة", "كبريت", "قلم", "ورقة", "كشكول", 
  "كتاب", "استيكة", "براية", "مسطرة", "دباسة", 
  "خرامة", "ملف", "ظرف", "شنطة", "مفتاح", 
  "قفل", "باب", "شباك", "حيطة", "سقف", 
  "ارضية", "بلاط", "سيراميك", "رخام", "خشب", 
  "حديد", "زجاج", "بلاستيك", "كرتون", "سيارة", 
  "عجلة", "موتوسيكل", "مركب", "طيارة", "صاروخ", 
  "قمر صناعي", "إشارة مرور", "عمود نور"],
  'اكل مصري': [  "كشري",
  "ملوخية",
  "فته",
  "فول",
  "طعمية",
  "مسقعة",
  "محشي كرنب",
  "محشي ورق عنب",
  "محشي كوسة",
  "محشي بتنجان",
  "محشي فلفل",
  "ممبار",
  "كوارع",
  "فتة كوارع",
  "لحمة راس",
  "فشه",
  "كرشه",
  "عكاوي",
  "حواوشي",
  "كبدة اسكندراني",
  "سجق شرقي",
  "حمام محشي",
  "بط",
  "وز",
  "أرانب",
  "ويكة",
  "بامية",
  "سبانخ",
  "قلقاس",
  "بسارة",
  "عدس اصفر",
  "عدس بجبة",
  "شكشوكة",
  "عجة",
  "فطار مشلتت",
  "عسل اسود",
  "طحينة",
  "بابا غنوج",
  "جبنة قديمة",
  "مش",
  "مورتة",
  "رز معمر",
  "رز بالشعيرية",
  "رز صيادية",
  "كباب",
  "كفتة",
  "طرب",
  "نيفة",
  "ورقة لحمة",
  "صينية بطاطس",
  "تورلي",
  "بفتيك",
  "بانيه",
  "مكرونة بشاميل",
  "جلاش باللحمة",
  "رقاق",
  "سمبوسك",
  "كبيبة",
  "شركسية",
  "كشك",
  "مفتقة",
  "بليلة",
  "حمص الشام",
  "ترمس",
  "بطاطا",
  "درة مشوي",
  "ام علي",
  "رز بلبن",
  "مهلبية",
  "عاشورة",
  "بسبوسة",
  "كنافة",
  "قطايف",
  "بلح الشام",
  "زلابية",
  "صوابع زينب",
  "غريبة",
  "كحك",
  "بسكويت نشادر",
  "بيتي فور",
  "منين",
  "قرص",
  "فايش",
  "شريك",
  "عيش بلدي",
  "عيش شمس",
  "عيش فينو",
  "عيش كايزر",
  "مخلل ترشي",
  "ليمون معصفر",
  "زيتون مخلل",
  "حلاوة طحينية",
  "مربى",
  "سحلب",
  "مغات",
  "كركديه",
  "تمر هندي",
  "خروب",
  "دوم",
  "سوبيا",
  "عرقسوس",
  "قمر الدين"],
  'شخصيات كرتونية': [  "ميكي ماوس", "ميني ماوس", "بطوط", "بندق", "عم دهب", 
  "توم", "جيري", "سبونج بوب", "بسيط", "شفيق", 
  "مستر سلطع", "سيمبا", "تيمون", "بومبا", "موفاسا", 
  "سكوبي دو", "شاجي", "باجز باني", "دافي داك", "تويتي", 
  "سيلفستر", "وودي", "باز يطير", "شريك", "الحمار", 
  "فيونا", "سندريلا", "سنووايت", "ياسمين", "علاء الدين", 
  "جني", "مولان", "اريل", "بيل", "الوحش", 
  "طرزان", "هركليز", "كابتن ماجد", "بسام", "وليد", 
  "مازن", "المحقق كونان", "ران", "توجو موري", "جوكو", 
  "فيجيتا", "جوهان", "ناروتو", "ساسكي", "ساكورا", 
  "لوفي", "زورو", "سانجي", "نامي", "بيكاتشو", 
  "آش", "عبقرينو", "بكار", "رشيدة", "حسونة", 
  "بوجي", "طمطم", "عم شكشك", "زيكو", "ظاظا", 
  "فنانيس", "كرومبو", "سوبر مان", "باتمان", "سبايدر مان", 
  "هالك", "ايرون مان", "ثور", "كابتن امريكا", "وندر وومان", 
  "فلاش", "ليوناردو", "مايكل أنجلو", "دوناتيلو", "رافاييل", 
  "المعلم رشدان", "شريدر", "سنفور", "بابا سنفور", "شرشبيل", 
  "عدنان", "لينا", "عبسي", "جريندايزر", "دوق فليد", 
  "كوجي", "مازنجر", "ساسوكي", "بيب بيب", "الذئب", 
  "النمر الوردي", "باباي", "زيتونة", "بلوتو", "ويني الدبدوب"],
  ' اماكن': [  "بيت",
  "شقة",
  "فيلا",
  "قصر",
  "عمارة",
  "برج",
  "ناطحة سحاب",
  "كوخ",
  "خيمة",
  "فندق",
  "موتيل",
  "منتجع",
  "شاليه",
  "كابينة",
  "ريسبشن",
  "لوبي",
  "غرفة",
  "بلكونة",
  "سطح",
  "بدروم",
  "جراج",
  "حديقة",
  "جنينة",
  "منتزه",
  "غابة",
  "صحراء",
  "شاطئ",
  "بحر",
  "نهر",
  "بحيرة",
  "شلال",
  "جبل",
  "وادي",
  "كهف",
  "جزيرة",
  "بركان",
  "مدرسة",
  "حضانة",
  "جامعة",
  "كلية",
  "معهد",
  "فصل",
  "معمل",
  "مكتبة",
  "مستشفى",
  "عيادة",
  "صيدلية",
  "مستوصف",
  "قسم شرطة",
  "سجن",
  "محكمة",
  "مطافي",
  "بريد",
  "بنك",
  "شركة",
  "مصنع",
  "ورشة",
  "مخزن",
  "محل",
  "مول",
  "سوبر ماركت",
  "سوق",
  "بازار",
  "مطعم",
  "كافية",
  "قهوة",
  "مخبز",
  "جزارة",
  "حلاق",
  "كوافير",
  "جيم",
  "نادي",
  "استاد",
  "ملعب",
  "حمام سباحة",
  "ملاهي",
  "سيرك",
  "حديقة حيوان",
  "متحف",
  "مسرح",
  "سينما",
  "اوبرا",
  "معرض",
  "جامع",
  "كنيسة",
  "معبد",
  "دير",
  "ضريح",
  "مقابر",
  "مطار",
  "محطة قطار",
  "محطة اتوبيس",
  "ميناء",
  "رصيف",
  "شارع",
  "حارة",
  "ميدان",
  "كوبري",
  "نفق",
  "سد",
  "هرم",
  "برج القاهرة"],
  'جيمز': ["ببجي",
  "فري فاير",
  "فورتنايت",
  "ماين كرافت",
  "فيفا",
  "بيس",
  "كول اوف ديوتي",
  "جاتا",
  "ليج اوف ليجيندز",
  "فالورانت",
  "امونج اس",
  "روبلوكس",
  "كلاش اوف كلانس",
  "كلاش رويال",
  "كاندي كراش",
  "صب واي",
  "ماريو",
  "سونيك",
  "زيلدا",
  "بوكيمون",
  "مورتال كومبات",
  "تيكن",
  "ستريت فايتر",
  "نيد فور سبيد",
  "جراند توريزمو",
  "اساسن كريد",
  "جود اوف وار",
  "ريزدنت ايفل",
  "سايلنت هيل",
  "ذا لاست اوف اس",
  "انشارتد",
  "تومب رايدر",
  "ويتشر",
  "سايبر بانك",
  "اوفر واتش",
  "ابيكس ليجندز",
  "روكيت ليج",
  "فول جايز",
  "هالو",
  "ديستني",
  "كونتر سترايك",
  "دوتا",
  "هارت ستون",
  "سيمز",
  "سيتيز سكاي لاين",
  "فار كراي",
  "ريد ديد",
  "سبايدر مان",
  "باتمان",
  "كوتشينة",
  "دومينو",
  "طاولة",
  "شطرنج",
  "ليدو",
  "سلم وتعبان",
  "بنك الحظ",
  "مونوبولي",
  "اونو",
  "استغماية",
  "مساكة",
  "كهربا",
  "صياد",
  "كراسي موسيقية",
  "شد الحبل",
  "نط الحبل",
  "بلي",
  "نملة",
  "سيجة",
  "الأولى",
  "صلح",
  "عريس وعروسة",
  "مكعبات",
  "بازل",
  "يويو",
  "عروسة لعبة",
  "دبدوب",
  "عربية بريموت",
  "طيارة ورق",
  "صلصال",
  "مسدس مياه",
  "بلالين",
  "سكوتر",
  "باتيناج",
  "عجلة"],
  'افلام ومسلسلات': [  "الكيف",
  "العار",
  "جري الوحوش",
  "الكيت كات",
  "سواق الاتوبيس",
  "البريء",
  "الهروب",
  "ضد الحكومة",
  "اضحك الصورة تطلع حلوة",
  "معالي الوزير",
  "الإرهاب والكباب",
  "المنسي",
  "طيور الظلام",
  "النوم في العسل",
  "عمارة يعقوبيان",
  "الجزيرة",
  "إبراهيم الأبيض",
  "الفيل الأزرق",
  "ولاد رزق",
  "كيرة والجن",
  "الناظر",
  "عبود على الحدود",
  "فول الصين العظيم",
  "اللي بالي بالك",
  "بوحة",
  "زكي شان",
  "ظرف طارق",
  "مطب صناعي",
  "إكس لارج",
  "عسل اسود",
  "صعيدي في الجامعة الأمريكية",
  "همام في امستردام",
  "جاءنا البيان التالي",
  "يا انا يا خالتي",
  "وش إجرام",
  "اتش دبور",
  "طير انت",
  "الحرب العالمية الثالثة",
  "سمير وشهير وبهير",
  "رأفت الهجان",
  "دموع في عيون وقحة",
  "ليالي الحلمية",
  "المال والبنون",
  "ذئاب الجبل",
  "الضوء الشارد",
  "حديث الصباح والمساء",
  "لن أعيش في جلباب أبي",
  "عائلة الحاج متولي",
  "يتربى في عزو",
  "الكبير أوي",
  "الاختيار",
  "جعفر العمدة",
  "الأسطورة",
  "نسر الصعيد",
  "تحت الوصاية",
  "لعبة نيوتن",
  "بـ100 وش",
  "فريندز",
  "جيم اوف ثرونز",
  "بريكنج باد",
  "بريزون بريك",
  "لا كاسا دي بابل",
  "سترينجر ثينجز",
  "دارك",
  "بلاك ميرور",
  "ذا كراون",
  "هاوس اوف كاردز",
  "شيرلوك",
  "لوست",
  "فايكنج",
  "ذا وكينج ديد",
  "هاري بوتر",
  "لورد اوف ذا رينجز",
  "ماتريكس",
  "افاتار",
  "تيتانيك",
  "الجوكر",
  "باتمان دارك نايت",
  "انسبشن",
  "انترستيلر",
  "مارفل",
  "افنجرز",
  "ستار وورز",
  "جود فازر",
  "بالب فيكشن",
  "فورست جامب",
  "شوشانك",
  "ليون كينج"],
  'مشاهير': [  "عادل إمام", "أحمد زكي", "محمود عبد العزيز", "نور الشريف", "يحيى الفخراني", 
  "محمود ياسين", "حسين فهمي", "سمير غانم", "سعيد صالح", "عمر الشريف", 
  "فاتن حمامة", "سعاد حسني", "شادية", "مريم فخر الدين", "هند رستم", 
  "يسرا", "ليلى علوي", "الهام شاهين", "منى زكي", "ياسمين عبد العزيز", 
  "كريم عبد العزيز", "أحمد عز", "أحمد السقا", "محمد هنيدي", "محمد سعد", 
  "أحمد حلمي", "عمرو دياب", "محمد منير", "تامر حسني", "محمد حماقي", 
  "شيرين عبد الوهاب", "أنغام", "نانسي عجرم", "اليسا", "أصالة", 
  "كاظم الساهر", "جورج وسوف", "أم كلثوم", "عبد الحليم حافظ", "محمد عبد الوهاب", 
  "فريد الأطرش", "أسمهان", "فيروز", "صباح", "محمد صلاح", 
  "ميسي", "رونالدو", "مارادونا", "بيليه", "زيدان", 
  "أبو تريكة", "الخطيب", "حسام حسن", "حازم إمام", "شيكابالا", 
  "بيج رامي", "نجيب محفوظ", "أحمد زويل", "مجدي يعقوب", "طه حسين", 
  "العقاد", "سعد زغلول", "مصطفى كامل", "جمال عبد الناصر", "السادات", 
  "حسني مبارك", "الملك فاروق", "محمد علي باشا", "توت عنخ آمون", "رمسيس الثاني", 
  "كليوباترا", "حتشبسوت", "صلاح الدين الأيوبي", "شكسبير", "اينشتاين", 
  "نيوتن", "تسلا", "اديسون", "بيل جيتس", "مارك زوكربيرج", 
  "ايلون ماسك", "ستيف جوبز", "شارلي شابلن", "مارلين مونرو", "مايكل جاكسون", 
  "ليوناردو دي كابريو", "توم كروز", "براد بيت", "انجيلينا جولي", "جوني ديب", 
  "ويل سميث", "ذا روك"],
  'رياضيات':[  "كرة قدم", "كرة سلة", "كرة يد", "كرة طائرة", "كرة تنس", 
  "تنس طاولة", "اسكواش", "سباحة", "غطس", "كرة مائية", 
  "سباحة إيقاعية", "جمباز", "رفع أثقال", "كمال أجسام", "مصارعة", 
  "مصارعة حرة", "مصارعة روماني", "جودو", "كاراتيه", "تايكوندو", 
  "كونغ فو", "ملاكمة", "كيك بوكسينج", "مواي تاي", "جوجيتسو", 
  "ايكيدو", "سلاح الشيش", "مبارزة", "رماية", "قوس وسهم", 
  "فروسية", "سباق خيل", "سباق جمال", "سباق سيارات", "فورمولا 1", 
  "سباق موتوسيكلات", "رالي", "دراجات", "سباق عجل", "العاب قوى", 
  "جري", "ماراثون", "مشي", "وثب عالي", "وثب طويل", 
  "قفز بالزانة", "رمي الجلة", "رمي الرمح", "رمي القرص", "المطرقة", 
  "ترياثلون", "خماسي حديث", "تجديف", "كانوي", "كايك", 
  "شراع", "تزلج على الماء", "ركوب الأمواج", "تزلج على الجليد", "هوكي الجليد", 
  "هوكي الميدان", "بيسبول", "سوفت بول", "كريكت", "رجبي", 
  "كرة قدم أمريكية", "جولف", "ميني جولف", "بولينج", "بلياردو", 
  "سنوكر", "سهام", "شطرنج (رياضة ذهنية)", "صيد سمك", "صيد بري", 
  "تسلق الجبال", "تسلق الصخور", "هبوط بالمظلات", "طيران شراعي", "يوجا", 
  "بيلاتس", "زومبا", "ايروبكس", "كروس فيت", "باركور", 
  "كابويرا", "سومو", "كرة السرعة", "كرة الجرس (للمكفوفين)", "كرة الشاطئ", 
  "الكرة الطائرة الشاطئية", "كرة قدم شاطئية", "سباق حمام", "تزحلق", "كروكيه", 
  "الريشة الطائرة", "بولو"],
  "ساخن":["الويز",
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
  "متاخدة"]
};

// category rules (simple regex-based grouping)
const categoryRules = [
  { name: 'ملابس', pattern: /قميص|كلوت|بوكسر|لباس|بامبر|قميص نوم|قميص/i },
  { name: 'مظهر', pattern: /باروكا|بوتوكس|تاتو|بيرسينج|ايلاينر|روج|فريزة|ستايل/i },
  { name: 'أشياء', pattern: /سجاير|بيرا|دراي فود|ملبن|اندومي|واحد اندومي|مصنع|باب|صاروخ|ملبن|بسكوت|شوكولاتة/i },
  { name: 'اكل مصري', pattern: /كشري|ملوخية/i },
  { name: 'أحداث ومواقف', pattern: /حفلة|مقابلة|أول ديت|سرير|موسم|تزاوج|هزار|مقابلة|حفل|حفل زفاف/i },
  { name: 'أشخاص', pattern: /طارق|ناصر|فارس|بنت|صاحبك|الجيار|شامبنزي|الكرش|أم|أبو|صديق/i },
  { name: 'إهانات', pattern: /خرا|خول|ديوس|عرص|نيكة|خنزير|كلب|زبل|خازوق|منيوكة|مركوبة/i },
  { name: 'أخرى', pattern: /.*/ }
];

// build category map from explicit categoryWords
const hotCategories = {};
function buildCategories() {
  // initialize based on categoryWords (ensure 3 items each)
  Object.keys(categoryWords).forEach(k => {
    const arr = Array.isArray(categoryWords[k]) ? categoryWords[k] : [];
    hotCategories[k] = arr.slice();
    // if less than 3, fill from hotList (unique) until we have 3
    if (hotCategories[k].length < 3) {
      for (const it of hotList) {
        if (!hotCategories[k].includes(it)) {
          hotCategories[k].push(it);
          if (hotCategories[k].length >= 3) break;
        }
      }
    }
  });
  // build 'الكل' as unique union
  hotCategories['الكل'] = Array.from(new Set([].concat(...Object.values(hotCategories))));
  // debug: print counts so we can verify categories during development
  try {
    console.log('Category counts:', Object.fromEntries(Object.keys(hotCategories).map(k => [k, hotCategories[k].length])));
  } catch (e) {}
}

function buildCategorySelect() {
  const sel = document.getElementById('category-select');
  if (!sel) return;
  sel.innerHTML = '';
  const allOpt = document.createElement('option');
  allOpt.value = 'الكل';
  allOpt.textContent = `الكل (${hotCategories['الكل'].length})`;
  sel.appendChild(allOpt);
  for (const k of Object.keys(hotCategories)) {
    if (k === 'الكل') continue;
    const opt = document.createElement('option');
    opt.value = k;
    opt.textContent = `${k} (${hotCategories[k].length})`;
    sel.appendChild(opt);
  }
  const saved = localStorage.getItem('elshela_category');
  if (saved && hotCategories[saved]) sel.value = saved;
  sel.addEventListener('change', () => {
    localStorage.setItem('elshela_category', sel.value);
    // update current round item to reflect the new category immediately
    roundItem = GetRandomHot(sel.value) || GetRandomHot();
    const statusEl = document.getElementById('status');
    if (statusEl) statusEl.textContent = 'تم اختيار التصنيف: ' + sel.value + ' — ' + (hotCategories[sel.value] ? hotCategories[sel.value].length : 0) + ' كلمة';
  });
  // set initial round item based on saved or default selection
  roundItem = GetRandomHot(sel.value) || GetRandomHot();
}

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
      <div class="player-item">
        <div class="player-left">
          <div class="player-avatar" aria-hidden="true">${escapeHtml(String(p).trim().charAt(0) || '')}</div>
          <div class="player-info">
            <span class="player-name" title="${escapeHtml(p)}">${escapeHtml(p)}</span>
          </div>
        </div>
        <button class="remove-player" data-index="${i}" aria-label="حذف ${escapeHtml(p)}">حذف</button>
      </div>
    `).join('');
  }
  const statusEl = document.getElementById('status');
  if (statusEl) statusEl.textContent = 'عدد اللاعبين: ' + players.length;
}

function AddPlayer(nameArg) {
  const statusEl = document.getElementById('status');
  if (statusEl) statusEl.textContent = '';

  let name = (typeof nameArg === 'string' && nameArg.trim()) ? nameArg.trim() : null;
  const input = document.getElementById('player-name-input');
  if (!name && input) name = input.value && input.value.trim();

  if (!name) {
    // friendly inline error when input is empty
    if (input) {
      input.classList.add('input-error');
      setTimeout(() => input.classList.remove('input-error'), 600);
      input.focus();
    }
    if (statusEl) {
      statusEl.textContent = 'اكتب اسم اللاعب يا عم';
      statusEl.classList.add('status-error');
      setTimeout(() => statusEl.classList.remove('status-error'), 2200);
    }
    return;
  }

  players.push(name);
  savePlayers();
  renderPlayers();

  if (statusEl) statusEl.textContent = 'تم إضافة اللاعب: ' + name + ' (عدد الي بيلعبو: ' + players.length + ')';

  if (input) {
    input.value = '';
    input.focus();
  }
}
// expose to inline handlers
window.AddPlayer = AddPlayer;

// wire form submit and Enter key for the player input (if DOM already loaded this will be a noop until it exists)
function setupAddPlayerForm() {
  const addForm = document.getElementById('add-player-form');
  const input = document.getElementById('player-name-input');
  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      AddPlayer();
    });
  }
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        AddPlayer();
      }
    });
  }
}

// call setupAddPlayerForm after DOMContentLoaded in the existing handler (below)
  // (setupAddPlayerForm will attach the form submit listener once the DOM is ready)
function removePlayer(index) {
  if (typeof index !== 'number' || index < 0 || index >= players.length) return;
  const name = players[index];
  if (!confirm('حذف اللاعب ' + name + ' ؟')) return;
  players.splice(index, 1);
  savePlayers();
  renderPlayers();
}

const GetRandomHot = (category) => {
  const cat = (!category || category === 'الكل') ? 'الكل' : category;
  const list = hotCategories[cat] || [];
  if (!list || list.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
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
  // build categories and select one
  buildCategories();
  buildCategorySelect();
  const selectedCat = (document.getElementById('category-select') && document.getElementById('category-select').value) || localStorage.getItem('elshela_category') || 'الكل';
  roundItem = GetRandomHot(selectedCat) || GetRandomHot();
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
  const selectedCat = (document.getElementById('category-select') && document.getElementById('category-select').value) || localStorage.getItem('elshela_category') || 'الكل';
  const item = (pendingPlayer && spyPlayer && pendingPlayer === spyPlayer) ? spyMessage : (roundItem || GetRandomHot(selectedCat) || GetRandomHot());
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

// --- accuse modal helpers ---
function openAccuseModal() {
  const modal = document.getElementById('accuse-modal');
  const list = document.getElementById('accuse-list');
  if (!modal || !list) return;
  list.innerHTML = '';
  if (players.length === 0) {
    list.innerHTML = '<div class="muted">لا يوجد لاعبين</div>';
    modal.style.display = 'flex';
    return;
  }
  players.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.type = 'button';
    btn.textContent = p;
    btn.addEventListener('click', () => accusePlayer(p));
    list.appendChild(btn);
  });
  modal.style.display = 'flex';
}

function accusePlayer(name) {
  const resultEl = document.getElementById('result');
  const modal = document.getElementById('accuse-modal');
  if (!resultEl) return;
  if (!name) {
    if (modal) modal.style.display = 'none';
    return;
  }
  if (!spyPlayer) {
    resultEl.innerHTML = `<p class="status-error">مافيش جاسوس محدد</p>`;
  } else if (name === spyPlayer) {
    resultEl.innerHTML = `<p><strong>${escapeHtml(name)}</strong> فعلاً الجاسوس</p>`;
  } else {
    resultEl.innerHTML = `<p>غلط، مش هو الجاسوس. الجاسوس هو <strong>${escapeHtml(spyPlayer)}</strong></p>`;
  }
  if (modal) modal.style.display = 'none';
}

function setupAccuseModal() {
  const modal = document.getElementById('accuse-modal');
  const closeBtn = document.getElementById('accuse-close');
  if (!modal) return;
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
  if (closeBtn) closeBtn.addEventListener('click', () => modal.style.display = 'none');
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

  // wire accuse buttons (main controls + question-time)
  const accuseBtn = document.getElementById('accuse-btn');
  const accuseInQBtn = document.getElementById('accuse-in-questions');
  if (accuseBtn) accuseBtn.addEventListener('click', openAccuseModal);
  if (accuseInQBtn) accuseInQBtn.addEventListener('click', openAccuseModal);

  // modal setup (close behavior)
  setupAccuseModal();

  // setup add-player form (if present)
  setupAddPlayerForm();

  // start the round and show the first player immediately when the page loads
  initializeRound();
});
