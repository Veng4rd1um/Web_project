document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');

    let currentIndex = 0;

    if (!prevButton || !nextButton || slides.length === 0) {
        console.error('Carousel buttons or slides are missing!');
        return;
    }

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        console.log(`Current slide index: ${currentIndex}`); 
    }

    // келесі слайдқа өті
    nextButton.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // соңғы слайдқа өту
        }
        updateCarousel();
    });

    
    updateCarousel();
});



const showError = (message) => {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
};

// қате тығу
const hideError = () => {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
};

// запрос жібреу
const sendRequest = async (url, method, body) => {
    try {
        const response = await fetch(url, {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Unknown error occurred.");
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message || "Server error. Please try again later.");
    }
};

// Логикасы Log In
const handleLogin = async () => {
    const nickname = document.getElementById("nickname").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!nickname || !password) {
        showError("Nickname and password are required.");
        return;
    }

    hideError();

    try {
        await sendRequest("http://localhost:8080/api/auth/login", "POST", { username: nickname, password });
        alert("Login successful!");
        window.location.href = "/index.html"; 
    } catch (error) {
        showError(error.message);
    }
};

// кіру ллгика
const handleSignup = async () => {
    const username = document.getElementById("nickname").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        showError("Username and password are required.");
        return;
    }

    hideError();

    try {
        await sendRequest("http://localhost:8080/api/auth/signup", "POST", { username, password });
        alert("Registration successful!");
        window.location.href = "/index.html";
    } catch (error) {
        showError(error.message);
    }
};


// байланыстыру
document.getElementById("login-button").addEventListener("click", handleLogin);
document.getElementById("signup-button").addEventListener("click", handleSignup);
