/*const dictionary = { 
    // Ваш словарь с переводами
    "home": { "ru": "Главная", "kz": "Басты бет", "en": "Home" },
    "about us": { "ru": "О нас", "kz": "Біз туралы", "en": "About Us" },
    "servers": { "ru": "Серверы", "kz": "Серверлер", "en": "Servers" },
    "footer": { 
        "ru": "&copy; 2024 Rifty. Все права защищены.", 
        "kz": "&copy; 2024 Rifty. Барлық құқықтар сақталған.", 
        "en": "&copy; 2024 Rifty. All rights reserved."
    },
    "contacts": { 
        "ru": "Контакты: sasanya@gmail.com | Телефон: +7 777 777 7777", 
        "kz": "Байланыс: sasanya@gmail.com | Телефон: +7 777 777 7777", 
        "en": "Contacts: sasanya@gmail.com | Phone: +7 777 777 7777"
    },
    "headquarters": { 
        "ru": "Штаб-квартира: Алматы, Астана, Дубай, Нью-Йорк, Мадрид", 
        "kz": "Бас кеңсе: Алматы, Астана, Дубай, Нью-Йорк, Мадрид", 
        "en": "Headquarters: Almaty, Astana, Dubai, New York, Madrid"
    },
    "virtual-server-title": { 
        "ru": "Виртуальный сервер", 
        "kz": "Виртуалды сервер", 
        "en": "Virtual server"
    },
    "line-private-cloud-title": { 
        "ru": "Линия частного облака", 
        "kz": "Жеке бұлт желісі", 
        "en": "Line private cloud"
    },
    "private-cloud-description": { 
        "ru": "Серверы тарифов Private Cloud имеют доступ к Интернету через общий публичный адрес с возможностью перенаправления любых портов.", 
        "kz": "Private Cloud тарифтері серверлері интернетке жалпы қоғамдық мекен-жай арқылы қосылады және кез келген порттарды бағыттауға мүмкіндік береді.", 
        "en": "Private Cloud tariff servers have access to the Internet via a common public address with the ability to forward any ports."
    },
    "price": { 
        "ru": "Цена", 
        "kz": "Баға", 
        "en": "Price"
    },
    "order-button": { 
        "ru": "Заказать", 
        "kz": "Тапсырыс беру", 
        "en": "Order"
    },
    "cpu-description": { 
        "ru": "1 vCPU Процессор 3.1 ГГц", 
        "kz": "1 vCPU Процессор 3.1 ГГц", 
        "en": "1 vCPU Processor 3.1 GHz"
    },
    "ram-description": { 
        "ru": "2 ГБ ОЗУ", 
        "kz": "2 ГБ ОЗУ", 
        "en": "2 GB RAM"
    },
    "storage-description": { 
        "ru": "16 ГБ Диск до 100 Мбит/с", 
        "kz": "16 ГБ Диск до 100 Мбит/с", 
        "en": "16 GB Disk up to 100 Mbps"
    },
    "private-cloud-start-title": { 
        "ru": "Private Cloud Start", 
        "kz": "Private Cloud Start", 
        "en": "Private Cloud Start"
    },
    "cpu_info": { 
        "ru": "1 vCPU Процессор 3.1 ГГц", 
        "kz": "1 vCPU Процессор 3.1 ГГц", 
        "en": "1 vCPU Processor 3.1 GHz"
    },
    "ram_info": { 
        "ru": "2 ГБ ОЗУ", 
        "kz": "2 ГБ ОЗУ", 
        "en": "2 GB RAM"
    },
    "disk_info": { 
        "ru": "32 ГБ Диск до 100 Мбит/с", 
        "kz": "32 ГБ Диск до 100 Мбит/с", 
        "en": "32 GB Disk up to 100 Mbps"
    }
};

// Функция для перевода страницы
function translatePage(language) {
    const elements = document.querySelectorAll("[data-translate]"); // Находим все элементы с атрибутом data-translate
    elements.forEach(element => {
        const key = element.getAttribute("data-translate"); // Получаем ключ из атрибута data-translate
        if (dictionary[key] && dictionary[key][language]) {
            element.textContent = dictionary[key][language]; // Заменяем текст на соответствующий перевод
        } else {
            console.warn(`Не найден перевод для ключа: ${key}`); // Если перевод не найден
        }
    });
}

// Обработчик события для переключателя языка
document.getElementById("language-switcher").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value; // Получаем выбранный язык
    translatePage(selectedLanguage); // Переводим страницу на выбранный язык
    localStorage.setItem("language", selectedLanguage); // Сохраняем выбранный язык в localStorage
});

// Перевод страницы при загрузке (по умолчанию)
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "en"; // Получаем язык из localStorage или используем английский по умолчанию
    translatePage(savedLanguage); // Переводим страницу на выбранный язык
});


*/


