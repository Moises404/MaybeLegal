$( document ).ready(function() {
    
	console.log("explore.js");

	// Check if jQuery and jQueryUI have loaded
	if (jQuery) {  
		//console.log("jQuery is loaded"); 
	} else {
		console.log("jQuery is not loaded");
	}

	if (jQuery.ui) {
		//console.log("jQueryUI is loaded");
	} else {
		console.log("UI is not loaded");
	}

	// set the menu highlighter to explore
	$('.highlighter').css({'left': '250px', 'width': '78px', 'margin-left': '-39px'});
	
	///////////////
	//  EXPLORE  //
	///////////////
	
	//inits explore slogan variables
	var exploreSlogan_wrapper = $('.explore-slogan-page-wrapper');
	var exploreSlogan_1 = $('.slogan-1');
	var exploreSlogan_2 = $('.slogan-2');

	// initial animation for the explore page
	// fadeing in corporate slogans
	function exploreSlogan_animation() {
		
		exploreSlogan_1.fadeIn();

		setTimeout( function () {
			exploreSlogan_1.fadeOut();

			setTimeout( function () {
				exploreSlogan_2.fadeIn();
			},500);

			setTimeout( function () {
				exploreSlogan_2.fadeOut();
				exploreSlogan_wrapper.fadeOut();
			},1300);
		},1000);
	}

	//trigger init explore function
	setTimeout( function () {
		exploreSlogan_animation();
	},300);
	

});
