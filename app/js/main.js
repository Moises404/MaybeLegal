$( document ).ready(function() {
    
	console.log("main.js");

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

	/////////////////
	//  MAIN MENU  //
	/////////////////

	// initialize main-menu variables
		
		// main-menu containers
		var mainMenu = $('.mb-main-menu');
		var mainMenuWrapper = $('.mb-main-menu-wrapper');
		
		// all main-menu buttons
		var mainMenu_buttons = $('.main-menu-button');
		var mainMenu_buttonsWrapper = $('.main-menu-button-wrapper');

		// individual buttons
		var mainMenu_aboutButton = $('.menu-button-about');
		var mainMenu_buyButton = $('.menu-button-buy');
		var mainMenu_makeButton = $('.menu-button-make');
		var mainMenu_shareButton = $('.menu-button-share');

		// capture current selected menu button
		var activeMainMenu_button = $('.main-menu-button-active');
		var previousMainMenu_button;

		// highlighter element to animate on hover
		var highlighter = $('.highlighter');

	/////////////////
	// ACTIVE-PAGE //
	/////////////////
	
	// use to position the beginning state 
	// of the highlighter
	var activePage = 'create';

	switch (activePage) {
		case 'splash':
			//console.log('active-page: splash');
			highlighter.css({'left': '50px', 'width': '62px', 'margin-left': '-32px'}, 300);
			break;
		case 'create':
			//console.log('active-page: about');
			highlighter.css({'left': '50px', 'width': '68px', 'margin-left': '-34px'}, 300);
			break;
		case 'buy':
			//console.log('active-page: buy');
			highlighter.css({'left': '148px', 'width': '36px', 'margin-left': '-18px'}, 300);
			break;
		case 'explore':
			//console.log('active-page: make');
			highlighter.css({'left': '250px', 'width': '78px', 'margin-left': '-39px'}, 300);
			break;
		default:
			console.log('active-page failed');
	}


	// triggers the hover animation for the main-menu
	// section through a hover event in the menu wrapper
	mainMenuWrapper.hover(
		function() {
			if (!mainMenu.is(":animated")){
	    		mainMenu.stop(true, true).animate({'margin-top': '0px'}, 300);
			}
		},
		function() {
			if (!mainMenu.is(":animated")){
				mainMenu.stop(true, true).animate({'margin-top': '-100px'}, 300);
			}
		}
	);

	// triggers the higlighter function on hover
	// for each menu button
	mainMenu_buttons.hover( 
		function() {
			// console.log('hover');
			// console.log($(this));
	
			var currentHoverMenu_button = $(this);

			//captures the specific menu button cateogory "about, buy, make, share"
			var parsed_currentHoverMenu_button = currentHoverMenu_button.attr('class').split(' ')[1];

				//console.log(parsed_currentHoverMenuButton);

			switch (parsed_currentHoverMenu_button) {
				case 'menu-button-about':
					//console.log('menu-button-about');
					highlighter.stop(true, true).animate({'left': '50px', 'width': '68px', 'margin-left': '-34px'}, 300);
					break;
				case 'menu-button-buy':
					//console.log('menu-button-buy');
					highlighter.stop(true, true).animate({'left': '148px', 'width': '36px', 'margin-left': '-18px'}, 300);
					break;
				case 'menu-button-make':
					//console.log('menu-button-make');
					highlighter.stop(true, true).animate({'left': '250px', 'width': '78px', 'margin-left': '-39px'}, 300);
					break;
				default:
					console.log("main-menu hover failed");
			}
		},
		function() {
			//console.log('no-hover');
		}
	);

	// capture the hover event for the menu buttons wrapper
	// in order to animate the highlighter to clicked menu button
	// smoothly
	mainMenu_buttonsWrapper.hover(
		function() {
			//console.log('wrapper hover');
		},
		function() {
				//console.log('wrapper no-hover');
				//console.log(activeMainMenu_button);

			//parses the active menu button for the classes "about, buy, make, share"
			var parsed_activeMainMenu_button = activeMainMenu_button.attr('class').split(' ')[1];
				//console.log(parsed_activeMainMenu_button +' parsed');

			switch (parsed_activeMainMenu_button) {
				case 'menu-button-about':
					//console.log('menu-button-about wrapper');
					highlighter.animate({'left': '50px', 'width': '68px', 'margin-left': '-34px'}, 300);
					break;
				case 'menu-button-buy':
					//console.log('menu-button-buy wrapper');
					highlighter.animate({'left': '148px', 'width': '36px', 'margin-left': '-18px'}, 300);
					break;
				case 'menu-button-make':
					//console.log('menu-button-make wrapper');
					highlighter.animate({'left': '250px', 'width': '78px', 'margin-left': '-39px'}, 300);
					break;
				default:
					console.log("main-menu-wrapper hover failed");
			}
		}
	);

	// capture the click event for the menu buttons
	// setting where the highlighter animation finishes
	// when no-hover
	mainMenu_buttons.click(
		function() {

			// recapture current selected menu button
			// and remove active class
			activeMainMenu_button.removeClass('main-menu-button-active');
			previousMainMenu_button = activeMainMenu_button;

			// add active class to current clicked menu button
			// update activeMainMenu variable
			$(this).addClass('main-menu-button-active');
			activeMainMenu_button = $(this);

			//console.log(activeMainMenu_button);
			//console.log(previousMainMenu_button);
		}
	);
});