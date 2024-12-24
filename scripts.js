// Функция для перевода массива текстов через LibreTranslate API
/*async function translateTexts(texts, targetLanguage) {
    try {
        const response = await fetch("https://libretranslate.com/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                q: texts,       // Массив текстов
                source: "auto", // Автоматическое определение исходного языка
                target: targetLanguage, // Целевой язык
                format: "text"
            }),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.map(item => item.translatedText); // Возвращаем массив переведённых текстов
    } catch (error) {
        console.error("Ошибка перевода:", error);
        return texts; // В случае ошибки возвращаем оригинальные тексты
    }
}*/


/*async function translateTexts(texts, targetLanguage) {
    try {
        const response = await fetch("https://libretranslate.com/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                q: texts,       // Массив текстов
                source: "auto", // Автоматическое определение исходного языка
                target: targetLanguage, // Целевой язык
                format: "text"
            }),
        });

        if (!response.ok) {
            const errorText = await response.text(); // Получаем текст ошибки
            throw new Error(`API Error: ${response.status} - ${errorText}`); // Выводим код ошибки и текст
        }

        const data = await response.json();
        return data.map(item => item.translatedText); // Возвращаем массив переведённых текстов
    } catch (error) {
        console.error("Ошибка перевода:", error);
        return texts; // В случае ошибки возвращаем оригинальные тексты
    }
}




// Функция для перевода всех элементов с атрибутом data-translate
async function translatePage(targetLanguage) {
    const elements = document.querySelectorAll("[data-translate]");
    const textsToTranslate = [];

    // Сохраняем исходные тексты
    elements.forEach(element => {
        textsToTranslate.push(element.textContent.trim());
    });

    // Переводим тексты одним запросом
    const translatedTexts = await translateTexts(textsToTranslate, targetLanguage);

    // Заменяем тексты на переведённые
    elements.forEach((element, index) => {
        element.textContent = translatedTexts[index];
    });
}


// Обработчик для переключения языка
document.getElementById("language-switcher").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value; // Получаем выбранный язык
    console.log("Выбран язык:", selectedLanguage); // Для отладки
    translatePage(selectedLanguage); // Переводим страницу
});*/




document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById("openModalBtn");
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


const dictionary = {
    "home": { "ru": "Главная", "kz": "Басты бет", "en": "Home" },
    "servers": { "ru": "Серверы", "kz": "Серверлер", "en": "Servers" },
    "about_us": { "ru": "О нас", "kz": "Біз туралы", "en": "About us" },
    "intro_text": {
        "ru": "Rifty — это хостинг-провайдер, который фокусируется на предоставлении качественных услуг без лишних излишеств.",
        "kz": "Rifty жоғары сапалы қызметтерді артық нәрселерсіз ұсынатын хостинг провайдері.",
        "en": "Rifty is a hosting provider that focuses on delivering high-quality services without unnecessary frills."
    },
    "our_mission": { "ru": "Наша миссия", "kz": "Біздің миссиямыз", "en": "Our mission" },
    "mission_text": {
        "ru": "Мы стремимся предлагать надежные хостинговые решения, которые отвечают вашим потребностям.",
        "kz": "Сіздердің қажеттіліктеріңізге сай сенімді хостинг шешімдерін ұсынамыз.",
        "en": "We strive to offer reliable hosting solutions that meet your needs."
    },
    "our_story": { "ru": "Наша история", "kz": "Біздің тарихымыз", "en": "Our story" },
    "story_text": {
        "ru": "Основанная в 2024 году, Rifty была создана для решения пробелов в индустрии хостинга.",
        "kz": "2024 жылы құрылған Rifty хостинг саласындағы олқылықтарды толтыру үшін жасалды.",
        "en": "Founded in 2024, Rifty was created to bridge the gap in the hosting industry, offering affordable and efficient solutions for individuals and businesses alike."
    },
    "footer_copyright": {
        "ru": "© 2024 Rifty. Все права защищены.",
        "kz": "© 2024 Rifty. Барлық құқықтар сақталған.",
        "en": "© 2024 Rifty. All rights reserved."
    },
    "footer_contacts": {
        "ru": "Контакты: sasanya@gmail.com | Телефон: +7 777 777 7777",
        "kz": "Байланыс: sasanya@gmail.com | Телефон: +7 777 777 7777",
        "en": "Contacts: sasanya@gmail.com | Phone: +7 777 777 7777"
    },
    "footer_locations": {
        "ru": "Штаб-квартира: Алматы, Астана, Дубай, Нью-Йорк, Мадрид",
        "kz": "Бас кеңсе: Алматы, Астана, Дубай, Нью-Йорк, Мадрид",
        "en": "Headquarters: Almaty, Astana, Dubai, New York, Madrid"
    }
};

// Функция для перевода текста на странице
function translatePage(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        if (dictionary[key] && dictionary[key][language]) {
            element.textContent = dictionary[key][language];
        } else {
            console.warn(`Не найден перевод для ключа: ${key}`);
        }
    });
}

// Обработчик события для переключателя языка
document.getElementById("language-switcher").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    translatePage(selectedLanguage);
});

// Перевод страницы при загрузке (по умолчанию)
document.addEventListener("DOMContentLoaded", () => {
    const defaultLanguage = "en";
    translatePage(defaultLanguage);
});




        const currencyRates = {
            usd: 1,
            eur: 0.93,
            kzt: 460
        };
        
        // Функция для обновления цены
        function updatePrice() {
            const selectedCurrency = currencySwitcher.value;
            const priceElements = document.querySelectorAll(".price");
            priceElements.forEach(priceElement => {
                const priceInUsd = parseFloat(priceElement.getAttribute("data-price"));
                if (!isNaN(priceInUsd)) {
                    const convertedPrice = (priceInUsd * currencyRates[selectedCurrency]).toFixed(2);
                    if (selectedCurrency === 'usd') {
                        priceElement.textContent = `${convertedPrice} USD/месяц`;
                    } else if (selectedCurrency === 'eur') {
                        priceElement.textContent = `${convertedPrice} EUR/месяц`;
                    } else if (selectedCurrency === 'kzt') {
                        priceElement.textContent = `${convertedPrice} KZT/месяц`;
                    }
                } else {
                    
                    priceElement.textContent = "Ошибка: некорректная цена";
                }
            });
        }
        
        
        const currencySwitcher = document.getElementById("currency-switcher");
        currencySwitcher.addEventListener("change", updatePrice);
        
        
        updatePrice();
        
        

// Кнопка
window.addEventListener("scroll", () => {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (window.scrollY > 300) { // Показывать кнопку после прокрутки 300px
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});


document.getElementById("scrollToTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});






