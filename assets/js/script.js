// Preloader
$(window).load(function() {
	var preloaderFade = 1000;
	function hidepreloader() {
		// var p1 = $('.sk-cube-grid');
		// p1.fadeOut(preloaderFade);
		var p2 = $('.spinner-wrapper');
		p2.delay(500).fadeOut(preloaderFade);
		// $('#wrapper').fadeIn(preloaderFade + 5000);
	}
	hidepreloader();
});


(function($) {
	"use strict";
	$(document).ready(function(){

		// site slider
		$("#testimonial-carousel").owlCarousel({
			navigation : false,
			slideSpeed : 300,
			paginationSpeed : 400,      
			responsiveRefreshRate : 200,
			responsiveBaseWidth: window,
			pagination: true,
			singleItem: true   
		});
		
		$("#block-slider").owlCarousel({
			navigation : false,
			slideSpeed : 300,
			paginationSpeed : 400,      
			responsiveRefreshRate : 200,
			responsiveBaseWidth: window,
			pagination: false,
			singleItem: true,
			navigation:true,
			navigationText: ["<span class='icon-left-open-big'></span>","<span class='icon-right-open-big'></span>"]  
		});

		// skill percentage setup
		$(".percentage").each(function(){
			var  width= $(this).text();
			$(this).css("width", width).empty();
		});

		// portfolio setup
		$('.box').magnificPopup({
			type: 'image',
			fixedContentPos: false,
			fixedBgPos: false,
			mainClass: 'mfp-no-margins mfp-with-zoom',
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300
			}
		});

		$('.popup-youtube, .popup-vimeo').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
				
		/*Filterd portfolio*/
		$('.filter li a').on("click", function(e){
			e.preventDefault();
			var isAlreadyActive = $(this).hasClass('active');
			if (isAlreadyActive) {
				$(this).removeClass('active');
				$(this).closest('.works').find('.item').show();
				return;
			}
			$(this).addClass('active');
			$(this).parent().siblings().find('a').removeClass('active');
			var filters = $(this).attr('data-filter');
			$(this).closest('.works').find('.item').show();
			if (filters !== 'all') {
				var selected =  $(this).closest('.works').find('.item');
				for(var i = 0; i < selected.length; i++){
					if (!selected.eq(i).hasClass(filters)) {
						selected.eq(i).hide();
					}
				}
			}
		});

		// search input
		$('.search-form i').on("click", function(){
			$(this).closest('.search-form').find('input[type="text"]').focus();
			if($(this).closest('.search-form').find('input[type="text"]').val()){
				$(this).closest('.search-form').find('input[type="submit"]').trigger('click');
			}
		});

		// form validation

		$('.submit').on("click", function(){
			$('input#name').removeClass("errorForm");
			$('textarea#message').removeClass("errorForm");
			$('input#email').removeClass("errorForm");
			
			var error = false; 
			var name = $('input#name').val(); 
			if(name == "" || name == " ") { 
				error = true; 
				$('input#name').addClass("errorForm");
			}
		
			var msg = $('textarea#message').val(); 
			if(msg == "" || msg == " ") {
				error = true;
				$('textarea#message').addClass("errorForm");		
			}
			
			var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; 
			var email = $('input#email').val(); 
			if (email == "" || email == " ") { 
				$('input#email').addClass("errorForm");
				error = true;
			} else if (!email_compare.test(email)) { 
				$('input#email').addClass("errorForm");
				error = true;
			}

			if(error == true) {
				return false;
			}

			var data_string = $('.contact-form').serialize();
			$.ajax({
				type: "POST",
				url: $('.contact-form').attr('action'),
				data: data_string,
				success: function(message) {
					if(message == 'SENDING'){
						$('#success').fadeIn('slow');
					}
					else{
						$('#error').fadeIn('slow');
					}
				}	
			});
			return false; 
		});

		// toggle switcher
		$('.toggle').click(function(e) {
			e.preventDefault();
			var styler = $('.styler');
			console.log(styler.css('left'));
			if (styler.css('left') === '-278px') {
				$('.styler').animate({
					left: '0px'
				});
			} else {
				$('.styler').animate({
					left: '-278px'
				});
			}
		});

		// google map
		$('#wrapper').bind('easytabs:after', function() {
			var styles = [
				{
					stylers: [{ saturation: -100 }]
				},{
					featureType: 'road',
					elementType: 'geometry',
					stylers: [
						{ hue: "#74b7b0" },
						{ visibility: 'simplified' }
					]
				},{
					featureType: 'road',
					elementType: 'labels',
					stylers: [{ visibility: 'on' }]
				}
			],
			
			lat = 28.5737,
			lng = 77.3820,
			customMap = new google.maps.StyledMapType(styles, {name: 'Styled Map'}),
			
			mapOptions = {
				zoom: 14,
				scrollwheel: false,
				disableDefaultUI: true,
				center: new google.maps.LatLng( lat, lng ),
				mapTypeControlOptions: {
					mapTypeIds: [google.maps.MapTypeId.ROADMAP]
				}
			},
			map = new google.maps.Map(document.getElementById('map'), mapOptions),
			myLatlng = new google.maps.LatLng( lat, lng ),
			marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
			});
			map.mapTypes.set('map_style', customMap);
			map.setMapTypeId('map_style');
		});

		// easytabs
		$('#wrapper').easytabs({
			animate				: true,
			updateHash			: false,
			transitionIn		: 'fadeIn',
			transitionOut		: 'fadeOut',
			animationSpeed		: 100,
			tabActiveClass		: 'active',
			tabs				: ' #main-nav.tabbed > ul > li ',
			transitionInEasing	: 'linear',
			transitionOutEasing	: 'linear'
		});

		// Lazyload images
		$('.lazy').Lazy({
			// your configuration goes here
			scrollDirection: 'vertical',
			effect: 'fadeIn',
			// visibleOnly: true,
			onError: function(element) {
				console.log('error loading ' + element.data('src'));
			},
			delay: 1000
		});
	});
})(jQuery);