const header = document.querySelector('.header')

const nav = document.querySelector('.nav')
const burger = document.querySelector('.nav__menu-mobile')

const burgerIcon = document.querySelector('.nav__burger-icon')
const burgerItems = document.querySelectorAll('.nav__menu-mobile-item')

const menuCategoryItems = document.querySelectorAll('.menu__category-item')
const menuSearchBar = document.querySelector('.menu__search-bar-input')
const manuItemsTitle = document.querySelectorAll('.menu__item-title')

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

menuCategoryItems.forEach(el => el.addEventListener('click', menuCategory))
window.addEventListener('scroll', showNavBar)
burgerIcon.addEventListener('click', blockScroll)
burgerItems.forEach(el => el.addEventListener('click', blockScroll))
menuSearchBar.addEventListener('input', menuSearch)
