$( document ).ready(function() {
    
	console.log("zoomUI!");

	// CHeck if jQuery and jQueryUI have loaded
	if (jQuery) {  
		console.log("jQuery is loaded"); 
	} else {
		console.log("jQuery is not loaded");
	}

	if (jQuery.ui) {
		console.log("jQueryUI is loaded");
	} else {
		console.log("UI is not loaded");
	}

	////////////////
	// APP STARTS //
	////////////////
	


	// initialize canvas-ui variables
		var designCanvas = $('.canvas-ui');
		var designButton = $('.canvas-design-button');
		var productButton = $('.canvas-product-button');
		var completeButton = $('.canvas-complete-button');
		var zoomButton = $('.canvas-zoom-button');
			
			// checks logic for zoom animation
				var zoomButtonMousedown = false;
				var zoomButtonToggle_zoomIn = false;
				var zoomButton_firstClick = true;


	// canvas-ui button event handlers
		designButton.click( function() {
			console.log('design-mode');

			// creates radio button logic
				
				//changes background & button icons
				$(this).addClass('canvas-tool-button-active canvas-design-button-active');
				$(this).removeClass('canvas-design-button');
				productButton.removeClass('canvas-tool-button-active canvas-product-button-active');
				productButton.addClass('canvas-product-button');
				completeButton.removeClass('canvas-tool-button-active canvas-complete-button-active');
				completeButton.addClass('canvas-complete-button');
		});

		productButton.click( function() {
			console.log('product-mode');
				
				$(this).addClass('canvas-tool-button-active canvas-product-button-active');
				$(this).removeClass('canvas-product-button');
				designButton.removeClass('canvas-tool-button-active canvas-design-button-active');
				designButton.addClass('canvas-design-button');
				completeButton.removeClass('canvas-tool-button-active canvas-complete-button-active');
				completeButton.addClass('canvas-complete-button');
		});

		completeButton.click( function() {
			console.log('complete-mode');

				$(this).addClass('canvas-tool-button-active canvas-complete-button-active');
				$(this).removeClass('canvas-complete-button');
				designButton.removeClass('canvas-tool-button-active canvas-design-button-active');
				designButton.addClass('canvas-design-button');
				productButton.removeClass('canvas-tool-button-active canvas-product-button-active');
				productButton.addClass('canvas-product-button');

		});

	zoomButton.mousedown(function() {
		console.log('zoom-button: mousedown');
		zoomButtonMousedown = true;


		if (zoomButton_firstClick === true) {
			zoomButton_firstClick = false;
			designCanvas.addClass('design-canvas-zoom-out design-canvas-zoom-in');
		} else {
			designCanvas.toggleClass('design-canvas-zoom-in');		
		}
		
	}).mouseup(function() {
		console.log('zoom-button: mouseup');
		zoomButtonMousedown = false;
	}).on('mouseenter mouseleave', function(e) {
		if (e.type === 'mouseleave') {
			if (zoomButtonMousedown === true) {
				console.log('zoom-button: mouseup');
				zoomButtonMousedown = false;
			}
		}
	});



});