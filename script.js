/* ===========================
   GOLD SAND AND GRAVY — SCRIPTS
   =========================== */

// ===================== TRANSLATIONS =====================
const translations = {
    en: {
        // Nav
        "nav.home": "Home",
        "nav.products": "Products",
        "nav.operations": "Our Operations",
        "nav.delivery": "Delivery",
        "nav.calculator": "Calculator",
        "nav.about": "About",
        "nav.contact": "Contact",
        "nav.quote": "Get a Quote",

        // Hero
        "hero.title1": "Natural Resources.",
        "hero.title2": "Stronger Tomorrow.",
        "hero.desc": "Gold Sand and Gravy is a quarry company based on the Sirdarya River, supplying high-quality sand, gravel, rocks, crushed stone and more across Uzbekistan.",
        "hero.explore": "Explore Products",
        "hero.watch": "Watch Video",
        "hero.stat1": "tons per year",
        "hero.stat2": "regions covered",
        "hero.stat3": "trucks in fleet",
        "hero.quarry": "Sirdarya River Quarry",
        "hero.ourloc": "Our location",
        "hero.viewmap": "View on map",
        "hero.scroll": "Scroll",

        // Products
        "products.tag": "OUR PRODUCTS",
        "products.title": "High-quality materials<br>for your projects",
        "products.desc": "We supply a full range of construction materials from our quarry in the Sirdarya River. Reliable quality, consistent supply, and flexible delivery options.",
        "products.sand": "Sand",
        "products.sand_desc": "Clean, washed, construction grade sand for all building needs.",
        "products.gravel": "Gravel",
        "products.gravel_desc": "Durable and high-quality gravel for all types of projects.",
        "products.crushed": "Crushed Stone",
        "products.crushed_desc": "Perfect for concrete, roads and infrastructure projects.",
        "products.rocks": "Rocks & Stones",
        "products.rocks_desc": "Natural and solid rocks for heavy construction and landscaping.",
        "products.river_stone": "River Stone",
        "products.river_stone_desc": "Smooth, naturally rounded stones from Sirdarya River bed.",
        "products.pgs": "PGS (Sand-Gravel Mix)",
        "products.pgs_desc": "Sand and gravel mixture ideal for road base and foundations.",
        "products.calculate": "Calculate Price",
        "products.from": "from",
        "products.per_ton": "/ton",
        "products.per_ton_short": "ton",
        "products.view_all": "Calculate your order",

        // Operations
        "ops.tag": "OUR OPERATIONS",
        "ops.title": "Modern equipment.<br>Efficient production.",
        "ops.desc": "We use our own equipment and a modern fleet of loaders, excavators and conveyors to ensure high productivity and consistent quality.",
        "ops.f1_title": "Own Equipment",
        "ops.f1_desc": "Excavators, loaders, conveyors and more — all maintained in-house.",
        "ops.f2_title": "Experienced Team",
        "ops.f2_desc": "Skilled operators and engineers with years of quarry experience.",
        "ops.f3_title": "Consistent Supply",
        "ops.f3_desc": "On-time and reliable production to meet any project deadline.",
        "ops.f4_title": "Quality Control",
        "ops.f4_desc": "Every batch tested and verified to meet construction standards.",
        "ops.eq1": "Heavy-duty excavators for efficient material extraction",
        "ops.eq2_title": "Wheel Loaders",
        "ops.eq2": "CAT & SDLG loaders for rapid material handling",
        "ops.eq3_title": "Crushers",
        "ops.eq3": "Stone crushing plants for producing various fractions",
        "ops.eq4_title": "Screening Plants",
        "ops.eq4": "Vibrating screens for precise material separation",
        "ops.eq5_title": "Sand Washers",
        "ops.eq5": "Industrial sand washing equipment for clean product",

        // Delivery
        "delivery.tag": "DELIVERY & LOGISTICS",
        "delivery.title": "We deliver across<br>Uzbekistan",
        "delivery.desc": "We have our own fleet of HOWO trucks, SHACMAN, Chakman and other trucks. We deliver materials to all regions of Uzbekistan. If you have your own trucks, we can also supply the products directly to you at our quarry.",
        "delivery.tons": "tons",
        "delivery.other_trucks": "Other Trucks",
        "delivery.request": "Request a Delivery",
        "delivery.all_regions": "All regions of Uzbekistan",
        "delivery.all_regions_desc": "Tashkent, Samarkand, Bukhara, Fergana and more",
        "delivery.own_fleet": "Own fleet of trucks",
        "delivery.own_fleet_desc": "50+ vehicles available 24/7",
        "delivery.flexible": "Flexible delivery options",
        "delivery.flexible_desc": "Pickup available or we deliver to your site",

        // Calculator
        "calc.tag": "PRICE CALCULATOR",
        "calc.title": "Calculate your order",
        "calc.desc": "Select material, quantity and delivery destination to get an instant price estimate. Final prices may vary — contact us for an exact quote.",
        "calc.step1": "1. Select Material",
        "calc.step2": "2. Quantity & Delivery",
        "calc.quantity": "Quantity (tons)",
        "calc.delivery_type": "Delivery Type",
        "calc.pickup": "Self Pickup",
        "calc.pickup_desc": "Come to our quarry",
        "calc.delivery_opt": "Our Delivery",
        "calc.delivery_opt_desc": "We bring to your site",
        "calc.destination": "Delivery Destination",
        "calc.select_region": "Select region",
        "calc.estimate": "Price Estimate",
        "calc.instant": "Instant",
        "calc.material_label": "Material",
        "calc.qty_label": "Quantity",
        "calc.material_cost": "Material Cost",
        "calc.delivery_cost": "Delivery Cost",
        "calc.trucks_needed": "Trucks Needed",
        "calc.total": "Total Estimate",
        "calc.note": "* Prices are approximate. Contact us for an exact quote.",
        "calc.order": "Order Now",

        // About
        "about.tag": "ABOUT US",
        "about.title": "Gold Sand and Gravy",
        "about.text1": "We are a trusted partner in the construction industry, supplying natural materials from the Sirdarya River with a focus on quality, reliability and long-term cooperation.",
        "about.text2": "Our quarry operates year-round, with modern equipment and experienced staff ensuring consistent supply of premium construction materials to all regions of Uzbekistan.",
        "about.v1": "Licensed and certified operations",
        "about.v2": "Environmentally responsible extraction",
        "about.v3": "Competitive pricing with volume discounts",
        "about.v4": "Long-term contracts available",
        "about.learn": "Learn more",
        "about.s1": "Tons of materials<br>per year",
        "about.s2": "Quality control<br>on all products",
        "about.s3": "Support &<br>delivery",
        "about.s4": "Satisfied<br>clients",

        // Testimonials
        "test.tag": "TESTIMONIALS",
        "test.title": "What our clients say",
        "test.t1": "\"We've been working with Gold Sand and Gravy for over 2 years. Their sand quality is exceptional and deliveries are always on time. Highly recommend for any construction project.\"",
        "test.t1_role": "Construction Manager, Tashkent",
        "test.t2": "\"Best quarry in the Sirdarya region. Fair prices, consistent quality, and their HOWO trucks deliver right to our site. We order crushed stone and gravel regularly.\"",
        "test.t2_role": "Road Construction Foreman",
        "test.t3": "\"Excellent service! We use self-pickup with our own trucks and they always load us quickly. The price calculator on the website is very convenient.\"",
        "test.t3_role": "Private Developer, Jizzakh",

        // Contact
        "contact.tag": "GET IN TOUCH",
        "contact.title": "Contact us",
        "contact.desc": "Ready to order? Have questions? Get in touch and we'll respond within 30 minutes during business hours.",
        "contact.phone": "Phone (Main)",
        "contact.phone2": "Phone (Sales)",
        "contact.phone3": "Delivery Dispatch",
        "contact.address": "Address",
        "contact.address_val": "Sirdarya River, Uzbekistan",
        "contact.hours_title": "Working Hours",
        "contact.weekdays": "Monday — Saturday",
        "contact.sunday": "Sunday",
        "contact.by_appt": "By appointment",
        "contact.form_title": "Send us a message",
        "contact.name": "Your Name",
        "contact.phone_label": "Phone Number",
        "contact.subject": "Subject",
        "contact.sub_order": "New Order",
        "contact.sub_quote": "Price Quote",
        "contact.sub_delivery": "Delivery Inquiry",
        "contact.sub_partner": "Partnership",
        "contact.sub_other": "Other",
        "contact.message": "Message",
        "contact.send": "Send Message",
        "contact.response_note": "We'll respond within 30 minutes during working hours",

        // Map
        "map.title": "Visit Our Quarry",
        "map.desc": "Sirdarya River, Uzbekistan",
        "map.directions": "Get Directions",

        // Footer
        "footer.brand_desc": "Quality materials. Reliable supply. Your trusted partner for construction materials from the Sirdarya River.",
        "footer.contacts": "Contact us",
        "footer.links": "Quick Links",
        "footer.rights": "All rights reserved.",
    },

    ru: {
        "nav.home": "Главная",
        "nav.products": "Продукция",
        "nav.operations": "Производство",
        "nav.delivery": "Доставка",
        "nav.calculator": "Калькулятор",
        "nav.about": "О нас",
        "nav.contact": "Контакты",
        "nav.quote": "Получить цену",

        "hero.title1": "Природные ресурсы.",
        "hero.title2": "Надёжное будущее.",
        "hero.desc": "Gold Sand and Gravy — карьерная компания на реке Сырдарья, поставляющая высококачественный песок, гравий, щебень, камень и другие материалы по всему Узбекистану.",
        "hero.explore": "Наша продукция",
        "hero.watch": "Смотреть видео",
        "hero.stat1": "тонн в год",
        "hero.stat2": "регионов",
        "hero.stat3": "грузовиков",
        "hero.quarry": "Карьер на р. Сырдарья",
        "hero.ourloc": "Наше расположение",
        "hero.viewmap": "Смотреть на карте",
        "hero.scroll": "Листайте",

        "products.tag": "НАША ПРОДУКЦИЯ",
        "products.title": "Качественные материалы<br>для ваших проектов",
        "products.desc": "Мы поставляем полный спектр строительных материалов из нашего карьера на реке Сырдарья. Надёжное качество, стабильные поставки, гибкие условия доставки.",
        "products.sand": "Песок",
        "products.sand_desc": "Чистый, мытый песок строительного класса для всех видов работ.",
        "products.gravel": "Гравий",
        "products.gravel_desc": "Прочный и качественный гравий для любых проектов.",
        "products.crushed": "Щебень",
        "products.crushed_desc": "Идеален для бетона, дорог и инфраструктурных проектов.",
        "products.rocks": "Камни и булыжники",
        "products.rocks_desc": "Натуральный камень для тяжёлого строительства и ландшафтного дизайна.",
        "products.river_stone": "Речной камень",
        "products.river_stone_desc": "Гладкие, естественно округлённые камни из русла реки Сырдарья.",
        "products.pgs": "ПГС (песчано-гравийная смесь)",
        "products.pgs_desc": "Смесь песка и гравия, идеальная для дорожного основания и фундаментов.",
        "products.calculate": "Рассчитать цену",
        "products.from": "от",
        "products.per_ton": "/тонна",
        "products.per_ton_short": "тонна",
        "products.view_all": "Рассчитать заказ",

        "ops.tag": "ПРОИЗВОДСТВО",
        "ops.title": "Современная техника.<br>Эффективное производство.",
        "ops.desc": "Мы используем собственную технику и современный парк погрузчиков, экскаваторов и конвейеров для высокой производительности и стабильного качества.",
        "ops.f1_title": "Собственная техника",
        "ops.f1_desc": "Экскаваторы, погрузчики, конвейеры — всё обслуживается на месте.",
        "ops.f2_title": "Опытная команда",
        "ops.f2_desc": "Квалифицированные операторы и инженеры с многолетним опытом.",
        "ops.f3_title": "Стабильные поставки",
        "ops.f3_desc": "Вовремя и надёжно — для соблюдения любых сроков.",
        "ops.f4_title": "Контроль качества",
        "ops.f4_desc": "Каждая партия проверена и соответствует строительным стандартам.",
        "ops.eq1": "Мощные экскаваторы для эффективной добычи материалов",
        "ops.eq2_title": "Колёсные погрузчики",
        "ops.eq2": "Погрузчики CAT и SDLG для быстрой обработки материалов",
        "ops.eq3_title": "Дробилки",
        "ops.eq3": "Камнедробильные установки для производства различных фракций",
        "ops.eq4_title": "Грохоты",
        "ops.eq4": "Вибрационные грохоты для точного разделения материалов",
        "ops.eq5_title": "Пескомойки",
        "ops.eq5": "Промышленное оборудование для промывки песка",

        "delivery.tag": "ДОСТАВКА И ЛОГИСТИКА",
        "delivery.title": "Доставляем по всему<br>Узбекистану",
        "delivery.desc": "У нас собственный автопарк из грузовиков HOWO, SHACMAN, Чакман и других. Доставляем во все регионы Узбекистана. Если у вас есть свой транспорт — можем отгрузить прямо на карьере.",
        "delivery.tons": "тонн",
        "delivery.other_trucks": "Другие грузовики",
        "delivery.request": "Заказать доставку",
        "delivery.all_regions": "Все регионы Узбекистана",
        "delivery.all_regions_desc": "Ташкент, Самарканд, Бухара, Фергана и другие",
        "delivery.own_fleet": "Собственный автопарк",
        "delivery.own_fleet_desc": "50+ автомобилей доступны 24/7",
        "delivery.flexible": "Гибкие условия доставки",
        "delivery.flexible_desc": "Самовывоз или доставка на объект",

        "calc.tag": "КАЛЬКУЛЯТОР ЦЕН",
        "calc.title": "Рассчитайте ваш заказ",
        "calc.desc": "Выберите материал, количество и пункт доставки для мгновенного расчёта стоимости. Окончательные цены могут отличаться — свяжитесь с нами для точного расчёта.",
        "calc.step1": "1. Выберите материал",
        "calc.step2": "2. Количество и доставка",
        "calc.quantity": "Количество (тонн)",
        "calc.delivery_type": "Тип доставки",
        "calc.pickup": "Самовывоз",
        "calc.pickup_desc": "Приезжайте на карьер",
        "calc.delivery_opt": "Наша доставка",
        "calc.delivery_opt_desc": "Привезём на ваш объект",
        "calc.destination": "Пункт доставки",
        "calc.select_region": "Выберите регион",
        "calc.estimate": "Расчёт стоимости",
        "calc.instant": "Мгновенно",
        "calc.material_label": "Материал",
        "calc.qty_label": "Количество",
        "calc.material_cost": "Стоимость материала",
        "calc.delivery_cost": "Стоимость доставки",
        "calc.trucks_needed": "Нужно грузовиков",
        "calc.total": "Итого",
        "calc.note": "* Цены приблизительные. Свяжитесь для точного расчёта.",
        "calc.order": "Заказать",

        "about.tag": "О НАС",
        "about.title": "Gold Sand and Gravy",
        "about.text1": "Мы — надёжный партнёр в строительной отрасли, поставляющий природные материалы из реки Сырдарья с акцентом на качество, надёжность и долгосрочное сотрудничество.",
        "about.text2": "Наш карьер работает круглый год, с современным оборудованием и опытным персоналом обеспечивая стабильные поставки строительных материалов во все регионы Узбекистана.",
        "about.v1": "Лицензированная и сертифицированная деятельность",
        "about.v2": "Экологически ответственная добыча",
        "about.v3": "Конкурентные цены и скидки за объём",
        "about.v4": "Доступны долгосрочные контракты",
        "about.learn": "Подробнее",
        "about.s1": "Тонн материалов<br>в год",
        "about.s2": "Контроль качества<br>на всю продукцию",
        "about.s3": "Поддержка и<br>доставка",
        "about.s4": "Довольных<br>клиентов",

        "test.tag": "ОТЗЫВЫ",
        "test.title": "Что говорят наши клиенты",
        "test.t1": "\"Мы работаем с Gold Sand and Gravy уже более 2 лет. Качество песка отличное, и доставки всегда вовремя. Рекомендуем для любого строительного проекта.\"",
        "test.t1_role": "Менеджер строительства, Ташкент",
        "test.t2": "\"Лучший карьер в Сырдарьинской области. Честные цены, стабильное качество, а их грузовики HOWO доставляют прямо на объект. Регулярно заказываем щебень и гравий.\"",
        "test.t2_role": "Прораб дорожного строительства",
        "test.t3": "\"Отличный сервис! Мы забираем самовывозом на своих грузовиках, и нас всегда быстро загружают. Калькулятор цен на сайте очень удобный.\"",
        "test.t3_role": "Частный застройщик, Джизак",

        "contact.tag": "СВЯЖИТЕСЬ С НАМИ",
        "contact.title": "Контакты",
        "contact.desc": "Готовы заказать? Есть вопросы? Свяжитесь с нами — мы ответим в течение 30 минут в рабочее время.",
        "contact.phone": "Телефон (основной)",
        "contact.phone2": "Телефон (продажи)",
        "contact.phone3": "Диспетчер доставки",
        "contact.address": "Адрес",
        "contact.address_val": "Река Сырдарья, Узбекистан",
        "contact.hours_title": "Часы работы",
        "contact.weekdays": "Понедельник — Суббота",
        "contact.sunday": "Воскресенье",
        "contact.by_appt": "По предварительной записи",
        "contact.form_title": "Напишите нам",
        "contact.name": "Ваше имя",
        "contact.phone_label": "Номер телефона",
        "contact.subject": "Тема",
        "contact.sub_order": "Новый заказ",
        "contact.sub_quote": "Запрос цены",
        "contact.sub_delivery": "Вопрос по доставке",
        "contact.sub_partner": "Партнёрство",
        "contact.sub_other": "Другое",
        "contact.message": "Сообщение",
        "contact.send": "Отправить",
        "contact.response_note": "Мы ответим в течение 30 минут в рабочее время",

        "map.title": "Посетите наш карьер",
        "map.desc": "Река Сырдарья, Узбекистан",
        "map.directions": "Маршрут",

        "footer.brand_desc": "Качественные материалы. Надёжные поставки. Ваш доверенный партнёр по строительным материалам с реки Сырдарья.",
        "footer.contacts": "Свяжитесь с нами",
        "footer.links": "Быстрые ссылки",
        "footer.rights": "Все права защищены.",
    },

    uz: {
        "nav.home": "Bosh sahifa",
        "nav.products": "Mahsulotlar",
        "nav.operations": "Ishlab chiqarish",
        "nav.delivery": "Yetkazib berish",
        "nav.calculator": "Kalkulyator",
        "nav.about": "Biz haqimizda",
        "nav.contact": "Aloqa",
        "nav.quote": "Narx olish",

        "hero.title1": "Tabiiy resurslar.",
        "hero.title2": "Kuchli kelajak.",
        "hero.desc": "Gold Sand and Gravy — Sirdaryo bo'yidagi kon kompaniyasi. Biz yuqori sifatli qum, shag'al, tosh, maydalangan tosh va boshqa materiallarni butun O'zbekiston bo'ylab yetkazib beramiz.",
        "hero.explore": "Mahsulotlarni ko'rish",
        "hero.watch": "Videoni ko'rish",
        "hero.stat1": "yiliga tonna",
        "hero.stat2": "viloyat qamrovi",
        "hero.stat3": "yuk mashinasi",
        "hero.quarry": "Sirdaryo kon maydoni",
        "hero.ourloc": "Bizning manzil",
        "hero.viewmap": "Xaritada ko'rish",
        "hero.scroll": "Pastga suring",

        "products.tag": "MAHSULOTLARIMIZ",
        "products.title": "Loyihalaringiz uchun<br>sifatli materiallar",
        "products.desc": "Biz Sirdaryo bo'yidagi konimizdan qurilish materiallari to'liq assortimentini taklif qilamiz. Ishonchli sifat, barqaror ta'minot va moslashuvchan yetkazib berish.",
        "products.sand": "Qum",
        "products.sand_desc": "Toza, yuvilgan, qurilish sifatidagi qum barcha qurilish ishlari uchun.",
        "products.gravel": "Shag'al",
        "products.gravel_desc": "Barcha turdagi loyihalar uchun mustahkam va sifatli shag'al.",
        "products.crushed": "Maydalangan tosh",
        "products.crushed_desc": "Beton, yo'l va infratuzilma loyihalari uchun ideal.",
        "products.rocks": "Toshlar va qoya",
        "products.rocks_desc": "Og'ir qurilish va landshaft dizayni uchun tabiiy toshlar.",
        "products.river_stone": "Daryo toshi",
        "products.river_stone_desc": "Sirdaryo o'zanidan tabiiy yumaloq toshlar.",
        "products.pgs": "PQA (Qum-shag'al aralashmasi)",
        "products.pgs_desc": "Yo'l asosi va poydevor uchun ideal qum-shag'al aralashmasi.",
        "products.calculate": "Narxni hisoblash",
        "products.from": "dan",
        "products.per_ton": "/tonna",
        "products.per_ton_short": "tonna",
        "products.view_all": "Buyurtmani hisoblash",

        "ops.tag": "ISHLAB CHIQARISH",
        "ops.title": "Zamonaviy texnika.<br>Samarali ishlab chiqarish.",
        "ops.desc": "Biz o'z texnikamiz va zamonaviy yuklash mashinalari, ekskavatorlar va konveyerlar parkidan foydalanamiz.",
        "ops.f1_title": "O'z texnikamiz",
        "ops.f1_desc": "Ekskavatorlar, yuklagichlar, konveyerlar — barchasi o'z xizmatimizda.",
        "ops.f2_title": "Tajribali jamoa",
        "ops.f2_desc": "Ko'p yillik tajribaga ega malakali operatorlar va muhandislar.",
        "ops.f3_title": "Barqaror ta'minot",
        "ops.f3_desc": "Har qanday muddat uchun o'z vaqtida va ishonchli ishlab chiqarish.",
        "ops.f4_title": "Sifat nazorati",
        "ops.f4_desc": "Har bir partiya qurilish standartlariga mos tekshiriladi.",
        "ops.eq1": "Materiallarni samarali qazib olish uchun kuchli ekskavatorlar",
        "ops.eq2_title": "G'ildirakli yuklagichlar",
        "ops.eq2": "Tez yuklash uchun CAT va SDLG yuklagichlar",
        "ops.eq3_title": "Maydalagichlar",
        "ops.eq3": "Turli fraktsiyalar ishlab chiqarish uchun tosh maydalash zavodlari",
        "ops.eq4_title": "Elaklar",
        "ops.eq4": "Materiallarni aniq ajratish uchun tebranish elaklari",
        "ops.eq5_title": "Qum yuvgichlar",
        "ops.eq5": "Toza mahsulot olish uchun sanoat qum yuvish uskunasi",

        "delivery.tag": "YETKAZIB BERISH VA LOGISTIKA",
        "delivery.title": "Butun O'zbekiston<br>bo'ylab yetkazamiz",
        "delivery.desc": "Bizda o'z HOWO, SHACMAN, Chakman va boshqa yuk mashinalari parki mavjud. Barcha viloyatlarga yetkazib beramiz. O'z transportingiz bo'lsa, kondan bevosita olishingiz ham mumkin.",
        "delivery.tons": "tonna",
        "delivery.other_trucks": "Boshqa yuk mashinalari",
        "delivery.request": "Yetkazishni buyurtma qilish",
        "delivery.all_regions": "O'zbekistonning barcha viloyatlari",
        "delivery.all_regions_desc": "Toshkent, Samarqand, Buxoro, Farg'ona va boshqalar",
        "delivery.own_fleet": "O'z avtoparkimiz",
        "delivery.own_fleet_desc": "50+ avtomobil 24/7 mavjud",
        "delivery.flexible": "Moslashuvchan yetkazib berish",
        "delivery.flexible_desc": "O'zingiz olib ketish yoki biz yetkazamiz",

        "calc.tag": "NARX KALKULYATORI",
        "calc.title": "Buyurtmangizni hisoblang",
        "calc.desc": "Material, miqdor va yetkazish manzilini tanlang — narx darhol hisoblanadi. Yakuniy narxlar farq qilishi mumkin — aniq narx uchun biz bilan bog'laning.",
        "calc.step1": "1. Materialni tanlang",
        "calc.step2": "2. Miqdor va yetkazish",
        "calc.quantity": "Miqdor (tonna)",
        "calc.delivery_type": "Yetkazish turi",
        "calc.pickup": "O'zi olib ketish",
        "calc.pickup_desc": "Konimizga keling",
        "calc.delivery_opt": "Bizning yetkazish",
        "calc.delivery_opt_desc": "Ob'yektingizga olib kelamiz",
        "calc.destination": "Yetkazish manzili",
        "calc.select_region": "Viloyatni tanlang",
        "calc.estimate": "Narx hisobi",
        "calc.instant": "Tezkor",
        "calc.material_label": "Material",
        "calc.qty_label": "Miqdor",
        "calc.material_cost": "Material narxi",
        "calc.delivery_cost": "Yetkazish narxi",
        "calc.trucks_needed": "Kerakli yuk mashinalar",
        "calc.total": "Jami",
        "calc.note": "* Narxlar taxminiy. Aniq narx uchun biz bilan bog'laning.",
        "calc.order": "Buyurtma berish",

        "about.tag": "BIZ HAQIMIZDA",
        "about.title": "Gold Sand and Gravy",
        "about.text1": "Biz qurilish sohasida ishonchli hamkor bo'lib, Sirdaryo daryosidan tabiiy materiallarni sifat, ishonchlilik va uzoq muddatli hamkorlikka e'tibor qaratgan holda yetkazib beramiz.",
        "about.text2": "Konimiz yil davomida ishlaydi, zamonaviy texnika va tajribali xodimlar O'zbekistonning barcha viloyatlariga barqaror ta'minotni kafolatlaydi.",
        "about.v1": "Litsenziyalangan va sertifikatlangan faoliyat",
        "about.v2": "Ekologik mas'uliyatli qazib olish",
        "about.v3": "Raqobatbardosh narxlar va hajm chegirmalari",
        "about.v4": "Uzoq muddatli shartnomalar mavjud",
        "about.learn": "Batafsil",
        "about.s1": "Yiliga tonna<br>materiallar",
        "about.s2": "Barcha mahsulotlarga<br>sifat nazorati",
        "about.s3": "Qo'llab-quvvatlash<br>va yetkazish",
        "about.s4": "Mamnun<br>mijozlar",

        "test.tag": "MIJOZLAR FIKRI",
        "test.title": "Mijozlarimiz nima deydi",
        "test.t1": "\"Biz Gold Sand and Gravy bilan 2 yildan ortiq ishlaymiz. Qum sifati ajoyib va yetkazish doimo o'z vaqtida. Har qanday qurilish loyihasi uchun tavsiya qilamiz.\"",
        "test.t1_role": "Qurilish boshqaruvchisi, Toshkent",
        "test.t2": "\"Sirdaryo viloyatidagi eng yaxshi kon. Adolatli narxlar, barqaror sifat va ularning HOWO mashinalari to'g'ridan-to'g'ri ob'yektga yetkazib beradi.\"",
        "test.t2_role": "Yo'l qurilishi boshlig'i",
        "test.t3": "\"Ajoyib xizmat! Biz o'z mashinalarimiz bilan o'zimiz olib ketamiz va bizni doimo tez yuklashadi. Saytdagi narx kalkulyatori juda qulay.\"",
        "test.t3_role": "Xususiy quruvchi, Jizzax",

        "contact.tag": "BOG'LANING",
        "contact.title": "Aloqa",
        "contact.desc": "Buyurtma berishga tayyormisiz? Savollaringiz bormi? Biz bilan bog'laning — ish vaqtida 30 daqiqa ichida javob beramiz.",
        "contact.phone": "Telefon (asosiy)",
        "contact.phone2": "Telefon (savdo)",
        "contact.phone3": "Yetkazish dispetcheri",
        "contact.address": "Manzil",
        "contact.address_val": "Sirdaryo, O'zbekiston",
        "contact.hours_title": "Ish vaqti",
        "contact.weekdays": "Dushanba — Shanba",
        "contact.sunday": "Yakshanba",
        "contact.by_appt": "Oldindan kelishilgan holda",
        "contact.form_title": "Bizga yozing",
        "contact.name": "Ismingiz",
        "contact.phone_label": "Telefon raqamingiz",
        "contact.subject": "Mavzu",
        "contact.sub_order": "Yangi buyurtma",
        "contact.sub_quote": "Narx so'rovi",
        "contact.sub_delivery": "Yetkazish bo'yicha savol",
        "contact.sub_partner": "Hamkorlik",
        "contact.sub_other": "Boshqa",
        "contact.message": "Xabar",
        "contact.send": "Xabar yuborish",
        "contact.response_note": "Ish vaqtida 30 daqiqa ichida javob beramiz",

        "map.title": "Konimizga tashrif buyuring",
        "map.desc": "Sirdaryo, O'zbekiston",
        "map.directions": "Yo'nalish",

        "footer.brand_desc": "Sifatli materiallar. Ishonchli ta'minot. Sirdaryo daryosidan qurilish materiallari bo'yicha ishonchli hamkoringiz.",
        "footer.contacts": "Bog'laning",
        "footer.links": "Tezkor havolalar",
        "footer.rights": "Barcha huquqlar himoyalangan.",
    }
};

