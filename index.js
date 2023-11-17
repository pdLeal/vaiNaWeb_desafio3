const lifeBeat = document.querySelector(".hero-img");
const main = document.querySelector("main");
const vejaMaisBtn = document.getElementById("vejaMais-btn");
const vejaMais = document.querySelector("main > :nth-last-child(2)");

setInterval(() => {
    lifeBeat.classList.add("batida");
    setTimeout(() => {
        lifeBeat.classList.remove("batida");
    }, 500);
}, 3000);

function addPhotos() {
    const section = document.createElement("section");
    section.classList.add("galeria");

    for (let i = 0; i < 4; i++) {
        const img = document.createElement("img");
        img.classList.add("img-galeria");
        img.src = "./imgs/ps1.jpg";
        section.appendChild(img);
    }
    main.insertBefore(section, vejaMais);
}

vejaMaisBtn.addEventListener("click", addPhotos);