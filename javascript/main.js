// Click do Menu (ida e volta)

var btnMenu = document.getElementById ('btn-menu');
var nav = document.getElementById ('nav-bar');


btnMenu.addEventListener ('click' , function () {
	nav.classList.toggle('mostrar');
})


// Scroll suave para as Sections

const menuItems = document.querySelectorAll('.nav-menu a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
window.scroll({top: to, behavior: "smooth",
	})
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});