// Material names for calculator display
const materialNames = {
    en: { sand: "Sand", gravel: "Gravel", crushed: "Crushed Stone", rocks: "Rocks & Stones", river_stone: "River Stone", pgs: "PGS Mix" },
    ru: { sand: "Песок", gravel: "Гравий", crushed: "Щебень", rocks: "Камни", river_stone: "Речной камень", pgs: "ПГС" },
    uz: { sand: "Qum", gravel: "Shag'al", crushed: "Maydalangan tosh", rocks: "Toshlar", river_stone: "Daryo toshi", pgs: "PQA" }
};

let currentLang = 'en';

// ===================== LANGUAGE SWITCHER =====================
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('data-lang', lang);

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                // don't overwrite input values
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Update active lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update calculator
    updateCalculator();
}

// ===================== PRELOADER =====================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 1800);
});

// ===================== CUSTOM CURSOR =====================
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX - 3 + 'px';
    cursorDot.style.top = mouseY - 3 + 'px';
});

function animateCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.left = ringX - 18 + 'px';
    cursorRing.style.top = ringY - 18 + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Scale cursor on hover over links/buttons
document.querySelectorAll('a, button, .product-card, .truck-card, .delivery-info-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorRing.style.transform = 'translate(-15px, -15px) scale(1.5)';
        cursorRing.style.borderColor = 'rgba(200,163,95,0.7)';
    });
    el.addEventListener('mouseleave', () => {
        cursorRing.style.transform = 'translate(-15px, -15px) scale(1)';
        cursorRing.style.borderColor = 'rgba(200,163,95,0.4)';
    });
});

