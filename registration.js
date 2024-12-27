const dictionary = {
    "home": { "ru": "Главная", "kz": "Басты бет", "en": "Home" },
    "servers": { "ru": "Серверы", "kz": "Серверлер", "en": "Servers" },
    "about_us": { "ru": "О нас", "kz": "Біз туралы", "en": "About us" },
    "registration": { "ru": "Регистрация", "kz": "Тіркелу", "en": "Registration" },
    "nickname_label": { "ru": "Псевдоним", "kz": "Лақап ат", "en": "Nickname" },
    "nickname_placeholder": { "ru": "Введите псевдоним", "kz": "Лақап атты енгізіңіз", "en": "Enter the nickname" },
    "phone_label": { "ru": "Номер телефона", "kz": "Телефон нөмірі", "en": "Phone number" },
    "phone_placeholder": { "ru": "Введите номер телефона", "kz": "Телефон нөмірін енгізіңіз", "en": "Enter the phone number" },
    "password_label": { "ru": "Пароль", "kz": "Құпия сөз", "en": "Password" },
    "password_placeholder": { "ru": "Введите пароль", "kz": "Құпия сөзді енгізіңіз", "en": "Enter password" },
    "signup_button": { "ru": "Зарегистрироваться", "kz": "Тіркелу", "en": "Sign up" },
    "footer_copyright": { "ru": "© 2024 Rifty. Все права защищены.", "kz": "© 2024 Rifty. Барлық құқықтар сақталған.", "en": "© 2024 Rifty. All rights reserved." },
    "footer_contacts": { "ru": "Контакты: sasanya@gmail.com | Телефон: +7 777 777 7777", "kz": "Байланыс: sasanya@gmail.com | Телефон: +7 777 777 7777", "en": "Contacts: sasanya@gmail.com | Phone: +7 777 777 7777" },
    "footer_locations": { "ru": "Штаб-квартира: Алматы, Астана, Дубай, Нью-Йорк, Мадрид", "kz": "Бас кеңсе: Алматы, Астана, Дубай, Нью-Йорк, Мадрид", "en": "Headquarters: Almaty, Astana, Dubai, New York, Madrid" },
    "cart": {"ru": "Корзина", "kz": "Себет", "en": "Cart"},
    "amount" : {"ru": "Количество", "kz": "Саны", "en": "Amount"},
    "amount_placeholder" : {"ru": "Введите количество", "kz": "Санын енгізіңіз", "en": "Enter the amount"}
};

// Function to translate the page
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
