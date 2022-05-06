jQuery('document').ready(function(){
	$('.menu-header__burger').click(function(event){
		$('.menu-header__burger,.menu-header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		if($(window).width() <= 767.98){
			$('.menu-header__link').click(function(event){
				$('.menu-header__burger,.menu-header__menu').removeClass('active');
				$('body').removeClass('lock');
			});
		}
	});
	$("a.menu-header__link").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});



	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();


	var btn = $('.button-up');
	$(window).scroll(function(){
		if ($(window).scrollTop() > 520) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});
	btn.click(function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});


	$('.nav-newsmedia__item').click(function(e) {
		$('.nav-newsmedia__item').removeClass('active-color');
		$(this).addClass('active-color');
	});
	var filter = $("[data-filter]");
	filter.click(function(event){
		event.preventDefault();
		var cat = $(this).data('filter');
		$("[data-cat]").each(function() {
			var workCat = $(this).data('cat');
			if(workCat == cat || cat =='all') {
				$(this).removeClass('hide');
			} else {
				$(this).addClass('hide');
				$('.nav-newsmedia__item').removeClass('nav-newsmedia__item_active');
			}
		});
	});


	ymaps.ready(init);

	var myPlacemarks = [
		{
			latitude: 55.751574,
			longitude: 37.573856,
			hintContent: '<div class="map__hint">Our map marker</div>',
			balloonContent: '<div class="map__balloon">Business</div>'
		},
		{
			latitude: 45.9422,
			longitude: 24.9365,
			hintContent: '<div class="map__hint">Our map marker</div>',
			balloonContent: '<div class="map__balloon">Business</div>'
		},
		{
			latitude: 42.0479,
			longitude: 12.4808,
			hintContent: '<div class="map__hint">Our map marker</div>',
			balloonContent: '<div class="map__balloon">Business</div>'
		},
		{
			latitude: 42.5048,
			longitude: 25.7523,
			hintContent: '<div class="map__hint">Our map marker</div>',
			balloonContent: '<div class="map__balloon">Business</div>'
		},
		{
			latitude: 56.1667,
			longitude: 9.2288,
			hintContent: '<div class="map__hint">Our map marker</div>',
			balloonContent: '<div class="map__balloon">Business</div>'
		},
		{
			latitude: 59.4033,
			longitude: 17.9300,
			hintContent: '<div class="map__hint">Our map marker</div>',
			balloonContent: '<div class="map__balloon">Business</div>'
		},
		{
			latitude: 56.8172,
			longitude: 26.1966,
			hintContent: '<div class="map__hint">Our map marker</div>',
			balloonContent: '<div class="map__balloon">Business</div>'
		},
		{
			latitude: 50.4962,
			longitude: 30.3958,
			hintContent: '<div class="map__hint">Our map marker</div>',
			balloonContent: '<div class="map__balloon">Business</div>'
		}
	],
	geoObjects = [];

	function init() {
		var myMap = new ymaps.Map('map', {
			center: [52.148114,20.991516],
			zoom: 4,
			controls: ['fullscreenControl','zoomControl'],
			behaviors: ['drag']
		}, {
			searchControlProvider: 'yandex#search'
		});

		for (var i = 0; i < myPlacemarks.length; i++) {
			geoObjects[i] = new ymaps.Placemark([myPlacemarks[i].latitude, myPlacemarks[i].longitude], {
				hintContent: myPlacemarks[i].hintContent,
				balloonContent: myPlacemarks[i].balloonContent
			}, {
            // Опции.
            // Необходимо указать данный тип макета.
				iconLayout: 'default#image',
            // Своё изображение иконки метки.
				iconImageHref: 'img/map_marker.svg',
            // Размеры метки.
				iconImageSize: [24, 29],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
				iconImageOffset: [-12, -29]
			});
		}

		var clusterer = new ymaps.Clusterer({
			clusterIcons: [
				{
					href: 'img/map_marker.svg',
					size: [50, 50],
					offset: [-25, -50]
				}
			],
			clusterIconContentLayout: null
		});
			myMap.geoObjects.add(clusterer);
			clusterer.add(geoObjects);
	}

});