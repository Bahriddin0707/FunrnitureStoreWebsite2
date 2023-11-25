"use strict";
window.addEventListener("DOMContentLoaded", () => {
    //Loader
    function loaderFunc() {
        const loaderBg = document.querySelector(".loader__bg");
        loaderBg.style.display = "none";
    }
    // scroll Top

    function scrollTop() {
        const scrollTop = document.querySelector(".scroll-top");
        if (window.scrollY >= 300) {
            scrollTop.classList.add("show-scroll");
        } else {
            scrollTop.classList.remove("show-scroll");
        }
    }
    window.addEventListener("scroll", scrollTop);
    setTimeout(loaderFunc, 1500);

    // Header
    function headerFunc() {
        const navAccDiv = document.querySelector(".nav__acc div"),
            navArrow = document.querySelector(".nav__acc div i"),
            navAccUl = document.querySelector(".nav__acc ul"),
            navLis = document.querySelectorAll("nav ul li"),
            navLinks = document.querySelectorAll("nav ul a"),
            navAccLinks = document.querySelectorAll(".nav__acc ul a"),
            nav = document.querySelector("header nav");

        navLis.forEach((li, index) => {
            if (li.classList.contains("active")) {
                const selectedLink = navLinks[index].cloneNode("true");
                navAccDiv.innerHTML = "";
                navAccDiv.append(selectedLink);
                navAccDiv.append(navArrow);
                console.log("Hi");
            }
        });
        navAccDiv.addEventListener("click", () => {
            navAccUl.classList.toggle("nav-active");
            navAccLinks.forEach((link) => {
                link.addEventListener("click", () => {
                    const selectedLink = link.cloneNode("true");
                    navAccDiv.innerHTML = "";
                    navAccDiv.append(selectedLink);
                    navAccDiv.append(navArrow);
                    navAccUl.classList.remove("nav-active");
                });
                console.log(selectedLink);
            });
        });

        const headerForm = document.querySelector(".header__search form");
        headerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData();
            let obj = new Object();
            formData.forEach((key, data) => {
                obj[key] = data;
            });
            fetch("http://localhost:3000/requests", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(obj),
                })
                .then((data) => data.text())
                .then((data) => console.log(data));
        });
    }
    headerFunc();

    // sliderShowcase
    function showcaseFunc() {
        const showcaseSlider = document.querySelector(".showcase__slider"),
            showcaseSlides = document.querySelectorAll(".showcase__slider .slide"),
            prev = document.querySelector(".showcase__slider .prev"),
            next = document.querySelector(".showcase__slider .next");
        for (let i = 0; i < showcaseSlides.length; i++) {
            if (i != 0) {
                showcaseSlides[i].style.display = "none";
            }
        }
        let sliderCount = 0;
        next.addEventListener("click", () => {
            showcaseSlides.forEach((item) => {
                item.style.display = "none";
                item.classList.add("slide-active");
            });
            sliderCount++;
            if (sliderCount > showcaseSlides.length - 1) {
                sliderCount = 0;
                showcaseSlides[sliderCount].style.display = "block";
                showcaseSlides[sliderCount].classList.add("slide-active");
            } else {
                showcaseSlides[sliderCount].style.display = "block";
                showcaseSlides[sliderCount].classList.add("slide-active");
            }
        });
        prev.addEventListener("click", () => {
            showcaseSlides.forEach((item) => {
                item.style.display = "none";
                item.classList.add("slide-active");
            });
            sliderCount--;
            if (sliderCount < 0) {
                sliderCount = showcaseSlides.length - 1;
                showcaseSlides[sliderCount].style.display = "block";
                showcaseSlides[sliderCount].classList.add("slide-active");
            } else {
                showcaseSlides[sliderCount].style.display = "block";
                showcaseSlides[sliderCount].classList.add("slide-active");
            }
        });
    }
    showcaseFunc();

    //Swiper
    var swiper = new Swiper(".product__slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
});