let slickDots = document.querySelector(".slick-dots")
let btn = slickDots.getElementsByTagName("li")
let menu = document.querySelector(".icon-menu")

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

	menu.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('active')
		if ( e.currentTarget.classList.contains('active') === false ) {
			document.querySelector(".menu__body").style.display = 'none'
		} else document.querySelector(".menu__body").style.display = 'block'
		
	})
}

const slides = document.querySelectorAll(".body__item")


function following(e) {
	slickDots.querySelectorAll("li").forEach(el => el.classList.remove("active"))
	slides.forEach(el => el.style.display = "none")
	
	e.target.classList.add("active")
	
	slides[e.target.innerText].style.display = "block"
}

document.addEventListener("DOMContentLoaded", ready);
