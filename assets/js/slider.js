$(document).on('ready', function () {
	var slide = $('.slider-single');
	var slideTotal = slide.length - 1;
	var slideCurrent = -1;

	function slideInitial() {
		slide.addClass('proactivede');
		setTimeout(function () {
			slideRight();
		}, 500);
	}

	function slideRight() {
		if (slideCurrent < slideTotal) {
			slideCurrent++;
		} else {
			slideCurrent = 0;
		}

		if (slideCurrent > 0) {
			var preactiveSlide = slide.eq(slideCurrent - 1);
		} else {
			var preactiveSlide = slide.eq(slideTotal);
		}
		var activeSlide = slide.eq(slideCurrent);
		if (slideCurrent < slideTotal) {
			var proactiveSlide = slide.eq(slideCurrent + 1);
		} else {
			var proactiveSlide = slide.eq(0);

		}

		slide.each(function () {
			var thisSlide = $(this);
			if (thisSlide.hasClass('preactivede')) {
				thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
			}
			if (thisSlide.hasClass('preactive')) {
				thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
			}
		});
		preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
		preactiveSlide.find('video').trigger('pause');
		activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
		activeSlide.find('video').trigger('play');
		proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
		proactiveSlide.find('video').trigger('pause');
	}

	function slideLeft() {
		if (slideCurrent > 0) {
			slideCurrent--;
		} else {
			slideCurrent = slideTotal;
		}

		if (slideCurrent < slideTotal) {
			var proactiveSlide = slide.eq(slideCurrent + 1);
		} else {
			var proactiveSlide = slide.eq(0);
		}
		var activeSlide = slide.eq(slideCurrent);
		if (slideCurrent > 0) {
			var preactiveSlide = slide.eq(slideCurrent - 1);
		} else {
			var preactiveSlide = slide.eq(slideTotal);
		}
		slide.each(function () {
			var thisSlide = $(this);
			if (thisSlide.hasClass('proactivede')) {
				thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
			}
			if (thisSlide.hasClass('proactive')) {
				thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
			}
		});
		preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
		preactiveSlide.find('video').trigger('pause');

		activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
		activeSlide.find('video').trigger('play');
		proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
		proactiveSlide.find('video').trigger('pause');

	}
	var left = $('.slider-left');
	var right = $('.slider-right');
	left.on('click', function () {
		slideLeft();
	});
	right.on('click', function () {
		slideRight();
	});
	slideInitial();



	$('.responsiveslick').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 4,
		prevArrow: '<button class="slide-arrow prev-arrow"></button>',
		nextArrow: '<button class="slide-arrow next-arrow"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2
				}
			}

			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	$('.responsiveslick2').slick({
		dots: false,
		infinite: false,
		autoplay:false,
		speed: 300,
		arrows:true,
centerPadding: '20%',touchThreshold:100,
		slidesToShow: 2,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow: '<button class="slide-arrow prev-arrow"></button>',
		nextArrow: '<button class="slide-arrow next-arrow"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
					arrows:true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows:true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows:true,
				}
			}

			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
});