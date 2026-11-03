
// =====================================
// PUJANSEVA - JAVASCRIPT
// =====================================


// LANGUAGE SWITCHING

const languageButton = document.getElementById("languageButton");
const hindiButton = document.getElementById("hindiButton");
const languageText = document.getElementById("languageText");

let currentLanguage = "en";

function changeLanguage(language) {

    currentLanguage = language;

    document.querySelectorAll("[data-en]").forEach(element => {

        const text = element.getAttribute(`data-${language}`);

        if (text) {
            element.innerHTML = text;
        }

    });

    languageText.textContent =
        language === "en" ? "English" : "हिन्दी";

    hindiButton.style.opacity =
        language === "hi" ? "1" : ".65";

    languageButton.style.borderColor =
        language === "en" ? "#ffc52e" : "#80531b";

    document.documentElement.lang = language;
}

languageButton.addEventListener("click", () => {
    changeLanguage(currentLanguage === "en" ? "hi" : "en");
});

hindiButton.addEventListener("click", () => {
    changeLanguage("hi");
});


// MOBILE NAVIGATION

const menuButton = document.getElementById("menuButton");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("show");

    menuButton.textContent =
        navbar.classList.contains("show") ? "✕" : "☰";

});

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("show");
        menuButton.textContent = "☰";
    });

});


// DATE VALIDATION

const bookingDate = document.getElementById("bookingDate");

const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

bookingDate.min = localDate;


// PUJAN CARD SELECTION

document.querySelectorAll(".pujan-card").forEach(card => {

    card.addEventListener("click", () => {

        const pujanName = card.querySelector("h3").textContent;

        const pujanSelect = document.getElementById("pujanSelect");

        pujanSelect.value = pujanName;

    });

});


// QUICK BOOKING FORM

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const pujan = document.getElementById("pujanSelect").value;
    const date = bookingDate.value;
    const time = document.getElementById("bookingTime").value;

    if (!pujan || !date || !time) {
        alert("Please fill in all booking details.");
        return;
    }

    alert(
        "Your booking details have been selected!\n\n" +
        "Pujan: " + pujan +
        "\nDate: " + date +
        "\nTime: " + time +
        "\n\nThe actual booking and payment system will be connected in a later stage."
    );

});


// INITIAL LANGUAGE

changeLanguage("en");
