$(document).ready(function() {
	var stickyNavTop = $('#navigation').offset().top;
	 
	var stickyNav = function(){
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

  function filter_(element){

	  var tab = document.getElementsByClassName('tab');
	  var href = element.getAttribute('href') ||
	             element.firstChild.getAttribute('href') || '';
	  var links = href && document.querySelectorAll('[href=' +'"'+ href +'"' + ']');
	  console.log(links);
	  var length = tab.length;
	  for (;length;) {
		  tab[--length].classList.remove('activated');
		}
		//element.classList.add('activated');
		links.forEach(function(el) {
      el.classList.contains('tab') ? el.classList.add('activated') :
      el.parentNode.classList.add('activated');
		});
	}

	function initEvent_(){
	  document.addEventListener('click', function(e) {
	    e = e || window.event;
	    var target = e.target.parentNode; 
	    console.log(target);
	    if (target.classList.contains('tab')){
	      filter_(target);
	    }
	  })
  }
  initEvent_();
};