function toggleMenu() {

    let menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}

const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});

// const card = document.querySelectorAll(".about-container");

// window.addEventListener("scroll", () => {
//     cards.forEach(card => {
//         const position = card.getBoundingClientRect().top;

//         if (position < window.innerHeight - 100) {
//             card.classList.add("show");
//         }
//     });
// });

const cards_ = document.querySelectorAll(".hero");

window.addEventListener("scroll", () => {
    cards_.forEach(card => {
        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
})

const cards1 = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    cards1.forEach(card => {
        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
})

const cards2 = document.querySelectorAll(".skills-section");

window.addEventListener("scroll", () => {
    cards2.forEach(card => {
        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
})

const cards3 = document.querySelectorAll(".education-section");

window.addEventListener("scroll", () => {
    cards3.forEach(card => {
        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
})

const cards4 = document.querySelectorAll(".contact-section");

window.addEventListener("scroll", () => {
    cards4.forEach(card => {
        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
})
window.dispatchEvent(new Event("scroll"));