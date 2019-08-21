const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".search-box");

const options = {
    rootMargin: "-600px 0px 0px 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            nav.classList.add("nav-scrolled");
        } else {
            nav.classList.remove("nav-scrolled");
        }
    })


}, options);

observer.observe(sectionOne);
