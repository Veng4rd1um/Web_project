const dictionary = {
    "home": { "ru": "Главная", "kz": "Басты бет", "en": "Home" },
    "servers": { "ru": "Серверы", "kz": "Серверлер", "en": "Servers" },
    "about_us": { "ru": "О нас", "kz": "Біз туралы", "en": "About us" },
    "auth_title": {"ru": "Авторизация", "kz": "Авторизация", "en": "Authorization"},
    "auth_nickname_label": { "ru": "Псевдоним", "kz": "Лақап ат", "en": "Nickname" },
    "auth_nickname_placeholder": { "ru": "Введите псевдоним", "kz": "Лақап атты енгізіңіз", "en": "Enter the nickname" },
    "auth_password_label": { "ru": "Пароль", "kz": "Құпия сөз", "en": "Password" },
    "auth_password_placeholder": { "ru": "Введите пароль", "kz": "Құпия сөзді енгізіңіз", "en": "Enter password" },
    "auth_login_button": { "ru": "Войти", "kz": "Кіру", "en": "Log in" },
    "footer_copyright": { "ru": "© 2024 Rifty. Все права защищены.", "kz": "© 2024 Rifty. Барлық құқықтар сақталған.", "en": "© 2024 Rifty. All rights reserved." },
    "footer_contacts": { "ru": "Контакты: sasanya@gmail.com | Телефон: +7 777 777 7777", "kz": "Байланыс: sasanya@gmail.com | Телефон: +7 777 777 7777", "en": "Contacts: sasanya@gmail.com | Phone: +7 777 777 7777" },
    "footer_locations": { "ru": "Штаб-квартира: Алматы, Астана, Дубай, Нью-Йорк, Мадрид", "kz": "Бас кеңсе: Алматы, Астана, Дубай, Нью-Йорк, Мадрид", "en": "Headquarters: Almaty, Astana, Dubai, New York, Madrid" }
};

function translatePage(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        if (dictionary[key] && dictionary[key][language]) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.placeholder = dictionary[key][language];
            } else {
                element.textContent = dictionary[key][language];
            }
        } else {
            console.warn(`Translation not found for key: ${key}`);
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const defaultLanguage = "en"; 
    translatePage(defaultLanguage);
});


document.getElementById("language-switcher").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    translatePage(selectedLanguage);
});






// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');

    let currentIndex = 0;

    // Проверка на наличие кнопок и слайдов
    if (!prevButton || !nextButton || slides.length === 0) {
        console.error('Carousel buttons or slides are missing!');
        return;
    }

    // Функция для обновления слайдов
    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        console.log(`Current slide index: ${currentIndex}`); // Логирование индекса текущего слайда
    }

    // Переключение на следующий слайд
    nextButton.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Перейти к первому слайду
        }
        updateCarousel();
    });

    // Переключение на предыдущий слайд
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Перейти к последнему слайду
        }
        updateCarousel();
    });

    // Инициализация карусели
    updateCarousel();
});
