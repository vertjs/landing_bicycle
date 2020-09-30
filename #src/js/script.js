const menuIcon = document.querySelector(".icon-menu")
const menuBody = document.querySelector(".menu__body")

let ready = () => {
	document.querySelectorAll(".ibg").forEach(el => {
		if(el.querySelector('img')){
			el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
			el.querySelector('img').style.display = 'none';
		}
	});

	menuIcon.addEventListener('click', (e) => {
		menuIcon.classList.toggle("active")
		menuBody.classList.toggle("active")
	})	
}

if($('.slider__body').length>0){
	$('.slider__body').slick({
		autoplay: true,
		dots: true,
		arrows: false,
		accessibility:false,
		slidesToShow:1,
		autoplaySpeed: 3000,
		adaptiveHeight:true,
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}

document.addEventListener("DOMContentLoaded", ready);

