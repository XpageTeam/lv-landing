import $ from "jquery";
import is from "is_js";

window.jQuery = $
window.$ = $
window.is = is

require("./jquery.fancybox.js");
require("./flipclock.min.js");

document.addEventListener("DOMContentLoaded", function(){
	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "close", "thumbs"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	});


	
	var clock = $('.forms-cont .timer').FlipClock( 600, {
		// clockFace: 'DailyCounter',
		autoStart: false,
		countdown: true,
		showHours: false,
		language: 'ru-ru',
		callbacks: {
			stop: function() {
				$('.forms-cont .timer-info').html('Акция закончилась!')
			}
		}
	});

	
	clock.setTime(600);
	clock.setCountdown(true);
	clock.start();


	var clockMobile = $('.intro .timer').FlipClock( 600, {
		// clockFace: 'DailyCounter',
		autoStart: false,
		countdown: true,
		language: 'ru-ru',
		callbacks: {
			stop: function() {
				$('.intro .timer-info').html('Акция закончилась!')
			}
		}
	});

	
	clockMobile.setTime(600);
	clockMobile.setCountdown(true);
	clockMobile.start();





});

document.addEventListener("DOMContentLoaded", () => {

	const advSlider = document.querySelector('.advantages .swiper-list');
		
		if (!advSlider)
			return

		import("swiper/js/swiper.esm.js").then(function(Module){	

			const {Swiper, Navigation} = Module;

			Swiper.use([Navigation]);

			new Swiper(advSlider, {
				// slidesPerView: 3,
				spaceBetween: 30,
				slidesPerView: 'auto',
				// autoplay: true,
				loop: false,
				navigation: {
					nextEl: '.advantages .swiper-button-next',
					prevEl: '.advantages .swiper-button-prev',
				},
				breakpoints: {
					1610: {
				      slidesPerView: 3,
				    },
				    370: {
				    	spaceBetween: 30,
				    },
				    320: {
				      spaceBetween: 20,
				      slidesPerView: 'auto',
				    },
			  	}
			});

		})
})