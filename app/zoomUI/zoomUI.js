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
	
	var designCanvas = $('.design-canvas');
	var zoomButton = $('.canvas-zoom-button');
	var zoomButtonMousedown = false;
	var zoomButtonToggle_zoomIn = false;
	var zoomButton_firstClick = true;
	
	/*zoomButton.click( function() {
		console.log('zoom+');
		designCanvas.addClass('design-canvas-zoom-in');
	});*/

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