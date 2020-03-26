$(window).load(function () {
	$(".before-after").twentytwenty({
		before_label: 'With skinali', // Set a custom before label
		after_label: 'Without skinali', // Set a custom after label
	});
	$('.before-slider').slick({
		draggable: false,
		dots: true,
		dotsClass: 'before-slider__dots',
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right')
	});
	$('.menu-button').on('click', function () {
		$('.menu').toggleClass('menu_active');
	});

	// selec

	 $('.select_checked').on('click', function () {
			$('.select__dropdown').toggleClass('select__dropdown_open');
		});
		$('.select__option').on('click',function () { 
			let value = $(this).attr('data-value')
			$('#select_type').val(value)
			$('.select_checked').text(value)
			$('.select__dropdown').toggleClass('select__dropdown_open');
		});
		  $("a[href^='#']").click(function () {
				let _href = $(this).attr("href");
				$("html, body").animate({
					scrollTop:$(_href).offset().top -190 +"px"
				});
				return false;
			});
			$('input[type="tel"]').mask("+7 (999) 999-99-99");
});