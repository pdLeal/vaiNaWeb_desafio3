const lifeBeat = document.querySelector(".hero-img");
const main = document.querySelector("main");
const galeria = document.querySelector(".galeria");
const vejaMaisBtn = document.getElementById("vejaMais-btn");
const queryBtns = document.querySelectorAll(".queryBtn");

setInterval(() => {
    lifeBeat.classList.add("batida");
    setTimeout(() => {
        lifeBeat.classList.remove("batida");
    }, 500);
}, 3000);

const accessKey = "EB4GmlHnnNcT3zafT40oaEkFSNTYC8KlibtZispIQ4c"; // Sou apenas um estudante inocente, por favor, não use minha chave para motivos torpes. Obrigado U.u
let query = "colorfulness";

async function fetchImage() {
    try {
        const url = `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape&client_id=${accessKey}`;
        const response = await fetch(url);
        const data = await response.json();
        const imgUrl = await data.urls.full;
        const alt = await data.alt_description;
        return [imgUrl, alt];
    } catch (err) {
        return ["./imgs/ps1.jpg", "O limite de imagens foi atingido, fique com este lindo ps1 =)"]
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

function changeQuery() {
    while(galeria.firstChild) {
        galeria.removeChild(galeria.lastChild);
    }

    if (!this.classList.contains("selecionado")) {
        queryBtns.forEach(queryBtn => queryBtn.classList.remove("selecionado"));
        this.classList.add("selecionado");

        if (this.classList.contains("arte")) {
            query = "art-and-design";
            addPhotos();
        } else if (this.classList.contains("estilo")) {
            query = "style-and-music";
            addPhotos();
        } else {
            query = "technology-and-future";
            addPhotos();
        }

    } else {
        this.classList.remove("selecionado");
        query = "colorfulness";
        addPhotos();
    }

}

function createLink() {
    const galeriaRect = galeria.getBoundingClientRect();

    if (galeriaRect.y <= 0) {
        const link = document.createElement("a");
        link.href = "#header";
        link.id = "back-Up";
        link.textContent = "Topo";
        main.appendChild(link);

        window.removeEventListener("scroll", createLink);
        window.addEventListener("scroll", deleteLink);
    }
}

function deleteLink() {
    const galeriaRect = galeria.getBoundingClientRect();

    if (galeriaRect.y > 0) {
        const backUp = document.getElementById("back-Up");
        main.removeChild(backUp);

        window.removeEventListener("scroll", deleteLink);
        window.addEventListener("scroll", createLink);
    }
}

vejaMaisBtn.addEventListener("click", addPhotos);

window.addEventListener("scroll", createLink);

queryBtns.forEach(queryBtn => {
    queryBtn.addEventListener("click", changeQuery);
});