// ===================== NAVBAR SCROLL =====================
const navbar = document.getElementById('navbar');
const floatingCta = document.getElementById('floatingCta');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Floating CTA
    if (scrollY > 400) {
        floatingCta.classList.add('visible');
    } else {
        floatingCta.classList.remove('visible');
    }

    lastScroll = scrollY;
});

// ===================== MOBILE MENU =====================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===================== LANGUAGE BUTTONS =====================
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
    });
});

// ===================== SCROLL TO TOP =====================
document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===================== SCROLL ANIMATIONS =====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Counter animation
            if (entry.target.querySelector('.stat-num')) {
                entry.target.querySelectorAll('.stat-num').forEach(counter => {
                    animateCounter(counter);
                });
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.product-card, .ops-feature, .about-stat, .hero-stat').forEach(el => {
    observer.observe(el);
});

// Initially visible (hero stats)
setTimeout(() => {
    document.querySelectorAll('.hero-stat').forEach(el => el.classList.add('visible'));
    document.querySelectorAll('.product-card').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 100);
    });
}, 2000);

// ===================== COUNTER ANIMATION =====================
function animateCounter(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = 'true';
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.floor(eased * target);
        el.textContent = current >= 1000 ? formatNumber(current) : current;
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ===================== HERO PARTICLES =====================
function createParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(200, 163, 95, ${Math.random() * 0.3 + 0.05});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 8 + 6}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(particle);
    }
}
createParticles();

