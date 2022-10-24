import {crewData} from './data.js';
const dotContainer = document.querySelector('.dot-indicators');
const crewArticle = document.querySelector('.crew-info');
const crewImageContainer = document.querySelector('.crew-image');
const btns = document.querySelectorAll('.dot-indicators button');
dotContainer.addEventListener('click', function (e) {
	let target = e.target;
	const dotBtns = dotContainer.querySelectorAll('button');
	dotBtns.forEach(function (dot) {
		dot.classList.remove('active');
		target.classList.add('active');
	});
});
btns.forEach(function (btn, index) {
	btn.addEventListener('click', function (e) {
		const crewInfo = crewData
			.map(function (person, item) {
				if (item === index) {
					return `<h2 class="uppercase ff-serif fs-500 text-white ">${person.role}</h2>
			<h1 class="uppercase ff-serif fs-700 text-white">${person.name}</h1>
			<p class="ff-sans-normal fs-400 text-accent">
			  ${person.bio}
			</p>`;
				}
			})
			.join('');
		crewArticle.innerHTML = crewInfo;
		const crewImages = crewData
			.map(function (person, image) {
				if (image === index) {
					return `<img src="${person.images}" alt="a picture of our crew member">
				`;
				}
			})
			.join('');
		crewImageContainer.innerHTML = crewImages;
	});
});
// function displayCrewData(array) {
// 	const crewInfo = array
// 		.map(function (data) {
// 			return `
// 		<article class="crew-info flow">
// 		  <h2 class="uppercase ff-serif fs-500 text-white ">${data.role}</h2>
// 		  <h1 class="uppercase ff-serif fs-700 text-white">${data.name}</h1>
// 		  <p class="ff-sans-normal fs-400 text-accent">
// 		  ${data.bio}
// 		  </p>
// 		</article>`;
// 		})
// 		.join('');
// 	crewArticle.innerHTML = crewInfo;
// }
// displayCrewData();
const newArray = crewData.map(function (person) {
	return `${person.name}`;
});

console.log(newArray);