// Словарь переводов
    const translations = {
    en: {
        "home": "Home",
        "about us": "About Us",
        "servers": "Servers",
        
        "footer_copyright": "© 2024 Rifty. All rights reserved.",
        "footer_contacts": "Contacts: sasanya@gmail.com | Phone: +7 777 777 7777",
        "footer_locations": "Headquarters: Almaty, Astana, Dubai, New York, Madrid",

        "virtual-server-title": "Virtual Server",
        "line-private-cloud-title": "Line Private Cloud",
        "line-public-cloud-title_1": "Line Public Cloud",
        "private-cloud-description": "Private Cloud tariff servers have access to the Internet via a common public address with the ability to forward any ports.",
        "line-public-cloud-description": "Each server of the Public Cloud tariff has an individual public address",
        "private-cloud-start-title": "Private Cloud Start",
        "private_cloud_start_title": "Private Cloud Start 2.0",
        "cpu": "Processor",
        "ram": "RAM",
        "storage": "Disk up to",
        "price": "Price",
        "order-button": "Add to cart",
        "GHz": "GHz",
        "GB": "GB",
        "Mbps": "Mbps"
    },
    ru: {
        "home": "Главная",
        "about us": "О нас",
        "servers": "Серверы",
        
        "footer_copyright": "© 2024 Rifty. Все права защищены.",
        "footer_contacts":  "Контакты: sasanya@gmail.com | Телефон: +7 777 777 7777",
        "footer_locations": "Штаб-квартира: Алматы, Астана, Дубай, Нью-Йорк, Мадрид",

        "virtual-server-title": "Виртуальный сервер",
        "line-private-cloud-title": "Линия частного облака",
        "line-public-cloud-title_1": "Линия публичного облака",
        "private-cloud-description": "Серверы тарифа Private Cloud имеют доступ к Интернету через общий публичный адрес с возможностью переадресации любых портов.",
        "line-public-cloud-description": "Каждый сервер тарифа Public Cloud имеет индивидуальный публичный адрес.",
        "private-cloud-start-title": "Частное облако Старт",
        "private_cloud_start_title": "Частное облако Старт 2.0",
        "cpu": "Процессор",
        "ram": "ОЗУ",
        "storage": "Диск до",
        "price": "Цена",
        "order-button": "Добавить в корзину",
        "GHz": "ГГц",
        "GB": "ГБ",
        "Mbps": "Мбит/с"
    },
    kz: {
        "home": "Басты бет",
        "about us": "Біз туралы",
        "servers": "Серверлер",
        
        "footer_copyright": "© 2024 Rifty. Барлық құқықтар сақталған.",
        "footer_contacts": "Байланыс: sasanya@gmail.com | Телефон: +7 777 777 7777",
        "footer_locations": "Бас кеңсе: Алматы, Астана, Дубай, Нью-Йорк, Мадрид",

        "virtual-server-title": "Виртуалды сервер",
        "line-private-cloud-title": "Жеке бұлттық желі",
        "line-public-cloud-title_1": "Жалпы бұлттық желі",
        "private-cloud-description": "Private Cloud тарифтік серверлері жалпы жалпы мекенжай арқылы Интернетке қол жеткізе алады.",
        "line-public-cloud-description": "Қоғамдық бұлт тарифінің әрбір серверінде жеке жалпы мекенжайы болады",
        "private-cloud-start-title": "Жеке бұлтты бастау",
        "private_cloud_start_title": "Жеке бұлтты бастау 2.0",
        "cpu": "Процессор",
        "ram": "ЖЖҚ",
        "storage": "Диск дейін",
        "price": "Бағасы",
        "order-button": "Себетке қосу",
        "GHz": "ГГц",
        "GB": "ГБ",
        "Mbps": "Мбит/с",
    }
};


// Функция перевода
function translatePage(language) {
    // Перевод статического текста
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });

    // Перевод значений в карточках (динамические данные)
    document.querySelectorAll("[data-translate-value]").forEach(element => {
        const key = element.getAttribute("data-translate-value");
        const value = element.getAttribute("data-original-value"); // Исходное значение (цифры)
        if (translations[language][key]) {
            const unit = translations[language][key]; // Единицы измерения (например, "ГГц", "GB")
            element.innerHTML = `${value} ${unit}`; // Формируем строку с числом и единицей измерения
        }
    });

    // Перевод цены (обрабатываем отдельно, чтобы сохранить цифры)
    document.querySelectorAll("[data-price]").forEach(element => {
        const price = element.getAttribute("data-price"); // Цена (цифры)
        const currency = translations[language]["price"]; // Перевод слова "Цена"
        element.innerHTML = `${currency}: ${price}`; // Формируем строку с переводом и цифрами
    });
}

// Обработчик изменения языка
document.getElementById("language-switcher").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    translatePage(selectedLanguage);
});

// Установить язык по умолчанию
translatePage("en");

  







