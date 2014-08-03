initSlider = function() {
	$('#prod-image-slider').bxSlider({
		minSlides: 5,
		maxSlides: 5,
		mode: 'vertical',
		slideMargin: 20,
		infiniteLoop : false,
		easing : 'linear',
		adaptiveHeight : true,
		pager : false,
		moveSlides : 1,
		nextText : '',
		prevText : ''
	});

	$('#prod-image-slider .prod-image a').click(function(){
		var $img = $(this).find('img');
		var src = $img.attr('src');
		$('#prod-image').attr('src' , src);
		$('#prod-image-link').attr('href' , src);
		$('#prod-image-slider').find('li').removeClass('active');
		$(this).closest('li').addClass('active');
		return false;
	});
}	