import './styles/index.scss'

const card = document.querySelector(".card__container");

console.log(card.offsetWidth);

window.addEventListener("resize", () => {
    if (card.offsetWidth < 530) {
        card.classList.add("card__container--small");
    } else {
        card.classList.remove("card__container--small");
    }
})
