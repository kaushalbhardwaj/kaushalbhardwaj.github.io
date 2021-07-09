(function ($) {

	var $window = $(window),
		$header = $('#header')


	function handlePreloader() {
		if ($('.preloader').length) {
			$('.preloader').delay(500).fadeOut(500);
			$('body').removeClass('page-load');
		}
	}

	$window.on('load', function () {
		handlePreloader();
	});
	new WOW().init();


	var $accor = $('.accordion');
	$accor.each(function () {
		$(this).toggleClass('ui-accordion ui-widget ui-helper-reset'); $(this).find('h3').addClass('ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all'); $(this).find('.exdiv').addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom');
		$(this).find(".exdiv").hide();
	});
	var $trigger = $accor.find('h3');
	$trigger.unbind('click').bind('click', function (e) {
		var location = $(this).parent();
		if ($(this).next().is(':hidden')) {
			var $triggerloc = $('h3', location);
			$triggerloc.removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
			$triggerloc.find('span').removeClass('ui-accordion-icon-active');
			$(this).find('span').addClass('ui-accordion-icon-active');
			$(this).addClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideDown(300);
		} else {
			var $triggerloc = $('h3', location);
			$triggerloc.removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
			$triggerloc.find('span').removeClass('ui-accordion-icon-active');
		}

		e.preventDefault();
	});
	$('.menu_icon').click(function () {
		$(this).parent().children('.menu_btm').addClass('menu_btm_add');
		$(this).toggleClass('menu_cl_add');
		$('body').toggleClass('js--mobile-menu-active');
		$('.menu_btm').slideToggle();
		//$('body').toggleClass('js--mobile-menu-active');
	})
	if ($(window).width() <= 991) {
		$('.menuul li a').click(function () {
			$('body').removeClass('js--mobile-menu-active');
		})
	} else {
		$('body').removeClass('js--mobile-menu-active');
	}

	$(window).scroll(function () {
		var ScrollHdr = $(window).scrollTop();
		if (ScrollHdr > 0) {
			$('body').addClass('Fixed_header');
		} else {
			$('body').removeClass('Fixed_header');
		}
	})

	$(".scrolltop").click(function () {
		$(window).scrollTop(0);
	});

	$(document).ready(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scroll-top').fadeIn();
			} else {
				$('.scroll-top').fadeOut();
			}
		});

		$('.scroll-top').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 100);
			return false;
		});

	});
	$(document).ready(function () {

		if ($(".slider-single").hasClass("active")) {
			debugger;
			$(".slider-single.active").find("video").addClass('read')
		}
	})

})(jQuery);


