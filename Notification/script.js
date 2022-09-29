import {friendsData} from './data.js';
import {Friends} from './friends.js';

function render() {
	document.getElementById('notification1').innerHTML =
		myFriend1.getNotificationListHtml();
	document.getElementById('notification2').innerHTML =
		myFriend2.getNotificationListHtml();
	document.getElementById('notification3').innerHTML =
		myFriend3.getNotificationListHtml();
	document.getElementById('notification4').innerHTML =
		myFriend4.getNotificationListHtml();
	document.getElementById('notification5').innerHTML =
		myFriend5.getNotificationListHtml();
	document.getElementById('notification6').innerHTML =
		myFriend6.getNotificationListHtml();
	document.getElementById('notification7').innerHTML =
		myFriend7.getNotificationListHtml();
}

const myFriend1 = new Friends(friendsData.friend1);
const myFriend2 = new Friends(friendsData.friend2);
const myFriend3 = new Friends(friendsData.friend3);
const myFriend4 = new Friends(friendsData.friend4);
const myFriend5 = new Friends(friendsData.friend5);
const myFriend6 = new Friends(friendsData.friend6);
const myFriend7 = new Friends(friendsData.friend7);

render();

const markAll = document.querySelector('.mark-all-as-read');
const notification = document.querySelector('.notification-number');

const lists = document.querySelectorAll('.list');

lists.forEach(function (list) {
	const dot = list.querySelector('.dots');
	list.addEventListener(
		'click',
		function () {
			list.style.backgroundColor = 'var(--white-color)';
			dot.classList.add('read');
			if (notification.innerHTML > 0) {
				notification.innerHTML = notification.innerHTML - 1;
			} else {
				notification.innerHTML = 0;
			}
		},
		{once: true}
	);
});

markAll.addEventListener('click', function () {
	notification.innerHTML = 0;
	lists.forEach((list) => {
		list.style.backgroundColor = 'var(--white-color)';
	});
	const dots = document.querySelectorAll('.dots');
	dots.forEach((dot) => {
		dot.classList.add('read');
	});
});