// Float animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes float {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
        25% { transform: translate(${Math.random() * 40 - 20}px, -${Math.random() * 30 + 10}px) scale(1.2); opacity: 0.6; }
        50% { transform: translate(${Math.random() * 60 - 30}px, -${Math.random() * 50 + 20}px) scale(0.8); opacity: 0.4; }
        75% { transform: translate(${Math.random() * 40 - 20}px, -${Math.random() * 20 + 5}px) scale(1.1); opacity: 0.5; }
    }
`;
document.head.appendChild(styleSheet);

// ===================== CALCULATOR =====================
const DELIVERY_RATE_PER_KM = 1500; // UZS per km per ton (simplified)
const TRUCK_CAPACITY = 25; // tons per truck
const USD_RATE = 12800; // UZS per USD

function updateCalculator() {
    const materialInput = document.querySelector('input[name="material"]:checked');
    const qty = parseInt(document.getElementById('calcQty').value) || 0;
    const deliveryType = document.querySelector('input[name="delivery"]:checked').value;
    const destSelect = document.getElementById('calcDest');
    const destKm = parseInt(destSelect.value) || 0;

    const materialPrice = parseInt(materialInput.getAttribute('data-price'));
    const materialValue = materialInput.value;
    const materialName = materialNames[currentLang]?.[materialValue] || materialValue;

    const materialCost = materialPrice * qty;
    let deliveryCost = 0;
    let trucksNeeded = 0;

    if (deliveryType === 'delivery' && destKm > 0) {
        trucksNeeded = Math.ceil(qty / TRUCK_CAPACITY);
        deliveryCost = destKm * DELIVERY_RATE_PER_KM * trucksNeeded;
    }

    const total = materialCost + deliveryCost;
    const usd = Math.round(total / USD_RATE);

    // Update display
    document.getElementById('resultMaterial').textContent = materialName;
    document.getElementById('resultQty').textContent = qty + (currentLang === 'ru' ? ' тонн' : currentLang === 'uz' ? ' tonna' : ' tons');
    document.getElementById('resultMaterialCost').textContent = formatNumber(materialCost) + ' UZS';
    document.getElementById('resultDeliveryCost').textContent = formatNumber(deliveryCost) + ' UZS';
    document.getElementById('resultTrucks').textContent = trucksNeeded;
    document.getElementById('resultTotal').textContent = formatNumber(total) + ' UZS';
    document.getElementById('resultUSD').textContent = '~$' + formatNumber(usd);

    // Show/hide delivery lines
    const showDelivery = deliveryType === 'delivery';
    document.getElementById('resultDeliveryLine').style.display = showDelivery ? 'flex' : 'none';
    document.getElementById('resultTrucksLine').style.display = showDelivery ? 'flex' : 'none';
    document.getElementById('deliveryDest').style.display = showDelivery ? 'block' : 'none';
}

// Calculator event listeners
document.querySelectorAll('input[name="material"]').forEach(input => {
    input.addEventListener('change', updateCalculator);
});

document.getElementById('calcQty').addEventListener('input', updateCalculator);

document.querySelectorAll('input[name="delivery"]').forEach(input => {
    input.addEventListener('change', updateCalculator);
});

document.getElementById('calcDest').addEventListener('change', updateCalculator);

// Qty buttons
document.getElementById('qtyMinus').addEventListener('click', () => {
    const input = document.getElementById('calcQty');
    const val = parseInt(input.value) || 0;
    if (val > 1) {
        input.value = val - 1;
        updateCalculator();
        updateQtyPresets(val - 1);
    }
});

document.getElementById('qtyPlus').addEventListener('click', () => {
    const input = document.getElementById('calcQty');
    const val = parseInt(input.value) || 0;
    input.value = val + 1;
    updateCalculator();
    updateQtyPresets(val + 1);
});

// Qty presets
document.querySelectorAll('.qty-preset').forEach(btn => {
    btn.addEventListener('click', () => {
        const qty = parseInt(btn.getAttribute('data-qty'));
        document.getElementById('calcQty').value = qty;
        updateCalculator();
        updateQtyPresets(qty);
    });
});

function updateQtyPresets(value) {
    document.querySelectorAll('.qty-preset').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.getAttribute('data-qty')) === value);
    });
}

// Initial calc
updateCalculator();

// ===================== CONTACT FORM =====================
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value;
    const phone = document.getElementById('formPhone').value;
    const subject = document.getElementById('formSubject').value;
    const message = document.getElementById('formMessage').value;

    // Create success modal
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
        <div class="success-content">
            <div class="success-icon"><i class="fas fa-check-circle"></i></div>
            <h3>${currentLang === 'ru' ? 'Сообщение отправлено!' : currentLang === 'uz' ? 'Xabar yuborildi!' : 'Message Sent!'}</h3>
            <p>${currentLang === 'ru' ? 'Спасибо, ' + name + '! Мы свяжемся с вами в ближайшее время.' : currentLang === 'uz' ? 'Rahmat, ' + name + '! Tez orada siz bilan bog\'lanamiz.' : 'Thank you, ' + name + '! We\'ll get back to you shortly.'}</p>
            <button class="btn btn-primary" onclick="this.closest('.success-modal').remove()">OK</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Trigger animation
    setTimeout(() => modal.classList.add('active'), 10);

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    // Reset form
    e.target.reset();
});

// ===================== PARALLAX ON MOUSE MOVE =====================
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    document.querySelectorAll('.hero-title').forEach(el => {
        el.style.transform = `translate(${x * 5}px, ${y * 3}px)`;
    });
});

// ===================== EQUIPMENT SLIDER DRAG =====================
const slider = document.getElementById('equipmentSlider');
if (slider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => { isDown = false; slider.style.cursor = 'grab'; });
    slider.addEventListener('mouseup', () => { isDown = false; slider.style.cursor = 'grab'; });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
    slider.style.cursor = 'grab';
}

// ===================== NAVBAR ACTIVE LINK =====================
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) {
            if (scrollY >= top && scrollY < top + height) {
                document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
                link.style.color = '#C8A35F';
            }
        }
    });
});

// ===================== INITIALIZE =====================
// Set default language
setLanguage('en');

console.log('🏔️ Gold Sand and Gravy website loaded successfully!');

