$(document).ready(function(){   
    $(".arrow").addClass("animated bounce"); 
});

$(document).ready(function(){   
    $("h1").addClass("animated bounceInDown"); 
});

//create a jquery function that will change scroll down arrow to 'SCROLL DOWN' 
//text when the mouse isover the arrow.
$(document).ready(function(){
	$('#arrow').on('hover',function (e) {
	    //e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);	    
	});
});

/*Used to close responsive navbar automatically. When this jquery event method is not applied, you have to manually close it after opening. Does not work for submenus.*/
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

var view = {
	setUpEventListeners: function(){
		window.addEventListener("scroll", function(){
			if (document.body.scrollTop > 75){
				$('.navbar').css("background-color", "white");
				$('.navbar').css("border-bottom", "2px solid #cccccc");
				
				$('.navbar-nav>li>a').css("color", "#337ab7");
				$('.navbar-brand').css("color", "#337ab7");
			}
			else{
				$('.navbar').css("background-color", "transparent");
				$('.navbar').css("border-bottom", "none");

				$('.navbar-nav>li>a').css("color", "white");
				$('.navbar-brand').css("color", "white");
			}
    	});
	}
}

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

function updateNavColor(){
	if (document.body.scrollTop > 75){
		$('.navbar').css("background-color", "white");
	}
	else{
		$('.navbar').css("background-color", "transparent");
	}
}

view.setUpEventListeners();