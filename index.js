const lifeBeat = document.querySelector(".hero-img");
const main = document.querySelector("main");
const galeria = document.querySelector(".galeria");
const vejaMaisBtn = document.getElementById("vejaMais-btn");
const vejaMais = document.querySelector("main > :nth-last-child(2)");

setInterval(() => {
    lifeBeat.classList.add("batida");
    setTimeout(() => {
        lifeBeat.classList.remove("batida");
    }, 500);
}, 3000);

const accessKey = "EB4GmlHnnNcT3zafT40oaEkFSNTYC8KlibtZispIQ4c"; // Sou apenas um estudante inocente, por favor, não use minha chave para motivos torpes. Obrigado U.u

async function fetchImage() {
    try {
        const url = `https://api.unsplash.com/photos/random?query=colorfulness&orientation=landscape&client_id=${accessKey}`;
        const response = await fetch(url);
        const data = await response.json();
        const imgUrl = await data.urls.full;
        const alt = await data.alt_description;
        return [imgUrl, alt];
    } catch (err) {
        console.log(err);
    }
}

async function addPhotos() {
    for (let i = 0; i < 4; i++) {
        const imgAtributtes = await fetchImage();

        const img = document.createElement("img");
        img.classList.add("img-galeria");
        img.src = imgAtributtes[0];
        img.alt = imgAtributtes[1];
        galeria.appendChild(img);
    }
}

vejaMaisBtn.addEventListener("click", addPhotos);