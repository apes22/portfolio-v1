var view = {
  displayProjects(projectType){
    var singleCards = document.getElementsByClassName('single-card');
    const cardsArray = Array.from(singleCards);

    cardsArray.forEach(function(card){
      if (!card.classList.contains(projectType)){ 
       card.classList.add("hide");
      }
      else{
        card.classList.remove("hide");
      }
    });
  },
	setUpEventListeners: function(){
		
		$(window).scroll(function(){
			//To cover all browsers since Firefox does not support document.body.scrollTop and vice vera for Chrome
			var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (bodyScrollTop > 75){
				$('.navbar').addClass('white-background navbar-border');
				$('.navbar-nav>li>a, .navbar-brand').addClass('bootstrap-blue');
				$('.icon-bar').addClass('bootstrap-background-color');
			}
			else{
				$('.navbar').removeClass('white-background navbar-border');
				$('.navbar-nav>li>a, .navbar-brand').removeClass('bootstrap-blue');
				$('.icon-bar').removeClass('bootstrap-background-color');
			}
		});
		/*Used to close responsive navbar automatically. When this jquery event 
		method is not applied, you have to manually close it after opening. Does not work for submenus.*/
		$('.navbar-collapse a').click(function(){
    	$(".navbar-collapse").collapse('hide');
		});

		//Performs a smooth page scroll to an anchor on the same page.
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

		$("#select-project-type").change(function(){
			var project_type = this.value;
			view.displayProjects(project_type);
		});
	}
};

view.setUpEventListeners();
/*AOS.init();*/