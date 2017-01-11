$(document).ready(function() {
	var stickyNavTop = $('#navigation').offset().top;
	 
	var stickyNav = function() {
	  var scrollTop = $(window).scrollTop();
	      
		if (scrollTop > stickyNavTop) { 
		    $('#navigation').addClass('sticky');
		} else {
		    $('#navigation').removeClass('sticky'); 
		}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
	  stickyNav();
	});

	AddActiveClass();
});

function AddActiveClass() {

  function filter(element) {
	  var tab = $('.tab');
	  var href = $(element).attr('href') ||
	             $(element).parent().attr('href') ||
	             $(element).children().attr('href') ||
	             ('#' + $(element).attr('id'))|| '';
	  var links = document.querySelectorAll('[href=' + '"' + href +'"' + ']');
	  var length = tab.length;

	  for (;length;) {
		  $(tab[--length]).removeClass('activated');
	  }
		
	  links.forEach(function(el) {
      $(el).hasClass('tab') ? $(el).addClass('activated') :
      $(el).parent().addClass('activated');
		});
	}

	function initEvent() {
		
	  document.addEventListener('click', function(e) {
     e = e || window.event;
     var target = e.target.parentNode;

	    if ($(target).hasClass('tab') || $(target).parent().hasClass('tab')) {
	      filter(target);
	    }
	  });

	  $(window).scroll( function() {
      var sections = $('body > div');
      var length = sections.length;
      var i;
      var section;
      
      for(i = 0; i < length; i++) {
      section = sections[i];

	      if ($(section).offset().top <= ($(document).scrollTop() + $('#navigation').innerHeight())) {

	        filter(section);
	      }
      }
	  });
  }

  initEvent();
};
