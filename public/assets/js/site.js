/*===================================================================================*/
/*	OWL CAROUSEL
/*===================================================================================*/

$(document).ready(function () {
	echo.init({
		offset: 100,
		throttle: 250,
		unload: false,
		callback: function (element, op) {
			$('.prod-slider-4').owlCarousel({
				navigation : true,
				slideSpeed : 300,
				paginationSpeed : 400,
				itemsCustom : [
				[0, 1],
				[450, 1],
				[600, 1],
				[700, 2],
				[1000, 4],
				[1200, 4],
				[1400, 4],
				[1600, 4]
				],
				navigationText: ["", ""]
			});
		}
	});
});