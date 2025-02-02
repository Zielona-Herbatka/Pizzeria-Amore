const header = document.querySelector('.header')

const navMenu = document.querySelector('.nav__menu')
const nav = document.querySelector('.nav')

const burgerIcon = document.querySelector('.nav__burger-icon')
const navMenuItems = document.querySelectorAll('.nav__menu-item')

const menuSearchBar = document.querySelector('.menu__search-bar-input')
const manuItemsTitle = document.querySelectorAll('.menu__item-title')

const showNav = () => {
	navMenu.classList.toggle('showNav')

	if (document.body.style.overflow === '') {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = ''
	}
}

const showNavBar = () => {
	if (window.scrollY > 50) {
		nav.style.backgroundColor = '#83c5be'
	} else {
		nav.style.backgroundColor = 'transparent'
	}
}

const menuSearch = () => {
	manuItemsTitle.forEach(el => {
		const parentBox = el.closest('.menu__item')

		if (!el.textContent.toLocaleLowerCase().includes(menuSearchBar.value.toLowerCase())) {
			parentBox.style.display = 'none'
		} else {
			parentBox.style.display = 'block'
		}
	})
}

window.addEventListener('scroll', showNavBar)
burgerIcon.addEventListener('click', showNav)
navMenuItems.forEach(el => el.addEventListener('click', showNav))
menuSearchBar.addEventListener('input', menuSearch)
