const translations = {
    "en": {
        "home": "Home",
        "about_us": "About us",
        "servers": "Servers",
        "login_btn": "Login",
        "virtual_servers": "Virtual servers from KZT500",
        "activation": "activation",
        "guarantee": "guarantee",
        "reliable": "data center",
        "own_hardware": "own hardware",
        "resources": "resources",
        "administration": "administration hour for free",
        "footer": "&copy; 2024 Filler Cloud. All rights reserved.",
        "footer_contacts": "Contacts: sasanya@gmail.com | Phone number: +7 777 777 7777",
        "footer_locations": "Headquarters: Almaty, Astana, Dubai, New York, Madrid",
        "about_link": "About",
        "servers_link": "Servers",
        "home_link": "Home"
    },
    "ru": {
        "home": "Главная",
        "about_us": "О нас",
        "servers": "Сервера",
        "login_btn": "Войти",
        "virtual_servers": "Виртуальные серверы от KZT500",
        "activation": "активация",
        "guarantee": "гарантия",
        "reliable": "центр обработки данных",
        "own_hardware": "собственное оборудование",
        "resources": "ресурсы",
        "administration": "административный час бесплатно",
        "footer": "&copy; 2024 Filler Cloud. Все права защищены.",
        "footer_contacts": "Контакты: sasanya@gmail.com | Телефон: +7 777 777 7777",
        "footer_locations": "Офисы: Алматы, Астана, Дубай, Нью-Йорк, Мадрид",
        "about_link": "О нас",
        "servers_link": "Сервера",
        "home_link": "Главная"
    },
    "kz": {
        "home": "Басты бет",
        "about_us": "Біз туралы",
        "servers": "Серверлер",
        "login_btn": "Кіру",
        "virtual_servers": "Виртуалды серверлер KZT500 бастап",
        "activation": "активация",
        "guarantee": "кепілдік",
        "reliable": "деректер орталығы",
        "own_hardware": "өз жабдығы",
        "resources": "ресурстар",
        "administration": "әкімшілік тегін сағат",
        "footer": "&copy; 2024 Filler Cloud. Барлық құқықтар қорғалған.",
        "footer_contacts": "Байланыстар: sasanya@gmail.com | Телефон нөмірі: +7 777 777 7777",
        "footer_locations": "Бас кеңселер: Алматы, Астана, Дубай, Нью-Йорк, Мадрид",
        "about_link": "Біз туралы",
        "servers_link": "Серверлер",
        "home_link": "Басты бет"
    }
};

const languageSwitcher = document.getElementById("language-switcher");

languageSwitcher.addEventListener("change", function () {
    const language = languageSwitcher.value;
    translatePage(language);
});

function translatePage(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-translate");
        if (translations[language] && translations[language][translationKey]) {
            element.innerHTML = translations[language][translationKey];
        }
    });
}

// дефолт ағылшын тілі
translatePage("en");
