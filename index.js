// Reveal sections when scrolling

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


document.querySelectorAll(".section").forEach(section => {

    section.classList.add("reveal");

    observer.observe(section);

});


// Console message

console.log("Portfolio successfully loaded.");