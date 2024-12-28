/*const dictionary = { 
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


/*сөздік*/ 
    const translations = {
    en: {
        "home": "Home",
        "about us": "About us",
        "servers": "Servers",
        
        "footer_copyright": "© 2024 Filler Cloud. All rights reserved.",
        "footer_contacts": "Contacts: sasanya@gmail.com | Phone: +7 777 777 7777",
        "footer_locations": "Headquarters: Almaty, Astana, Dubai, New York, Madrid",

        "virtual-server-title": "Virtual Server",
        "line-private-cloud-title": "Line Private Cloud",
        "line-public-cloud-title_1": "Line Public Cloud",
        "private-cloud-description": "Private Cloud tariff servers have access to the Internet via a common public address with the ability to forward any ports.",
       
        "line-public-cloud-description": "Each server of the Public Cloud tariff has an individual public address",
        "private-cloud-start-title-1": "Medium Cloud",
        "private-cloud-start-title-2": "Standard Cloud",
        "private-cloud-start-title-3": "Premium Cloud", 
        
        "processor": "Processor",
        "ram": "RAM",
        "disk": "Disk up to",
        "price": "Price",
        "order-button": "Add to cart",
        "ghz": "GHz",
        "gb": "GB",
        "mbps": "Mbps"
    },
    ru: {
        "home": "Главная",
        "about us": "О нас",
        "servers": "Серверы",
        
        "footer_copyright": "© 2024 Filler Cloud. Все права защищены.",
        "footer_contacts":  "Контакты: sasanya@gmail.com | Телефон: +7 777 777 7777",
        "footer_locations": "Штаб-квартира: Алматы, Астана, Дубай, Нью-Йорк, Мадрид",

        "virtual-server-title": "Виртуальный сервер",
        "line-private-cloud-title": "Линия частного облака",
        "line-public-cloud-title_1": "Линия публичного облака",
        "private-cloud-description": "Серверы тарифа Private Cloud имеют доступ к Интернету через общий публичный адрес с возможностью переадресации любых портов.",
        "line-public-cloud-description": "Каждый сервер тарифа Public Cloud имеет индивидуальный публичный адрес.",
        
        "private-cloud-start-title-1": "Среднее облако",
        "private-cloud-start-title-2": "Стандарт облако",
        "private-cloud-start-title-3": "Премиум облако", 
        
        "processor": "Процессор",
        "ram": "ОЗУ",
        "disk": "Диск до",
        "price": "Цена",
        "order-button": "Добавить в корзину",
        "ghz": "ГГц",
        "gb": "ГБ",
        "mbps": "Мбит/с"
    },
    kz: {
        "home": "Басты бет",
        "about us": "Біз туралы",
        "servers": "Серверлер",
        
        "footer_copyright": "© 2024 Filler Cloud. Барлық құқықтар сақталған.",
        "footer_contacts": "Байланыс: sasanya@gmail.com | Телефон: +7 777 777 7777",
        "footer_locations": "Бас кеңсе: Алматы, Астана, Дубай, Нью-Йорк, Мадрид",

        "virtual-server-title": "Виртуалды сервер",
        "line-private-cloud-title": "Жеке бұлттық желі",
        "line-public-cloud-title_1": "Жалпы бұлттық желі",
        "private-cloud-description": "Private Cloud тарифтік серверлері жалпы жалпы мекенжай арқылы Интернетке қол жеткізе алады.",
        "line-public-cloud-description": "Қоғамдық бұлт тарифінің әрбір серверінде жеке жалпы мекенжайы болады",
        
        "private-cloud-start-title-1": "Орташа бұлт",
        "private-cloud-start-title-2": "Стандарт бұлт",
        "private-cloud-start-title-3": "Премиум бұлт", 

        "processor": "Процессор",
        "ram": "ЖЖҚ",
        "disk": "Диск дейін",
        "price": "Бағасы",
        "order-button": "Себетке қосу",
        "ghz": "ГГц",
        "gb": "ГБ",
        "mbps": "Мбит/с",
    }
};


function translatePage(language) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });

    document.querySelectorAll("[data-translate-value]").forEach(element => {
        const key = element.getAttribute("data-translate-value");
        const value = element.getAttribute("data-original-value"); 
        if (translations[language][key]) {
            const unit = translations[language][key]; 
            element.innerHTML = `${value} ${unit}`; 
        }
    });

    document.querySelectorAll("[data-price]").forEach(element => {
        const price = element.getAttribute("data-price"); 
        const currency = translations[language]["price"]; 
        element.innerHTML = `${currency}: ${price}`; 
    });
}

document.getElementById("language-switcher").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    translatePage(selectedLanguage);
});

translatePage("en");




document.addEventListener('DOMContentLoaded', () => {
    const cartModal = document.getElementById('cartModal');
    const closeModal = document.getElementById('closeModal');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cartItems');

    document.querySelector('.cart-icon')?.addEventListener('click', () => {
        cartModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name'); 
            const model = button.closest('.pricing-card').querySelector('.model').textContent; 

            if (cartItems.textContent.includes('Cart is empty')) {
                cartItems.innerHTML = '';
            }

            const existingItem = Array.from(cartItems.children).find(item => item.textContent === `${name} (Модель ${model})`);
            if (!existingItem) {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.textContent = `${name} ${model}`;

                // удалить
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.classList.add('remove-item');
                cartItem.appendChild(removeButton);

                // товар қосу
                cartItems.appendChild(cartItem);

                removeButton.addEventListener('click', () => {
                    cartItem.remove();
                    if (cartItems.children.length === 0) {
                        cartItems.innerHTML = '<p>Cart is empty</p>';
                    }
                });
            }
        });
    });
});



