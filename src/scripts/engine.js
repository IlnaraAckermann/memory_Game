const cards = [
	"1",
	"1",
	"2",
	"2",
	"3",
	"3",
	"4",
	"4",
	"5",
	"5",
	"6",
	"6",
	"7",
	"7",
	"8",
	"8",
];
let openCards = [];

let shuffleCards = cards.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < cards.length; i++) {
	let box = document.createElement("div");
	box.className = "item";
	box.innerHTML = `
    <img src="./src/assets/img/${shuffleCards[i]}.jpg" alt="Gato ${shuffleCards[i]}" >
    `;
	box.onclick = handleClick;
	document.querySelector(".game").appendChild(box);
}
/**
 * Função responsável pela ações do click na carta, ela valida se a carta selecionada é valida e se as cartas são iguais
 */
function handleClick() {
	//todo implementar audio!
	if (!this.classList.contains("boxMatch")) {
		if (!openCards.includes(this)) {
			if (openCards.length < 2) {
				this.classList.add("boxOpen");
				openCards.push(this);
			}
			if (openCards.length === 2) {
				setTimeout(checkMatch, 500);
			}
		}
	}
}
/**
 * função responsável por verificar o match das cartas e adicionar a classe boxMatch
 */
function checkMatch() {
	if (openCards[0].innerHTML === openCards[1].innerHTML) {
		openCards[0].classList.add("boxMatch");
		openCards[1].classList.add("boxMatch");
	} else {
		openCards[0].classList.remove("boxOpen");
		openCards[1].classList.remove("boxOpen");
	}
	openCards = [];
	if (document.querySelectorAll(".boxMatch").length === cards.length) {
		alert("Você Venceu!!!");
	}
}
