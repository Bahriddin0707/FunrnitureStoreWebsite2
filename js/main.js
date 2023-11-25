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
});