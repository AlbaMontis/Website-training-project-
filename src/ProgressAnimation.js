$(document).ready(function() {
	
	$(window).scroll( function() {

		if ( $('#skills').offset().top <= ($(document).scrollTop() +
		     $('#navigation').outerHeight() + 
		     parseInt($('#team').css('padding-bottom')))) {

				$('.progress-bar').css('width',
					function() {
						return ($(this).attr('aria-valuenow')+'%')
					});
    }
	});
});