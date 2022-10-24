import {destinationData} from './data.js';

const tabLists = document.querySelector('.tab-list');
const tabBtns = document.querySelectorAll('.tab-list button');
const destinationInfo = document.querySelector('.destination-info');
const destinationImage = document.querySelector('.destination-image');

tabLists.addEventListener('click', function (e) {
	let id = e.target.dataset.id;
	tabBtns.forEach(function (btn) {
		if (id) {
			btn.classList.remove('active');
			e.target.classList.add('active');
			const displayDestination = destinationData.filter(function (destination) {
				if (id === destination.name) {
					return destination;
				}
			});
			displayItems(displayDestination);
			displayImages(displayDestination);
			console.log(displayDestination);
		}
	});
});

function displayItems(data) {
	const displayData = data
		.map(function (dataItem) {
			return `<h2 class="uppercase ff-serif fs-800 ">${dataItem.name}</h2>
		            <p>${dataItem.description}</p>
		            <div class="destination-meta flex">
                        <div>
			                <h3 class="uppercase ff-sans-cond fs-200 text-accent letter-spacing-3 ">
                            Avg. distance
                            </h3>
			                <p class=" uppercase ff-serif fs-500 ">${dataItem.distance}</p>
		                </div>
                        <div>
                            <h3 class="uppercase ff-sans-cond fs-200 text-accent letter-spacing-3 ">
                            Est. travel time
                            </h3>
                            <p class="uppercase ff-serif fs-500 ">${dataItem.travel}</p>
                        </div>
		            </div>`;
		})
		.join('');
	destinationInfo.innerHTML = displayData;
}

function displayImages(data) {
	const displayDataImage = data
		.map(function (dataItem) {
			return `<img src="${dataItem.images}" alt="${dataItem.name}">`;
		})
		.join('');
	destinationImage.innerHTML = displayDataImage;
	console.log(displayDataImage);
}
