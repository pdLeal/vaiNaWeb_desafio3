const lifeBeat = document.querySelector(".hero-img");
console.log(lifeBeat);

setInterval(() => {
    lifeBeat.classList.add("batida");
    setTimeout(() => {
        lifeBeat.classList.remove("batida");
    }, 500);
}, 3000);