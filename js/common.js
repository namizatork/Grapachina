
$(function() {
	
	$(".dropdown-button").dropdown();

	$('.parallax').parallax();
		
	$(".button-collapse").sideNav();
	
	$('.collapsible').collapsible();


	$('.nav-list li a').each(function(){
			var $href = $(this).attr('href');
			if(location.href.match($href)) {
					$(this).parent('li').addClass('current');
			} else {
					$(this).parent('li').removeClass('current');
			}
	});


});
