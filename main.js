const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const square = document.querySelector('.square');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

const hello = () => {
	console.log('Hello World!');
};

const mainColor = () => {
	square.style.backgroundColor = 'gold';
};

const changeColor1 = () => {
	square.style.backgroundColor = 'tomato';
	setTimeout(mainColor, 2000);
};

const changeColor2 = () => {
	square.style.backgroundColor = 'royalblue';
	setTimeout(mainColor, 2000);
};

const paragraphs = () => {
	p1.classList.toggle('show');
	p2.classList.toggle('show');
};

btn1.addEventListener('dblclick', hello);
square.addEventListener('mouseenter', changeColor1);
square.addEventListener('mouseleave', changeColor2);
btn2.addEventListener('click', paragraphs);
