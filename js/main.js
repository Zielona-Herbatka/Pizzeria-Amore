// HEADER
const header = document.querySelector('.header')

// NAV
const nav = document.querySelector('.nav')
const burger = document.querySelector('.nav__menu-mobile')
const burgerIcon = document.querySelector('.nav__burger-icon')
const burgerItems = document.querySelectorAll('.nav__menu-mobile-item')

// MENU
const menuCategoryItems = document.querySelectorAll('.menu__category-item')
const menuNeapol = document.querySelector('.menu__box-neapol')
const menuRome = document.querySelector('.menu__box-rome')
const menuSicily = document.querySelector('.menu__box-sicily')

const blockScroll = () => {
	burger.classList.toggle('showNav')

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

const menuCategory = e => {
	menuCategoryItems.forEach(el => el.classList.remove('menu__category-item--active'))
	e.target.classList.toggle('menu__category-item--active')

	if (e.target.classList.contains('neapol-button')) {
		menuNeapol.classList.add('menu__box--active')
		menuRome.classList.remove('menu__box--active')
		menuSicily.classList.remove('menu__box--active')
	} else if (e.target.classList.contains('rome-button')) {
		menuRome.classList.add('menu__box--active')
		menuNeapol.classList.remove('menu__box--active')
		menuSicily.classList.remove('menu__box--active')
	} else {
		menuSicily.classList.add('menu__box--active')
		menuNeapol.classList.remove('menu__box--active')
		menuRome.classList.remove('menu__box--active')
	}
}

menuCategoryItems.forEach(el => el.addEventListener('click', menuCategory))
window.addEventListener('scroll', showNavBar)
burgerIcon.addEventListener('click', blockScroll)
burgerItems.forEach(el => el.addEventListener('click', blockScroll))
