$(function () {
	svg4everybody();
	// Сортировка по цене mfilter2
	$(document).ready(function () {
		$(document).on('change', '#mse2_sort', function () {
			var selected = $(this).find('option:selected');
			var sort = selected.data('sort');
			sort += mse2Config.method_delimeter + selected.val();
			mse2Config.sort = sort;
			mSearch2.submit();
		});
	});

	document.querySelectorAll('.product-countdown').forEach((item) => {
		if (item.getAttribute('data-countdown') === "1970-01-01") {
			item.remove();
		}
	});

	const ralPopap = document.querySelector('.ral_popAp');
	const overlay = document.querySelector('.overlay');
	let ralPopapTitle = document.createElement('h4');

	function addOverlay() {
		$("body").addClass("fixed");
		$(document).bind('touchmove', false);
		overlay.classList.add('active');
	}

	function removeOverlay() {
		$("body").removeClass("fixed");
		$(document).find('touchmove', true);
		overlay.classList.remove('active');
		ralPopapTitle.remove();
	}

	$(document).keydown(function (eventObject) {
		if (eventObject.which == 27) {
			$('.ral_popAp').removeClass('active');
			removeOverlay();
			$('.hidden_block').removeClass('active');
			$('.main-body').removeClass('active');
			$("body").removeClass("popapOpen");
		}
	});

	overlay.addEventListener('click', () => {
		removeOverlay();
		$('.ral_popAp').removeClass('active');
	});

	document.querySelectorAll('.ral-color_block').forEach((item, index) => {

		item.addEventListener('click', () => {
			ralPopap.classList.add('active');
			addOverlay();
			let ralColor = item.getAttribute('data-color');
			ralPopap.style.backgroundColor = ralColor;

			ralPopapTitle.textContent = item.querySelector('span').innerHTML;

			setTimeout(function () {
				ralPopap.append(ralPopapTitle);
			}, 200);
		});
	});

	$('.popapOpen-callback').click(function () {
		$('.off-canvas-wrapper').removeClass('open');
		$('body').removeClass('fix');
		$('body').addClass('popapOpen');
		$('.hidden_block-callback').addClass('active');
		$('.main-body-form-callback').addClass('active');
	});

	$('.popapOpen-prod_measure').click(function () {
		$('.off-canvas-wrapper').removeClass('open');
		$('body').removeClass('fix');
		$('body').addClass('popapOpen');
		$('.hidden_block-prod_measure').addClass('active');
		$('.main-body-form-prod_measure').addClass('active');
	});

	$('.popapOpen-prod_calculation').click(function () {
		$('.off-canvas-wrapper').removeClass('open');
		$('body').removeClass('fix');
		$('body').addClass('popapOpen');
		$('.hidden_block-prod_calculation').addClass('active');
		$('.main-body-form-prod_calculation').addClass('active');
	});

	$('.popapOpen-prod_consultation').click(function () {
		$('.off-canvas-wrapper').removeClass('open');
		$('body').removeClass('fix');
		$('body').addClass('popapOpen');
		$('.hidden_block-prod_consultation').addClass('active');
		$('.main-body-form-prod_consultation').addClass('active');
	});

	$('.popapOpen-project').click(function () {
		$('.off-canvas-wrapper').removeClass('open');
		$('body').removeClass('fix');
		$('body').addClass('popapOpen');
		$('.hidden_block-project').addClass('active');
		$('.main-body-form-project').addClass('active');
	});

	// $('.config_popap_btn').click(function (e) {
	// 	e.preventDefault();
	// 	$('.off-canvas-wrapper').removeClass('open');
	// 	$('body').removeClass('fix');
	// 	$('body').addClass('popapOpen');
	// 	$('.hidden_block-stairs_config').addClass('active');
	// 	$('.main-body-form-stairs_config').addClass('active');
	// });

	$('.popapOpen-mounting').click(function () {
		$('.off-canvas-wrapper').removeClass('open');
		$('body').removeClass('fix');
		$('body').addClass('popapOpen');
		$('.hidden_block-mounting').addClass('active');
		$('.main-body-form-mounting').addClass('active');
		var priceTitle = $(this).parents('.portfolioi_section_block').find('.section_portfolio_link').html();
		$('.mounting_form .title_input').val(priceTitle);
	});

	$(".price_titles").click(function () {

	});

	let phones = document.querySelectorAll(".phoneClick");
	phones.forEach(item => {
		item.addEventListener("click", () => {
			ym(67166446, 'reachGoal', 'click_phone');
		});
	});
	phones.forEach(item => {
		item.addEventListener("copy", () => {
			ym(67166446, 'reachGoal', 'copy_phone');
		});
	});

	let mails = document.querySelectorAll(".mailClick");
	mails.forEach(item => {
		item.addEventListener("click", () => {
			ym(67166446, 'reachGoal', 'click_mail');
		});
	});
	mails.forEach(item => {
		item.addEventListener("copy", () => {
			ym(67166446, 'reachGoal', 'copy_mail');
		});
	});

	// Табы
	$('.vacansies_tab').hide();

	$('ul.vacansies_tabs__header').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.vacansies__tabs').find('div.vacansies_tab').removeClass('active').eq($(this).index()).addClass('active');
	});

	// Сортировка по цене mfilter2

	$('.popapClose').click(function () {
		$('body').removeClass('popapOpen');
		$(this).parents('.hidden_block').removeClass('active');
		$('.main-body').removeClass('active');
	});



	$(document).mouseup(function (e) {
		var div = $('.main-body');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('body').removeClass('popapOpen');
			$('.hidden_block').removeClass('active');
			$('.main-body').removeClass('active');
		}
	});

	$('.button_hide').click(function () {
		$(".button_config_wrapper").css('right', "-300px");
		localStorage.setItem('button_config', 0);
	});

	let buttonLocalKey = localStorage.getItem("button_config");

	if (buttonLocalKey != 0) {
		$(".button_config_wrapper").removeClass('button_config_wrapper_hide');
	}


	// Off Canvas Open close
	$("#shop_filter-button").on('click', function () {
		$("body").addClass('fix');
		$(".shop_filter-wrapper ").addClass('active');
		$(".shop_filter-overlay ").addClass('active');
	});

	$(".shop_filter-overlay, .filter_close").on('click', function () {
		$("body").removeClass('fix');
		$(".shop_filter-wrapper").removeClass('active');
		$(".shop_filter-overlay").removeClass('active');
	});
	$('.about-gallery-slider .potfolio_main-photo:first').addClass('current');
	$('.about-gallery-slider .portfolio_nav-item:first').addClass('current');
	$('.dop-catalog_tab li a.btn:first').addClass('active');
	$('.dop-catalog_standart-tab li a.btn:first').addClass('active');
	$('.dop-catalog_tabs .tab-content .tab-pane:first').addClass('active', 'show');
	$('.dop-catalog_standart_tabs .tab-content .tab-pane:first').addClass('active', 'show');
	$('.portfolio-slider .potfolio_main-photo:first').addClass('current');
	$('.portfolio-slider .portfolio_nav-item:first').addClass('current');

});