const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		//toggle nav
		nav.classList.toggle('nav-active');

		//animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `nav-link-fade 0.5s ease forwards ${
					index / 7 + 0.3
				}s`;
			}
		});
		//burger animation
		burger.classList.toggle('toggle');

		//stop scrolling when menu is open
		if (nav.classList.contains('nav-active')) {
			document.body.style.position = 'fixed';
		} else {
			document.body.style.position = '';
		}

		console.log(nav.classList);
	});
};

navSlide();
