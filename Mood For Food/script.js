const API_URI = 'https://foodish-api.herokuapp.com/api';

const helpMeChooseBtn = document.querySelector('#choose-btn');
const app = document.querySelector('#app');

async function getRandomFood() {
	const res = await fetch(API_URI);
	const foodRes = await res.json();
	//console.log(foodRes);
	return foodRes;
}

async function chooseFoodItem() {
	if (
		document.querySelector('.food-image') &&
		document.querySelector('.food-image').src
	) {
		document.querySelector('.food-image').remove();
		document.querySelector('.food-name').remove();
	}
	const { image: randomFoodImage } = await getRandomFood();
	let foodImg = new Image();
	let foodNameEle = document.createElement('p');
	const foodName = randomFoodImage.split('/images/')[1].split('/')[0];
	foodImg.src = randomFoodImage;
	foodImg.alt = foodName;
	foodImg.classList.add('food-image');
	foodNameEle.classList.add('food-name');

	foodImg.onload = function () {
		foodNameEle.innerHTML = foodName + '🍽';
		foodImg.after(foodNameEle);
	};

	app.insertAdjacentElement('beforeend', foodImg);
}

helpMeChooseBtn.addEventListener('click', chooseFoodItem);
