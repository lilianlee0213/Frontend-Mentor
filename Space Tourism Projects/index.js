const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
navToggle.addEventListener('click', function () {
	primaryNav.classList.toggle('nav-active');
	if (primaryNav.classList.contains('nav-active')) {
		navToggle.style.backgroundImage = "url('./assets/shared/nav-close.svg')";
		navToggle.style.animation = 'none';
	} else {
		navToggle.style.backgroundImage = "url('./assets/shared/nav-open.svg')";
	}
});
// destination
