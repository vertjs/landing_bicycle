const slickDots = document.querySelector(".slick-dots")
const btn = slickDots.getElementsByTagName("li")
const menuIcon = document.querySelector(".icon-menu")
const menuBody = document.querySelector(".menu__body")
const slides = document.querySelectorAll(".body__item")

let ready = () => {
	document.querySelectorAll(".ibg").forEach(el => {
		if(el.querySelector('img')){
			el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
			el.querySelector('img').style.display = 'none';
		}
	});

	document.querySelector(".body__item").style.display = 'block';
	
	Array.from(btn).forEach(el => {
		el.addEventListener('click', following)
	})

	menuIcon.addEventListener('click', (e) => {
		menuIcon.classList.toggle("active")
		menuBody.classList.toggle("active")
	})
}

function following(e) {
	slickDots.querySelectorAll("li").forEach(el => el.classList.remove("active"))
	slides.forEach(el => el.style.display = "none")
	
	e.target.classList.add("active")
	
	slides[e.target.innerText].style.display = "block"
}

document.addEventListener("DOMContentLoaded", ready);
