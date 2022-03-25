let card = document.querySelector('.card');
let toggle = document.querySelector('.toggle');

toggle.onclick = () => {
	card.classList.toggle('active');
}