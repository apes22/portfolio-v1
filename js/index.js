$(document).ready(function(){   
    $(".arrow").addClass("animated bounce"); 
});

$(document).ready(function(){   
    $("h1").addClass("animated bounceInDown"); 
});

/*Used to close responsive navbar automatically. When this jquery event method is not applied, you have to manually close it after opening. Does not work for submenus.*/
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

//Performs a smooth page scroll to an anchor on the same page.
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
	    
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	       window.location.hash = target;
	    });
	});
});

//create a jquery function that will change scroll down arrow to 'SCROLL DOWN' text when the mouse isover the arrow.