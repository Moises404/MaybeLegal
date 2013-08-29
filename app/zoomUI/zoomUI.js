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



	/////////////////
	//  IMAGE-BIN  //
	/////////////////

	//section and subsection variables
		var sectionWidth = 560;
		var sectionHeight = 560;
		var subSectionWidth = 45;
		var subSectionHeight = 45;

	//values to keep track what row we're on
		var row_section = 0;
		var row_subSection = 0;
		var maxColumns_section = 3;
		var maxColumns_subSection = 9;
		var total = 9;
		var padding_section = 10;
		var padding_subSection = 16;

	// RGB values used to make colors for image-bin ui
		var r, g, b;
		var r_offset, g_offset, b_offset;

	//random pastel color
		function randomPastelColor(){
		    r = (Math.round(Math.random()* 150) + (Math.round(Math.random()* 150) +  20));
		    g = (Math.round(Math.random()* 150) + (Math.round(Math.random()* 150) + 20));
		    b = (Math.round(Math.random()* 150) + (Math.round(Math.random()* 150) + 20));
	    	return r, g, b;
		}

		function randomPastelColorSubSection(){
		    r_offset = r + (Math.round(Math.random()* 60));
		    g_offset = g + (Math.round(Math.random()* 60));
		    b_offset = b + (Math.round(Math.random()* 60));
	    	//return '#' + r + g + b;
		}

		/*function randomPastelColor(){
		    var r = (Math.round(Math.random()* 150) + (Math.round(Math.random()* 150) +  20)).toString(16);
		    var g = (Math.round(Math.random()* 150) + (Math.round(Math.random()* 150) + 20)).toString(16);
		    var b = (Math.round(Math.random()* 150) + (Math.round(Math.random()* 150) + 20)).toString(16);
	    return '#' + r + g + b;
		}*/


	//Item Array and initialized variables
	var currentImageCounter = 0;


	var imageArray0 = [
		"assets/imageBin/logos_SVG/7-eleven.svg",
		"assets/imageBin/logos_SVG/AAA_2.svg",
		"assets/imageBin/logos_SVG/ABC.svg",
		"assets/imageBin/logos_SVG/ABH.svg",
		"assets/imageBin/logos_SVG/AEON.svg",
		"assets/imageBin/logos_SVG/ASMI.svg",
		"assets/imageBin/logos_SVG/Accenture.svg",
		"assets/imageBin/logos_SVG/Ace_Hardware.svg",
		"assets/imageBin/logos_SVG/Acer.svg",
	];

	var imageArray1 = [
		"assets/imageBin/logos_SVG/Action_Man.svg",
		"assets/imageBin/logos_SVG/Adalilar_Kuruyemis.svg",
		"assets/imageBin/logos_SVG/Adidas1007.svg",
		"assets/imageBin/logos_SVG/Adrenalin_Power_Energy_Drink.svg",
		"assets/imageBin/logos_SVG/Agroziv_Pancevo.svg",
		"assets/imageBin/logos_SVG/Agua_Sol.svg",
		"assets/imageBin/logos_SVG/Agua_Xallapan.svg",
		"assets/imageBin/logos_SVG/Ahla_Israel.svg",
		"assets/imageBin/logos_SVG/Air_India_Football_Club_de_Mumbai.svg",
		"assets/imageBin/logos_SVG/Alibaba_com.svg",
		"assets/imageBin/logos_SVG/Ambrozijntje.svg",
		"assets/imageBin/logos_SVG/Android.svg",
	];

	var imageArray2 = [
		"assets/imageBin/logos_SVG/Apple285.svg",
		"assets/imageBin/logos_SVG/Aquafina.svg",
		"assets/imageBin/logos_SVG/Aquaver.svg",
		"assets/imageBin/logos_SVG/Arby_s_Oven_Mitt.svg",
		"assets/imageBin/logos_SVG/Arco.svg",
		"assets/imageBin/logos_SVG/Arla_Foods_UK.svg",
		"assets/imageBin/logos_SVG/Artigiani_Della_Bufala.svg",
		"assets/imageBin/logos_SVG/Atlanta_Bread_Company.svg",
		"assets/imageBin/logos_SVG/Atlanta_Falcons168.svg",
		"assets/imageBin/logos_SVG/Audi262.svg",
	];

	var imageArray3 = [
		"assets/imageBin/logos_SVG/Audi265.svg",
		"assets/imageBin/logos_SVG/Autogrill_Spa.svg",
		"assets/imageBin/logos_SVG/Avela_Cafe.svg",
		"assets/imageBin/logos_SVG/Azienda_Agricola_Romano.svg",
		"assets/imageBin/logos_SVG/BAKED_CHEETOS.svg",
		"assets/imageBin/logos_SVG/BP.svg",
		"assets/imageBin/logos_SVG/BUDWEISER_oahsp.svg",
		"assets/imageBin/logos_SVG/Backyard_Burgers.svg",
		"assets/imageBin/logos_SVG/Baeksul(1).svg",
		"assets/imageBin/logos_SVG/Baked.svg",
	];

	var imageArray4 = [
		"assets/imageBin/logos_SVG/Bakers__and__Chefs.svg",
		"assets/imageBin/logos_SVG/Bakie_s_Bakery.svg",
		"assets/imageBin/logos_SVG/Balaio_de_Lenha.svg",
		"assets/imageBin/logos_SVG/Bama.svg",
		"assets/imageBin/logos_SVG/Banco_do_Brasil.svg",
		"assets/imageBin/logos_SVG/Banvit.svg",
		"assets/imageBin/logos_SVG/Bao_Dimais.svg",
		"assets/imageBin/logos_SVG/Baraka(1).svg",
		"assets/imageBin/logos_SVG/Baraka.svg",
		"assets/imageBin/logos_SVG/Barilla.svg",
	];

	var imageArray5 = [
		"assets/imageBin/logos_SVG/Barraca_Arabe.svg",
		"assets/imageBin/logos_SVG/Beermates.svg",
		"assets/imageBin/logos_SVG/Best_Buy.svg",
		"assets/imageBin/logos_SVG/Birds_Eye(1).svg",
		"assets/imageBin/logos_SVG/Bireley_s.svg",
		"assets/imageBin/logos_SVG/Bob_s.svg",
		"assets/imageBin/logos_SVG/Bob_s_Big_Boy.svg",
		"assets/imageBin/logos_SVG/Book_It_(1).svg",
		"assets/imageBin/logos_SVG/Borden.svg",
		"assets/imageBin/logos_SVG/Browning275.svg",
		"assets/imageBin/logos_SVG/Bulgarian_Eco_Food.svg",
		"assets/imageBin/logos_SVG/Bull_Basketball_Schools.svg",
	];

	var imageArray6 = [
		"assets/imageBin/logos_SVG/Burger_King.svg",
		"assets/imageBin/logos_SVG/Busch_Beer.svg",
		"assets/imageBin/logos_SVG/CNN_Sports_Illustrated.svg",
		"assets/imageBin/logos_SVG/Cab_Cola_and_Beer.svg",
		"assets/imageBin/logos_SVG/Cafe_No_Bule.svg",
		"assets/imageBin/logos_SVG/Cafe_Ole.svg",
		"assets/imageBin/logos_SVG/California_Juice.svg",
		"assets/imageBin/logos_SVG/California_Pistachios.svg",
		"assets/imageBin/logos_SVG/Canada_Bread.svg",
		"assets/imageBin/logos_SVG/Canadian_2_for_1_Pizza(1).svg",
		"assets/imageBin/logos_SVG/Canon.svg",
		"assets/imageBin/logos_SVG/Cass_Beer.svg",
		"assets/imageBin/logos_SVG/Cavi_Gourmet.svg",
	];

	var imageArray7 = [
		"assets/imageBin/logos_SVG/Cenoura_Lapao.svg",
		"assets/imageBin/logos_SVG/Chaleira_Real.svg",
		"assets/imageBin/logos_SVG/Chase_Bank_New.svg",
		"assets/imageBin/logos_SVG/Cheerios.svg",
		"assets/imageBin/logos_SVG/Cheetos.svg",
		"assets/imageBin/logos_SVG/Cheez_Whiz(1).svg",
		"assets/imageBin/logos_SVG/Cheez_Whiz.svg",
		"assets/imageBin/logos_SVG/Chernomor_Beer256.svg",
		"assets/imageBin/logos_SVG/Chevrolet270.svg",
		"assets/imageBin/logos_SVG/Chevrolet275.svg",
		"assets/imageBin/logos_SVG/Chicago_Cubs303.svg",
		"assets/imageBin/logos_SVG/Chick_s_Ricolino.svg",
		"assets/imageBin/logos_SVG/Chili_s.svg",
		"assets/imageBin/logos_SVG/Chiper_s.svg",
		"assets/imageBin/logos_SVG/Chips_Ahoy(1).svg",
		"assets/imageBin/logos_SVG/Chips_Ahoy.svg",
	];

	var imageArray8 = [
		"assets/imageBin/logos_SVG/Chipy(1).svg",
		"assets/imageBin/logos_SVG/Chipy.svg",
		"assets/imageBin/logos_SVG/Chiquita.svg",
		"assets/imageBin/logos_SVG/Chuck_E_Cheese.svg",
		"assets/imageBin/logos_SVG/Church_s_Chicken(3).svg",
		"assets/imageBin/logos_SVG/Clemente_Jacques.svg",
		"assets/imageBin/logos_SVG/Coalhada_do_Campo.svg",
		"assets/imageBin/logos_SVG/Coca-Cola(1).svg",
		"assets/imageBin/logos_SVG/Coca-Cola(2).svg",
		"assets/imageBin/logos_SVG/Coca-Cola(3).svg",
		"assets/imageBin/logos_SVG/Coca-Cola.svg",
		"assets/imageBin/logos_SVG/Coca-Cola_Light.svg",
		"assets/imageBin/logos_SVG/Coca-Cola_Light_Lemon.svg",
		"assets/imageBin/logos_SVG/Coca-Cola_in_Farsi.svg",
		"assets/imageBin/logos_SVG/Coca_Cola_Zero.svg",
		"assets/imageBin/logos_SVG/Coco_s(1).svg",
	];


	var largeImageArray = [
		imageArray0,
		imageArray1,
		imageArray2,
		imageArray3,
		imageArray4,
		imageArray5,
		imageArray6,
		imageArray7,
		imageArray8
	];

	console.log(largeImageArray[0].length);

		//append section
			for (i = 0; i < total; i++) {

				// creates remainder
				var column_section = i % maxColumns_section; // 5
				//console.log(column_section)

				var new_top = column_section * (sectionWidth + padding_section);
				var new_left = row_section * (sectionHeight + padding_section);

				var $mainBody_Section = $('<div class="bodyPart-section"/>'); 
		    	$('.mainBodyParts').append($mainBody_Section);

		    	$mainBody_Section.css({"top": new_top + "px", "left": new_left});

		    	if (column_section === (maxColumns_section - 1)) {
		    		row_section++;
		    	}

		    	randomPastelColor();

		    	// create instance of each 2 dimensional array to
		    	// loop through the items in
		    	var currentImageArray = largeImageArray[i];
				var currentImageArrayLength = largeImageArray[i].length;
				console.log(currentImageArray);

		    	//console.log('r:' + r + ' g:' + g + ' b:' + b);
		    	//var pastelColor = randomPastelColor();
		    	//console.log(pastelColor);

		    	//append subSection
				for (j = 0; j < 81; j++) {

					// creates remainder
					var column_subSection = j % maxColumns_subSection; // 9

					var new_top_subSection = column_subSection * (subSectionWidth + padding_subSection); //51x51+3
					var new_left_subSection = row_subSection * (subSectionHeight + padding_subSection);

					//console.log("red-square: " + i + ", small-square: " + j + ", " + "top: " + new_top_subSection + ", " + "left: " + new_left_subSection);

					//color subsection
					randomPastelColorSubSection();
					var colorSubSection = 'rgb(' + r + ', ' + g + ', ' + b + ')';
					//console.log(colorSubSection);
					//console.log('r:' + r_offset + ' g:' + g_offset + ' b:' + b_offset);


					var $mainBodySubSectionWrapper = $('<div class="bodyPart-subSection-wrapper"/>');
					var $mainBodySubSection = $('<div class="bodyPart-subSection"><div/>');
					//var $subSectionImage = $('<div class="subSection-image"></div>');	
					
					//var randomColor = ('#'+Math.floor(Math.random()*16777215).toString(16));

					$mainBody_Section.append($mainBodySubSectionWrapper);
					//$mainBodySubSectionWrapper.append($subSectionImage);

					/*$mainBody_Section.append($mainBodySubSectionWrapper);
					$mainBodySubSectionWrapper.append($mainBodySubSection);
					$mainBodySubSection.append($subSectionImage);*/

					$mainBodySubSectionWrapper.css({"top": new_top_subSection + "px", "left": new_left_subSection + "px"});
					
					//check end of current array length
					
					if ( j < currentImageArrayLength) {
						$mainBodySubSectionWrapper.css({"background-image": "url(" + currentImageArray[j] + ")"});
					}

					//$subSectionImage.css({'backgroundImage': "url(" + 'assets/imageBin/logos_SVG/yum!-brands-logo-vector.svg' + ")"}); //imageArray[currentImageCounter]

					if (column_subSection === (maxColumns_subSection - 1)) {
		    			//$mainBodySubSectionWrapper.css({"top": 0 + "px", "left": 0 + "px"});
		    			row_subSection++;
					}

					currentImageCounter++;
				}

				row_subSection = 0;
			}

			//$subSectionImage.each().css('backgroun-color', 'blue');	

			//on Hover state
			var  $square = $(".bodyPart-subSection-wrapper");
			$square.hover(
				function () {
					//$(this).animate({height:"400px", width: "400px", margin: "-200px 0 0 -200px"}, 100);
					var thisChild = $(this).children();
					//console.log(thisChild);

					$(this).animate({height:"90px", width: "90px", marginLeft: "-18px", marginTop: "-18px", zIndex: "10"}, 80);

					$(this).addClass("subSection-shadow subSection-hover-border-radius");
					thisChild.animate({height:"72px",width: "72px"}, 80);
					thisChild.addClass("subSection-hover-border-radius");
					//console.log("something");
				},
				function () {
					var thisChild = $(this).children();
					//$(this).animate({height:"200px", width: "200px", margin: "-100px 0 0 -100px"}, 100);
					$(this).animate({height:"51px", width: "51px", margin: "0px", marginRight: "0", marginBottom: "0", zIndex: "0"}, 100);
					$(this).removeClass("subSection-shadow subSection-hover-border-radius");
					thisChild.animate({height:"40px", width: "40px"}, 100);
					thisChild.removeClass("subSection-hover-border-radius");
					//console.log("something else");
				}
			);

			//console.log($square);

			$square.click(function() {
			  console.log("Handler for .click() called.");
			});



	/////////////////
	//  CANVAS-UI  //
	/////////////////


	// initialize canvas-ui, image-bin, and modal layer section variables
		var imageBin = $('.image-bin');
		var modalLayer = $('.modal-layer');
		var designCanvas = $('.canvas-ui');

	// initialize canvas-ui mode-button variables
		var settingsButton = $('.canvas-settings-button');
		var settingsOptions = $('.settings-options-wrapper');
		var designButton = $('.canvas-design-button');
		var productButton = $('.canvas-product-button');
		var completeButton = $('.canvas-complete-button');
		var zoomButton = $('.canvas-zoom-button');
			
			// checks logic for zoom animation
				var zoomButtonMousedown = false;
				var zoomButtonToggle_zoomIn = false;
				var zoomButton_firstClick = true;

			// checks logic for settings animation
				var settingsButton_firstClick = true;

		// initialize canvas-ui edit-button variables
		var editToolsWrapper = $('.canvas-edit-tools');


	// canvas-ui button event handlers
		settingsButton.click( function() {
			console.log('settings-mode');
				
				//changes background & button icons
				//$(this).toggleClass('canvas-tool-button-active canvas-settings-button-active');
				//settingsOptions.toggle();

				if (settingsButton_firstClick === true) {
					settingsButton_firstClick = false;
					settingsButton.addClass('canvas-tool-button-active canvas-settings-button-active');
					settingsOptions.addClass('settings-options-wrapper-animation-close settings-options-wrapper-animation-open');
				} else {
					settingsButton.addClass('canvas-tool-button-active canvas-settings-button-active');
					settingsOptions.toggleClass('settings-options-wrapper-animation-open');		
				}

				// bind animation iteration event listener
				/*settingsOptions.on("webkitAnimationIteration oAnimationIteration msAnimationIteration animationiteration", function(event){    
					console.log(event.originalEvent.animationName);
					//checkAnimEnd(event.originalEvent.animationName);
				});*/

				/*settingsOptions.one('animationend webkitTransitionEnd', function() {
					console.log('animationEnd');
					//settingsButton.toggleClass('canvas-tool-button-active canvas-settings-button-active');
				});*/

		});

		settingsOptions.bind('webkitAnimationEnd', function (event) {
			
			if (event.originalEvent.animationName === 'settingsSlideClose') {
				settingsButton.removeClass('canvas-tool-button-active canvas-settings-button-active');
			} else if (event.originalEvent.animationName === 'settingsSlideOpen') {
				//console.log('settingsSlideOpen');
			}

			//console.log(event.originalEvent.animationName);
			//alert("ok")
			//settingsButton.toggleClass('canvas-tool-button-active canvas-settings-button-active');		
		});

		/*function checkAnimEnd(animEnd) {	
			console.log(animEnd);
			
			if (animDirection === 'animation-next') {
				objectsWrapper.prepend($('.unitList li:last'));
			} else if (animDirection === 'animation-previous') {
				objectsWrapper.append($('.unitList li:first'));
			}
		}*/

		$("#stop").click(function() {
			$(".rotate").one('animationiteration webkitAnimationIteration', function() {
				$(this).removeClass("anim");
			});
		});

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
			//designCanvas.animate({width: "98.5%", height: "97%", marginLeft: "-50%", marginTop: "0", top: "0"}, 600);
			designCanvas.addClass('design-canvas-zoom-out design-canvas-zoom-in');
			editToolsWrapper.addClass('canvas-edit-tools-close canvas-edit-tools-open');
		} else {
			designCanvas.toggleClass('design-canvas-zoom-in');		
			editToolsWrapper.toggleClass('canvas-edit-tools-open');
		}

		// will not allow user to access image-bin
		modalLayer.toggle();
		//editToolsWrapper.toggle();


		
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