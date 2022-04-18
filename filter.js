let filterOption = document.querySelectorAll('.filter-option');
let caseStudy = document.querySelectorAll('.case-study');
let subject = document.querySelectorAll('.subject');

for (let i = 0; i < filterOption.length; i++) {
	filterOption[i].addEventListener('click', function () {
		for (let j = 0; j < filterOption.length; j++) {
			filterOption[j].classList.remove('filter-active');
		}
		this.classList.add('filter-active');

		let dataFilter = this.getAttribute('data-filter');

		for (let k = 0; k < caseStudy.length; k++) {
			caseStudy[k].classList.remove('filter-active');
			caseStudy[k].classList.add('hide');

			if (
				caseStudy[k].getAttribute('data-item') == dataFilter ||
				dataFilter == 'all'
			) {
				caseStudy[k].classList.remove('hide');
				// caseStudy[k].classList.add('filter-active');
			}
		}

		for (let l = 0; l < subject.length; l++) {
			subject[l].classList.remove('filter-active');
			subject[l].classList.add('hide');

			if (
				subject[l].getAttribute('data-item') == dataFilter ||
				dataFilter == 'all'
			) {
				subject[l].classList.remove('hide');
				// caseStudy[k].classList.add('filter-active');
			}
		}
	});
}
