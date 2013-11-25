$( document ).ready(function() {
    
	console.log("create.js");

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

	////////////////////
	// LOADING SCREEN //
	////////////////////
	
	// var loading_modal = $('.loading-modal-layer');	
	// var gifArray = [];

	// // CONSTRUCTORS
	// function mb_gif(imgSrc, totalTime) {
	// 	this.totalTime = totalTime;
	// 	this.imgSrc = imgSrc;
	// }

	// var mb_animGif_time = [
	// 	6000,
	// 	5600,
	// 	3700,
	// 	4000,
	// 	5600,
	// 	3200
	// ]

	// var mb_animGif = [
	// 	"assets/loading_gifs/cartoon_gif_comp1.gif",
	// 	"assets/loading_gifs/cartoon_gif_comp2.gif",
	// 	"assets/loading_gifs/cartoon_gif_comp3.gif",
	// 	"assets/loading_gifs/cartoon_gif_comp4.gif",
	// 	"assets/loading_gifs/cartoon_gif_comp5.gif",
	// 	"assets/loading_gifs/cartoon_gif_comp6.gif"
	// ];

	// // for-loop that traverses through the mb_animGif array
	// // and creates a gif object with each loading_gif and how 
	// // long each gif takes
	// for (i = 0; i < mb_animGif.length; i++) {
	// 	var gif = new mb_gif(mb_animGif[i], mb_animGif_time[i]);
	// 	gifArray.push(gif);
	// }

	// //console.log(logoArray);
	// console.log(gifArray);


	// // Select a random item from each array list
	// var random_mb_gif = gifArray[Math.floor(Math.random()* 6)];


	// //replace gif animation
	// var currentGif_inner = $(".mb-gif");
	// var currentGif_wrapper = $(".mb-gif-wrapper");

	// currentGif_inner.attr("src", random_mb_gif.imgSrc);

	// console.log(currentGif_inner.src);
	// currentGif_inner.load( function() {
	// 		console.log("fired");
	// 		currentGif_inner.css({"opacity": 1}, 100);

	// 		setTimeout( function() {
	// 			currentGif_wrapper.animate({"opacity": 0
	// 				, "zIndex": -20}, 200)
	// 		}, random_mb_gif.totalTime);
	// }


	////////////////
	// APP STARTS //
	////////////////
	
	var modal_background_layer = $('.modal-layer');
	
	//set the menu highlighter to create
	//$('.highlighter').animate({'left': '250px', 'width': '78px', 'margin-left': '-39px'}, 300);

	
	// captures the modal wrapper for create options
	var create_init_options_modalView = $('.create-init-options-wrapper');

	// animates the initial position of 
	// the create options modal view
	function createOptions_animations() {
		create_init_options_modalView.animate({'top': '50%'}, 400);
	};

	createOptions_animations();


	// inits the generate and design buttons
	var create_option_buttons = $('.init-option-button');
	var create_option_generate_button = $('.init-option-1');
	var create_option_design_button = $('.init-option-2');

	// create init option click events
	create_option_buttons.click( function () {
		
		// captures the specific class of the
		// current clicked button 'generate, design'
		var currentClicked_createMode_button = $(this).children().attr('class').split(' ')[0];
		
		switch (currentClicked_createMode_button) {
			case 'init-option-1':
				console.log('init-option-1: generate');
				
				//fadeOut modal-view
				fadeModalView_createOptions('fadeOut');

				//initialise generate-canvas
				imageBin.fadeOut();
				generateUI.fadeIn();
				break;
			case 'init-option-2':
				console.log('init-option-2: design');
				
				//fadeOut modal-view
				fadeModalView_createOptions('fadeOut');

				//initialise design-canvas
				break;
			default:
				console.log('failed click event on create init options');
				break;
		}
	});

	// fades in or out the modal view create options
	// happens at the begining of the design generator
	// and when a user clicks to init a new canvas in the
	// options
	function fadeModalView_createOptions(fadeType) {
		var fadeSpeed = 200;
		if (fadeType === 'fadeIn') {
			modal_background_layer.fadeIn(fadeSpeed);
			create_init_options_modalView.fadeIn(fadeSpeed);
		} else if (fadeType === 'fadeOut') {
			modal_background_layer.fadeOut(fadeSpeed);
			create_init_options_modalView.fadeOut(fadeSpeed);
		}		
	}
	
	/////////////////
	//  IMAGE-BIN  //
	/////////////////

	//section and subsection variables
		var sectionWidth = 400;
		var sectionHeight = 400;
		var subSectionWidth = 47;
		var subSectionHeight = 47;

	//values to keep track what row we're on
		var row_section = 0;
		var row_subSection = 0;
		var maxColumns_section = 1;
		var maxColumns_subSection = 8;
		var total = 1;
		var subSectionTotal = 64;
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
		"assets/imageBin/completed_designs/JPEG/banana_republic.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch1_1.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch1_2.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch2_1.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch2_2.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch2_3.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch2_4.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch2_5.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch2_6.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch3_1.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch3_2.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch3_3.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch3_5.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch3_6.jpg",
		"assets/imageBin/completed_designs/JPEG/BarelyLegal_Batch4_2.jpg",
		"assets/imageBin/completed_designs/JPEG/BirdPlane.jpg",
		"assets/imageBin/completed_designs/JPEG/brandjacking.jpg",
		"assets/imageBin/completed_designs/JPEG/CartPuff.png",
		"assets/imageBin/completed_designs/JPEG/cbs_eye.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_1.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_2.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_3.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_4.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_5.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_6.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_7.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_8.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_9.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_10.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_11.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_12.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_13.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_14.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_15.jpg",
		"assets/imageBin/completed_designs/JPEG/Chimera_Design1.jpg",
		"assets/imageBin/completed_designs/JPEG/Circle_Logos.jpg",
		"assets/imageBin/completed_designs/JPEG/circlespotsbigCOMPRESSED.jpg",
		"assets/imageBin/completed_designs/JPEG/Design01.jpg",
		"assets/imageBin/completed_designs/JPEG/Design02.jpg",
		"assets/imageBin/completed_designs/JPEG/Design03.jpg",
		"assets/imageBin/completed_designs/JPEG/Design04.jpg",
		"assets/imageBin/completed_designs/JPEG/Design05.jpg",
		"assets/imageBin/completed_designs/JPEG/disneydivision0112.jpeg",
		"assets/imageBin/completed_designs/JPEG/HelloFreaky.jpg",
		"assets/imageBin/completed_designs/JPEG/Lebron_madeof.tif",
		"assets/imageBin/completed_designs/JPEG/MickeySponge.png",
		"assets/imageBin/completed_designs/JPEG/Monograms.jpg",
		"assets/imageBin/completed_designs/JPEG/nikePepsi.jpg",
		"assets/imageBin/completed_designs/JPEG/PickaSponge.jpg",
		"assets/imageBin/completed_designs/JPEG/TrollFakey.png"
	];

	// Head Sprites
	var imageArray1 = [
		"assets/imageBin/character/head/head_sprites/bamBam_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/bart_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/elmo_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/finn_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/fox_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/fred_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/goku_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/goofy_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/helloKitty_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/iceKing_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/link_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/marvin_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/mickey_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/mordecai_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/pikachu_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/samuraiJack_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/scoobyDoo_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/spaceGhost_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/spongeBob_head_sprite.png",
		"assets/imageBin/character/head/head_sprites/yogiBear_head_sprite.png"
	];
	
	// Body Sprites
	var imageArray2 = [
		"assets/imageBin/character/body/body_sprites/bamBam_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/bart_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/domo_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/elmo_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/felixthecat_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/finn_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/fox_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/fred_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/goku_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/goofy_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/helloKitty_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/iceKing_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/link_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/mario_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/marvin_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/mickey_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/mordecai_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/pikachu_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/samuraiJack_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/scoobyDoo_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/spaceGhost_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/spongeBob_body_sprite.png",
		"assets/imageBin/character/body/body_sprites/yogiBear_body_sprite.png"
	];
	
	// Eye Sprites
	var imageArray3 = [
		"assets/imageBin/character/eye/eye_sprites/bamBam_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/bart_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/domo_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/elmo_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/fox_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/fred_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/goku_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/goofy_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/helloKitty_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/iceKing_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/link_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/mario_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/marvin_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/mickey_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/mordocai_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/pikachu_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/samuraiJack_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/scoobyDoo_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/spaceGhost_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/spongeBob_eye_sprite.png",
		"assets/imageBin/character/eye/eye_sprites/yogiBear_eye_sprite.png"
	];
	
	// Mouth Sprites
	var imageArray4 = [
		"assets/imageBin/character/mouth/mouth_sprites/bamBam_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/domo_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/elmo_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/fin_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/fred_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/goku_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/goofy_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/iceKing_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/link_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/mickey_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/mordecai_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/pikachu_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/samuraiJack_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/scoobyDoo_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/spaceGhost_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/spongeBob_mouth_sprite.png",
		"assets/imageBin/character/mouth/mouth_sprites/yogiBear_mouth_sprite.png"
	];

	
	// Nose Sprites
	var imageArray5 = [
		"assets/imageBin/character/nose/nose_sprites/bamBam_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/bart_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/elmo_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/fox_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/fred_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/goku_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/goofy_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/helloKitty_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/iceKing_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/link_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/mario_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/mickey_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/pikachu_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/samuraiJack_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/scoobyDoo_nose_sprite.png",
		"assets/imageBin/character/nose/nose_sprites/yogiBear_nose_sprite.png"
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
		"assets/imageBin/animal/animal_sprites/a-bathing-ape-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/Abercrombie_and_Fitch.png",
		"assets/imageBin/animal/animal_sprites/aflac-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/Alfa_Romeo.png",
		"assets/imageBin/animal/animal_sprites/american-eagle-outfitters-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/American_Airlines.png",
		"assets/imageBin/animal/animal_sprites/anheuser-busch-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/b.a.s.s_animal.png",
		"assets/imageBin/animal/animal_sprites/baby-phat-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/bacardi-mojito-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/barclays.png",
		"assets/imageBin/animal/animal_sprites/bass-pro-shops-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/batman-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/bronco-de-denver-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/browning-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/buffalo-bills-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/buffalo-wild-wings-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/Burberry.png",
		"assets/imageBin/animal/animal_sprites/chicago-bulls-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/crocs-shoes-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/Democratic_Party.png",
		"assets/imageBin/animal/animal_sprites/dodge_1993.png",
		"assets/imageBin/animal/animal_sprites/Dove.png",
		"assets/imageBin/animal/animal_sprites/ecko-unltd-(.eps)-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/Emporio_Armani-[Converted].png",
		"assets/imageBin/animal/animal_sprites/english-premier-league-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/evernote-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/ferrari-emblem-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/fox-moto-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/Greyhound_Bus_Lines.png",
		"assets/imageBin/animal/animal_sprites/hooters-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/ING_Direct.png",
		"assets/imageBin/animal/animal_sprites/Jagermeister-[Converted].png",
		"assets/imageBin/animal/animal_sprites/John_Deere.png",
		"assets/imageBin/animal/animal_sprites/la-vie-du-cote-bon-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/Lacoste.png",
		"assets/imageBin/animal/animal_sprites/Le_Coq_Sportif-[Converted].png",
		"assets/imageBin/animal/animal_sprites/linux-penguin-logo.png",
		"assets/imageBin/animal/animal_sprites/logo-lamborghini-3d.png",
		"assets/imageBin/animal/animal_sprites/Metro_Goldwyn_Mayer.png",
		"assets/imageBin/animal/animal_sprites/mgm-grand-black-vector.png",
		"assets/imageBin/animal/animal_sprites/miami-dolphins-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/mortal-kombat-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/mozilla-firefox-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/msn---microsoft-network-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/MTV2.png",
		"assets/imageBin/animal/animal_sprites/Mustang.png",
		"assets/imageBin/animal/animal_sprites/new-twitter-logo-vector.png",
		"assets/imageBin/animal/animal_sprites/Penguin_Group.png",
		"assets/imageBin/animal/animal_sprites/Peugeot.png",
		"assets/imageBin/animal/animal_sprites/playboy-magazine-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/polar-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/POLO_-_RALPH_LAUREN.png",
		"assets/imageBin/animal/animal_sprites/porsche-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/puma-se--eps--vector-logo.png",
		"assets/imageBin/animal/animal_sprites/qantas_brandmark_vertical_c.png",
		"assets/imageBin/animal/animal_sprites/RCA.png",
		"assets/imageBin/animal/animal_sprites/red_bull_eps-[Converted].png",
		"assets/imageBin/animal/animal_sprites/Republican_correct.png",
		"assets/imageBin/animal/animal_sprites/saab-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/Sea_World.png",
		"assets/imageBin/animal/animal_sprites/Sirius.png",
		"assets/imageBin/animal/animal_sprites/spiderman-3-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/swarovski-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/tecate-black-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/thundercats-emblem-vector-logo.png",
		"assets/imageBin/animal/animal_sprites/united-states-postal-service-usps-logo.png",
		"assets/imageBin/animal/animal_sprites/world-wildlife-fund--eps--vector-logo.png",
		"assets/imageBin/animal/animal_sprites/zynga-logo.png"
	];

	var imageArray8 = [
		"assets/imageBin/food/food_svg/7-eleven-logo-vector.svg",
		"assets/imageBin/food/food_svg/7-up-Logo.svg",
		"assets/imageBin/food/food_svg/anheuser-busch-logo-vector.svg",
		"assets/imageBin/food/food_svg/applebees--eps--vector-logo.svg",
		"assets/imageBin/food/food_svg/bacardi-(.ai)-logo-vector.svg",
		"assets/imageBin/food/food_svg/baskin-robbins-logo-vector.svg",
		"assets/imageBin/food/food_svg/bimbo-(.ai)-logo-vector.svg",
		"assets/imageBin/food/food_svg/bombay-sapphire-logo-vector.svg",
		"assets/imageBin/food/food_svg/Budweiser.svg",
		"assets/imageBin/food/food_svg/burger-king-bk-vector-logo.svg",
		"assets/imageBin/food/food_svg/carlsberg-beer-logo-vector.svg",
		"assets/imageBin/food/food_svg/cheerios-cartoon-vector.svg",
		"assets/imageBin/food/food_svg/churchs-chicken-vector-logo.svg",
		"assets/imageBin/food/food_svg/coca-cola-classic-logo-vector.svg",
		"assets/imageBin/food/food_svg/corona-extra-(.eps)-logo-vector.svg",
		"assets/imageBin/food/food_svg/dairy-queen-vector-logo.svg",
		"assets/imageBin/food/food_svg/dennys-vector-logo.svg",
		"assets/imageBin/food/food_svg/Dole-logo.svg",
		"assets/imageBin/food/food_svg/Dominos_pizza_logo.svg",
		"assets/imageBin/food/food_svg/doritos--eps--vector-logo.svg",
		"assets/imageBin/food/food_svg/dr-pepper-logo-vector.svg",
		"assets/imageBin/food/food_svg/Dunkin__Donuts.svg",
		"assets/imageBin/food/food_svg/fanta-logo-vector.svg",
		"assets/imageBin/food/food_svg/ferrero-rocher-logo-vector.svg",
		"assets/imageBin/food/food_svg/foster’s-logo-vector.svg",
		"assets/imageBin/food/food_svg/gatorade-(.eps)-logo-vector.svg",
		"assets/imageBin/food/food_svg/haagen-dazs--eps--vector-logo.svg",
		"assets/imageBin/food/food_svg/heineken-cap-vector-logo.svg",
		"assets/imageBin/food/food_svg/heinz-tomato-ketchup-vector-logo.svg",
		"assets/imageBin/food/food_svg/hellmanns-vector-logo.svg",
		"assets/imageBin/food/food_svg/hersheys-vector-logo.svg",
		"assets/imageBin/food/food_svg/ihop-vector-logo.svg",
		"assets/imageBin/food/food_svg/jagermeister-se-vector-logo.svg",
		"assets/imageBin/food/food_svg/jelly-belly-vector-logo.svg",
		"assets/imageBin/food/food_svg/jj-s-vector-logo.svg",
		"assets/imageBin/food/food_svg/Johnnie_Walker.svg",
		"assets/imageBin/food/food_svg/kelloggs-company-vector-logo.svg",
		"assets/imageBin/food/food_svg/kfc-sogood-vector-logo.svg",
		"assets/imageBin/food/food_svg/kraft-vector-logo.svg",
		"assets/imageBin/food/food_svg/lays-chips-vector-logo.svg",
		"assets/imageBin/food/food_svg/martini--eps--vector-logo.svg",
		"assets/imageBin/food/food_svg/mcdonalds-logo [Converted].svg",
		"assets/imageBin/food/food_svg/mm.svg",
		"assets/imageBin/food/food_svg/monster-energy-drink-vector-logo.svg",
		"assets/imageBin/food/food_svg/nestle-deserts-vector-logo.svg",
		"assets/imageBin/food/food_svg/new_pepsi_logo.svg",
		"assets/imageBin/food/food_svg/olive-garden-vector-logo.svg",
		"assets/imageBin/food/food_svg/oreo-vector-logo.svg",
		"assets/imageBin/food/food_svg/orville-redenbachers-vector-logo.svg",
		"assets/imageBin/food/food_svg/pizza-hut--food--vector-logo.svg",
		"assets/imageBin/food/food_svg/pringles-vector-logo.svg",
		"assets/imageBin/food/food_svg/Quaker_Oats_2007.svg",
		"assets/imageBin/food/food_svg/quaker-black-vector-logo.svg",
		"assets/imageBin/food/food_svg/sabritas--eps--vector-logo.svg",
		"assets/imageBin/food/food_svg/schweppes--eps--vector-logo.svg",
		"assets/imageBin/food/food_svg/snickers--masterfoods-vector-logo.svg",
		"assets/imageBin/food/food_svg/sonic--eps--vector-logo.svg",
		"assets/imageBin/food/food_svg/sprite--eps--vector-logo.svg",
		"assets/imageBin/food/food_svg/starbucks-coffee-logo-vector.svg",
		"assets/imageBin/food/food_svg/stella-artois--eps--vector-logo.svg",
		"assets/imageBin/food/food_svg/tabasco-vector-logo.svg",
		"assets/imageBin/food/food_svg/Taco_Bell.eps.svg",
		"assets/imageBin/food/food_svg/tecate--eps--vector-logo.svg",
		"assets/imageBin/food/food_svg/wendys-vector-logo.svg",
		"assets/imageBin/food/food_svg/Whole_Foods_Market_logo.svg"
	];

	var imageArray9 = [
		"assets/imageBin/technology/technology_sprites/Microsoft_Windows_XP [Converted].eps.png",
		"assets/imageBin/technology/technology_sprites/America_Online [Converted].png",
		"assets/imageBin/technology/technology_sprites/Mac_OS.png",
		"assets/imageBin/technology/technology_sprites/radioshack-logo-vector.png",
		"assets/imageBin/technology/technology_sprites/EA_Sports.png",
		"assets/imageBin/technology/technology_sprites/amtrak-vector-logo.png",
		"assets/imageBin/technology/technology_sprites/Internet_Explorer_4.png",
		"assets/imageBin/technology/technology_sprites/kickstarter-logo-vector.png",
		"assets/imageBin/technology/technology_sprites/Opera_O.png",
		"assets/imageBin/technology/technology_sprites/PlayStation.png",
		"assets/imageBin/technology/technology_sprites/thumbsupfacebooklikesymbol.png",
		"assets/imageBin/technology/technology_sprites/WiFi.png",
		"assets/imageBin/technology/technology_sprites/Android.png",
		"assets/imageBin/technology/technology_sprites/DVD_Video_Audio.png"
	];


	var imageArray10 = [
		"assets/imageBin/fashion/fashion_svg/a-bathing-ape-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/abercrombie-and-fitch--eps--vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/Adidas_original.svg",
		"assets/imageBin/fashion/fashion_svg/aeropostale-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/affliction-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/air-jordan-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/ax_box_med_sep.svg",
		"assets/imageBin/fashion/fashion_svg/baby-phat-clothing-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/billabong-company-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/billionaire-boys-club-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/Calvin_Klein.svg",
		"assets/imageBin/fashion/fashion_svg/carhartt--eps--vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/Chanel.eps.svg",
		"assets/imageBin/fashion/fashion_svg/clarks-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/converse-all-star-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/crocs-shoes-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/dickies-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/dior-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/dkny--eps--vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/Dolce__and__Gabbana.eps.svg",
		"assets/imageBin/fashion/fashion_svg/ecko-(.eps)-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/everlast-boxing-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/FILA.svg",
		"assets/imageBin/fashion/fashion_svg/fruit-of-the-loom-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/g-star-raw-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/g-unit-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/gap-inc-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/giorgio-armani-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/givenchy-(.eps)-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/Gucci_logo.eps.svg",
		"assets/imageBin/fashion/fashion_svg/gucci-group-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/hermes-international-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/hm-logo.svg",
		"assets/imageBin/fashion/fashion_svg/jansport-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/jean-paul-gaultier-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/kenzo-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/Lacoste.eps.svg",
		"assets/imageBin/fashion/fashion_svg/lee-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/Levis.svg",
		"assets/imageBin/fashion/fashion_svg/louis-vuitton-company-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/new-balance-black-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/nike-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/oneill--eps--vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/paul-frank-monkey-logo.svg",
		"assets/imageBin/fashion/fashion_svg/persol-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/puma-se--eps--vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/Ray_Ban_Genuine [Converted].eps.svg",
		"assets/imageBin/fashion/fashion_svg/reebok-shoes-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/rolex-logo.eps.svg",
		"assets/imageBin/fashion/fashion_svg/skechers-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/stussy-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/supreme.svg",
		"assets/imageBin/fashion/fashion_svg/swarovski-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/tapout-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/the-north-face.svg",
		"assets/imageBin/fashion/fashion_svg/timberland--eps--vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/tommy-hilfiger--eps--vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/toms-shoes-logo-vector.svg",
		"assets/imageBin/fashion/fashion_svg/tory_burch.svg",
		"assets/imageBin/fashion/fashion_svg/tribal-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/ugg-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/under-armour-black-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/uniqlo [Converted].eps.svg",
		"assets/imageBin/fashion/fashion_svg/Vans [Converted].eps.svg",
		"assets/imageBin/fashion/fashion_svg/vans-performance-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/versace-medusa-vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/yves-saint-laurent--eps--vector-logo.svg",
		"assets/imageBin/fashion/fashion_svg/ZARA [Converted].svg"
	];
	var imageArray11 = [];
	var imageArray12 = [];
	var imageArray13 = [];
	var imageArray14 = [];
	var imageArray15 = [];
	
	/* PRODUCT IMAGE ARRAY */
	var imageArray16 = [
		"assets/imageBin/products/product_sprites/product_sprite_objects/polo.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_49.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/headphones.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_45.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_46.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_34.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_36.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_37.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_40.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_21.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_25.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_32.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_33.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_15.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_16.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_18.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_08.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_09.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_12.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_13.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_04.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_06.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_01.jpg",
		"assets/imageBin/products/product_sprites/product_sprite_objects/product_02.jpg"
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
		imageArray8,
		imageArray9,
		imageArray10,
		imageArray11,
		imageArray12,
		imageArray13,
		imageArray14,
		imageArray15,
		imageArray16
	];

	// -------------------------- //
	// IMAGE BIN DESIGNS FOR LOOP //
	// -------------------------- // 
	
	function squareGrid() {
		// for loop that appends the square
		// where the image-bin assets are placed
			for (i = 0; i < total; i++) {

				// creates remainder
				var column_section = i % maxColumns_section; // 5
				//console.log(column_section)

				var new_top = column_section * (sectionWidth + padding_section);
				var new_left = row_section * (sectionHeight + padding_section);

				var $mainBody_Section = $('<div class="image-bin-section section-category-designs"/>'); 
		    	$('.image-bin-wrapper').append($mainBody_Section);

		    	//$mainBody_Section.css({"top": new_top + "px", "left": new_left});

		    	if (column_section === (maxColumns_section - 1)) {
		    		row_section++;
		    	}

		    	randomPastelColor();

		    	// create instance of each 2 dimensional array to
		    	// loop through the items in
		    	var currentImageArray = largeImageArray[i];
				var currentImageArrayLength = largeImageArray[i].length;
				//console.log(currentImageArray);

		    	//console.log('r:' + r + ' g:' + g + ' b:' + b);
		    	//var pastelColor = randomPastelColor();
		    	//console.log(pastelColor);

		    	//append subSection
				for (j = 0; j < subSectionTotal; j++) {

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
		}

		// execute squareGrid function
		squareGrid();


    // ---------------------------- //
	// PRODUCT BIN DESIGNS FOR LOOP //
	// ---------------------------- // 
	
	function squareGrid_productBin() {
		// for loop that appends the square
		// where the image-bin assets are placed
			for (i = 0; i < total; i++) {

				// creates remainder
				var column_section = i % maxColumns_section; // 5
				//console.log(column_section)

				var new_top = column_section * (sectionWidth + padding_section);
				var new_left = row_section * (sectionHeight + padding_section);

				var $mainBody_Section = $('<div class="image-bin-product"/>'); 
		    	$('.product-bin-wrapper').append($mainBody_Section);

		    	//$mainBody_Section.css({"top": new_top + "px", "left": new_left});

		    	if (column_section === (maxColumns_section - 1)) {
		    		row_section++;
		    	}

		    	randomPastelColor();

		    	// create instance of each 2 dimensional array to
		    	// loop through the items in
		    	var currentImageArray = largeImageArray[16];
				var currentImageArrayLength = largeImageArray[16].length;
				//console.log(currentImageArray);

		    	//console.log('r:' + r + ' g:' + g + ' b:' + b);
		    	//var pastelColor = randomPastelColor();
		    	//console.log(pastelColor);

		    	//append subSection
				for (j = 0; j < 80; j++) {

					var maxColumns_subSection = 10;

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
		}

		// execute squareGrid function
		squareGrid_productBin();

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
			var design_layer_1 = $('.design-layer-1');
			//console.log(design_layer_1.css('background-image'));

			var designLayer_svg;


			$square.click(function() {

				switch (current_activeMode) {//146 147 
					case 'design-mode':
	
						var clicked_spriteImage = $(this).css('background-image').toString();
						//var parsed_clicked_spriteImage = clicked_spriteImage.substr(125).substr(0, clicked_spriteImage.length-126);
						var parsed_clicked_spriteImage = clicked_spriteImage.substr(125).substr(10, clicked_spriteImage.length-126);

							console.log(clicked_spriteImage);
							console.log(parsed_clicked_spriteImage.substr(0, 4));
							console.log('dsd');	
						
						var design_canvas_dataPath = 'assets/imageBin/completed_designs/';
						design_layer_1.css({'background-image': 'url("' + design_canvas_dataPath + parsed_clicked_spriteImage + '")'});
						//design_layer_1.draggable();

						console.log('clicked_mode: design-mode');
						break;
					case 'product-mode':
						console.log('clicked_mode: product-mode');
						
						var clicked_spriteImage = $(this).css('background-image').toString();
						//var parsed_clicked_spriteImage = clicked_spriteImage.substr(150).substr(0, clicked_spriteImage.length-155);				
						var parsed_clicked_spriteImage = clicked_spriteImage.substr(159).substr(0, clicked_spriteImage.length-164);				

							console.log(parsed_clicked_spriteImage);

						var design_canvas_dataPath = 'assets/imageBin/products/product_templates/product_template_objects/';
						
						var product_base_layer = $('.product-base-layer');
						var product_overlay_layer = $('.product-overlay-layer');
						var product_accesory_layer = $('.product-accesory-layer');
						
						var design_layer_wrapper = $('.design-layer-wrapper-product-on');
						//console.log(parsed_clicked_spriteImage);
							
							
							designLayer_svg = 'url("' + design_canvas_dataPath + parsed_clicked_spriteImage + '/' + parsed_clicked_spriteImage + '.svg")';
							console.log(designLayer_svg);
							design_layer_wrapper.css({'-webkit-mask-box-image': designLayer_svg });
							
							product_base_layer.attr('src',  design_canvas_dataPath + parsed_clicked_spriteImage +"/" + parsed_clicked_spriteImage + ".png");
							product_overlay_layer.attr('src', design_canvas_dataPath + parsed_clicked_spriteImage +"/" + parsed_clicked_spriteImage + "_overlay.png");
							// //product_accesory_layer.attr('src', design_canvas_dataPath + parsed_clicked_spriteImage +"/" + parsedclicked + ".png");
								//console.log(design_canvas_dataPath + parsed_clicked_spriteImage);


						//design_layer_1.css({'background-image': 'url("' + design_canvas_dataPath + parsed_clicked_spriteImage + '")'});
						
						break;
					default:
						break;
				}
			});

	/////////////////
	//  CANVAS-UI  //
	/////////////////


	// initialize canvas-ui, image-bin, and modal layer section variables
		var current_activeMode = 'design-mode';
		var current_activeCategory = 'completed-designs';

		var imageBin = $('.image-bin');
		var productBin = $('.product-bin');
		var completeMode = $('.complete-mode-page-wrapper');
		var generateUI = $('.generator-ui');
		var modalLayer = $('.modal-layer');
		var designCanvas = $('.canvas-ui');

	// initialize canvas-ui mode-button variables
		var settingsButton = $('.canvas-settings-button');
		var settingsOptions = $('.settings-options-wrapper');
		var designButton = $('.canvas-design-button');
		var productButton = $('.canvas-product-button');
		var completeButton = $('.canvas-complete-button');
		var zoomButton = $('.canvas-zoom-button');
		var marqueeResizeButton = $('.canvas-marquee-resize-button');
			
			// checks logic for zoom animation
				var zoomButtonMousedown = false;
				var zoomButtonToggle_zoomIn = false;
				var zoomButton_firstClick = true;

			// checks logic for settings animation
				var settingsButton_firstClick = true;

			// checks logic for marquee-resize animation
			var marquee_clickState = false;

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

		// $("#stop").click(function() {
		// 	$(".rotate").one('animationiteration webkitAnimationIteration', function() {
		// 		$(this).removeClass("anim");
		// 	});
		// });

		// create-mode click events 
		designButton.click( function() {
			designButton_click();	
		});

		productButton.click( function() {
			productButton_click();	
		});

		completeButton.click( function() {
			completeButton_click();	
		});

		marqueeResizeButton.click( function() {
			marqueeResizeButton_click();
		});

		// create mode click event functions
		function designButton_click() {
			console.log('design-mode');

			// creates radio button logic
				
				//changes background & button icons
				designButton.addClass('canvas-tool-button-active canvas-design-button-active');
				designButton.removeClass('canvas-design-button');
				productButton.removeClass('canvas-tool-button-active canvas-product-button-active');
				productButton.addClass('canvas-product-button');
				completeButton.removeClass('canvas-tool-button-active canvas-complete-button-active');
				completeButton.addClass('canvas-complete-button');

			// changes the mode section 
			imageBin.fadeIn();
			productBin.fadeOut();
			completeMode.fadeOut();

			modalLayer.fadeOut();

			// need to refactor
			$('.design-layer-wrapper-product-on').removeClass('design-layer-wrapper-product-on').addClass('design-layer-wrapper-product-off');
			$('.product-wrapper-on').removeClass('product-wrapper-on').addClass('product-wrapper-off');

			// updates the current active canvas-mode
			current_activeMode = 'design-mode';
			console.log('active-mode:' + current_activeMode);

			// take the mask-box from the design div
			var design_layer_wrapper = $('.design-layer-wrapper-product-off');
			design_layer_wrapper.css({'-webkit-mask-box-image': ''});
		}

		function productButton_click() {
			console.log('product-mode');
				
				productButton.addClass('canvas-tool-button-active canvas-product-button-active');
				productButton.removeClass('canvas-product-button');
				designButton.removeClass('canvas-tool-button-active canvas-design-button-active');
				designButton.addClass('canvas-design-button');
				completeButton.removeClass('canvas-tool-button-active canvas-complete-button-active');
				completeButton.addClass('canvas-complete-button');
				
				// changes the mode section
				imageBin.fadeOut();
				productBin.fadeIn();
				completeMode.fadeOut();

				modalLayer.fadeOut();

			// need to refactor
			$('.design-layer-wrapper-product-off').removeClass('design-layer-wrapper-product-off').addClass('design-layer-wrapper-product-on');
			$('.product-wrapper-off').removeClass('product-wrapper-off').addClass('product-wrapper-on');
		
			// updates the current active canvas-mode
			current_activeMode = 'product-mode';
			console.log('active-mode:' + current_activeMode);

			// take the mask-box from the design div
			var design_layer_wrapper = $('.design-layer-wrapper-product-on');
			design_layer_wrapper.css({'-webkit-mask-box-image': designLayer_svg });
		}

		function completeButton_click() {
			console.log('complete-mode');

				completeButton.addClass('canvas-tool-button-active canvas-complete-button-active');
				completeButton.removeClass('canvas-complete-button');
				designButton.removeClass('canvas-tool-button-active canvas-design-button-active');
				designButton.addClass('canvas-design-button');
				productButton.removeClass('canvas-tool-button-active canvas-product-button-active');
				productButton.addClass('canvas-product-button');

				// changes the mode section
				imageBin.fadeOut();
				productBin.fadeOut();
				completeMode.fadeIn();
				modalLayer.fadeIn();
		}

		function marqueeResizeButton_click() {
			console.log('marquee-resize-button click');
			var all_designLayer_generators = $('.design-layer-generator');
			var all_background_image_styling = $('.background-image-styling');

			if (marquee_clickState === true) {
				marquee_clickState = false;

				all_designLayer_generators.css({'border':'none'});
				all_background_image_styling.css({'border':'none'});

			} else if (marquee_clickState === false) {
				marquee_clickState = true;

				all_designLayer_generators.css({'border':'1px dashed black'});
				all_background_image_styling.css({'border':'1px dashed black'});

			}

		}

		var complete_options_modalView = $('.complete-mode-page-wrapper');
		var complete_options_buttons = $('.complete-mode-option-button');

		// create init option click events
		complete_options_buttons.click( function () {

			// captures the specific class of the
			// current clicked complete mode button 
			// 'generate, design'
			var currentClicked_completeMode_button = $(this).children().attr('class').split(' ')[0];
			
			switch (currentClicked_completeMode_button) {
				case 'complete-mode-option-1':
					console.log('complete-mode-option-1: Upload to Collection');
					
					//fadeOut complete-mode modal-view
					fadeModalView_completeOptions("fadeOut");

					break;
				case 'complete-mode-option-2':
					console.log('complete-mode-option-2: Share');
					
					//fadeOut complete-mode modal-view
					fadeModalView_completeOptions("fadeOut");

					break;
				case 'complete-mode-option-3':
					console.log('complete-mode-option-3: Download');
					
					//fadeOut complete-mode modal-view
					fadeModalView_completeOptions("fadeOut");

					break;
				case 'complete-mode-option-4':
					console.log('complete-mode-option-4: Continue Editing');
					
					//fadeOut complete-mode modal-view
					fadeModalView_completeOptions("fadeOut");
					break;
				default:
					console.log('failed click event on complete options');
					break;
			}

			// updates the current active canvas-mode
			current_activeMode = 'complete-mode';
			console.log('active-mode:' + current_activeMode);
		});

		// fades in or out the modal view complete options
		// when a user clicks on complete options buttons
	
		function fadeModalView_completeOptions(fadeType) {
			var fadeSpeed = 200;	
			if (fadeType === 'fadeIn') {			
				modal_background_layer.fadeIn(fadeSpeed);
				complete_options_modalView.fadeIn(fadeSpeed);
			} else if (fadeType === 'fadeOut') {
				modal_background_layer.fadeOut(fadeSpeed);
				complete_options_modalView.fadeOut(fadeSpeed);
				productButton_click();
			}		
		}

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


	//////////////////
	// IMAGE-BIN UI //
	////////////////// 
	
	var imageBinCategoryButtons = $('.image-bin-category-button');
	var imageBinSection = $('.image-bin-section');
		//console.log(imageBinCategoryButtons);
	var categoryButtons = $('.image-bin-settings');
	var categoryButtonsChildren = categoryButtons.children();
	var activeCategory_button = $('.active');
	var previousCategory_button;

	var imageArraySelected;

	imageBinCategoryButtons.click( function () {

		// updates the previous category button clicked
		activeCategory_button.removeClass('active');
		previousCategory_button = activeCategory_button;
		parsed_previousCategory_button = previousCategory_button.attr('class').split(' ')[1];
			//console.log(parsed_previousCategory_button);

		// updates the current category button clicked
		activeCategory_button = $(this);
		activeCategory_button.addClass('active');
		parsed_activeCategory_button = activeCategory_button.attr('class').split(' ')[1];
		console.log(parsed_activeCategory_button);
		
		// changes the previous category button to
		// its unactive state
		switch (parsed_previousCategory_button) {
			case('category-design-button'):
				// console.log('category-design-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_designs.png")'});
				break;
			case('category-character-head-button'):
				// console.log('category-character-head-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_character_head.png")'});
				break;
			case('category-character-body-button'):
				// console.log('category-character-body-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_character_body.png")'});
				break;
			case('category-character-eyes-button'):
				// console.log('category-character-eyes-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_character_eyes.png")'});
				break;
			case('category-character-mouth-button'):
				// console.log('category-character-mouth-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_character_mouth.png")'});
				break;
			case('category-character-nose-button'):
				// console.log('category-character-nose-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_character_nose.png")'});
				break;
			case('category-character-accessory-button'):
				// console.log('category-character-accessory-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_character_accessory.png")'});
				break;
			case('category-logo-animal-button'):
				// console.log('category-logo-animal-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_logo_animal.png")'});
				break;
			case('category-logo-food-button'):
				// console.log('category-logo-food-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_logo_food.png")'});
				break;
			case('category-logo-technology-button'):
				// console.log('category-logo-technology-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_logo_technology.png")'});
				break;
			case('category-logo-fashion-button'):
				// console.log('category-logo-fashion-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_logo_fashion.png")'});
				break;
			case('category-logo-entertainment-button'):
				// console.log('category-logo-entertainment-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_logo_entertainment.png")'});
				break;
			case('category-logo-business-button'):
				// console.log('category-logo-business-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_logo_business.png")'});
				break;
			case('category-objects-button'):
				// console.log('category-objects-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_objects.png")'});
				break;
			case('category-background-button'):
				// console.log('category-background-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_background.png")'});
				break;
			case('category-upload-button'):
				// console.log('category-upload-button' + ' previous');
				previousCategory_button.css({'background-image': 'url("assets/icons/mb_category_upload.png")'});
				break;
			default:
				console.log(' click previous category failed');
				break;
		}


		// changes the current category button to
		// its active state
		switch (parsed_activeCategory_button) {
			case('category-design-button'):
				// console.log('category-design-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[0];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_designs_active.png")'});

					// updates the current active image-bin-category
					current_activeCategory = 'completed-designs';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-character-head-button'):
				// console.log('category-character-head-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[1];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_character_head_active.png")'});
				
					// updates the current active image-bin-category
					current_activeCategory = 'character-head';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-character-body-button'):
				// console.log('category-character-body-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[2];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_character_body_active.png")'});

					// updates the current active image-bin-category
					current_activeCategory = 'character-body';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-character-eyes-button'):
				// console.log('category-character-eyes-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[3];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_character_eyes_active.png")'});
				
					// updates the current active image-bin-category
					current_activeCategory = 'character-eyes';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-character-mouth-button'):
				// console.log('category-character-mouth-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[4];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_character_mouth_active.png")'});
				break;
			case('category-character-nose-button'):
				// console.log('category-character-nose-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[5];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_character_nose_active.png")'});

					// updates the current active image-bin-category
					current_activeCategory = 'character-nose';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-character-accessory-button'):
				// console.log('category-character-accessory-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[6];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_character_accessory_active.png")'});
				
					// updates the current active image-bin-category
					current_activeCategory = 'character-accessory';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-logo-animal-button'):
				// console.log('category-logo-animal-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[7];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_logo_animal_active.png")'});
				
					// updates the current active image-bin-category
					current_activeCategory = 'logo-animal';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-logo-food-button'):
				// console.log('category-logo-food-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[8];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_logo_food_active.png")'});
					
					// updates the current active image-bin-category
					current_activeCategory = 'logo-food';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-logo-technology-button'):
				// console.log('category-logo-technology-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[9];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_logo_technology_active.png")'});
				
					// updates the current active image-bin-category
					current_activeCategory = 'logo-technology';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-logo-fashion-button'):
				// console.log('category-logo-fashion-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[10];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_logo_fashion_active.png")'});
				
					// updates the current active image-bin-category
					current_activeCategory = 'logo-fashion';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-logo-entertainment-button'):
				// console.log('category-logo-entertainment-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[11];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_logo_entertainment_active.png")'});
				
					// updates the current active image-bin-category
					current_activeCategory = 'logo-entertainment';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-logo-business-button'):
				// console.log('category-logo-business-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[12];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_logo_business_active.png")'});
				
					// updates the current active image-bin-category
					current_activeCategory = 'logo-business';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-objects-button'):
				// console.log('category-objects-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[13];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_objects_active.png")'});
				
					// updates the current active image-bin-category
					current_activeCategory = 'objects';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-background-button'):
				// console.log('category-background-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[14];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_background_active.png")'});
				
					// updates the current active image-bin-category
					current_activeCategory = 'backgrounds';
					console.log('active-category:' + current_activeCategory);
				break;
			case('category-upload-button'):
				// console.log('category-upload-button' + ' active');
				var currentCategorySelectedImageBin = parsed_activeCategory_button;
				imageArraySelected = largeImageArray[15];
				activeCategory_button.css({'background-image': 'url("assets/icons/mb_category_upload_active.png")'});
				
					// updates the current active image-bin-category
					current_activeCategory = 'upload';
					console.log('active-category:' + current_activeCategory);
				break;
			default:
				console.log(' click current category failed');
				break;
		}

		// parses the second class of an element an takes off a certain amount
		// of characters from the front and the back of the selection
		// var parsed_currentCategorySelected = currentCategorySelectedClassButton.substr(9).substr(0, currentCategorySelectedClassButton.length-16);

		// for loop that replaces the image-bin with 
		// the batch of the current category
		var imageBinSectionChildren = imageBinSection.children();
		var imageArrayCounter = 0;

		for (i = 0; i < imageBinSectionChildren.length; i++) {
			imageBinSectionChildren[i].style.backgroundImage = 'url("' + imageArraySelected[imageArrayCounter] + '")';

			//console.log(imageBinSectionChildren[i].style.backgroundImage);
			imageArrayCounter++;
		}
	})

	
	/////////////////////
	//    GENERATOR    //
	/////////////////////
	
	var generate_button = $('.generate-button');

	// genrate button click handler
	// call separate generate functions
	generate_button.click( function () {
		
		// captures the button's class to check wich
		// generator to execute
			var parsed_clicked_generatorType_button = $(this).attr('class').split(' ')[1];

			switch (parsed_clicked_generatorType_button) {
				case 'generator-character-button-wrapper':
					//console.log('generator-character-button-wrapper');
					generate_character();
					break;
				case 'generator-pattern-button-wrapper':
					//console.log('generator-pattern-button-wrapper');
					generate_patter();
					break;
				case 'generator-animal-button-wrapper':
					//console.log('generator-animal-button-wrapper');				
					generate_animal();
					break;
				case 'generator-logo-button-wrapper':
					//console.log('generator-logo-button-wrapper');
					generate_logo();
					break;
				default:
					console.log('generate-button click failed')
					break;
			}
	});

	// generate functions
		function generate_character() {
			console.log('generator-character-button');

			/* -- CHARACTER -- */

				// Character Name Array
				var characterNameArray = [
					'bamBam',
					'bart',
					'elmo',
					'finn',
					'fred',
					'fox',
					'goku',
					'goofy',
					'helloKitty',
					'iceKing',
					'link',
					'marvin',
					'mickey',
					'mordecai',
					'pikachu',
					'samuraiJack',
					'scoobyDoo',
					'spaceGhost',
					'spongeBob',
					'yogiBear'
				];

			// Head array
			var headArray = [
				"assets/imageBin/character/head/samuraiJack_head.png",
				"assets/imageBin/character/head/yogiBear_head.png",
				"assets/imageBin/character/head/fox_head.png",
				"assets/imageBin/character/head/link_head.png",
				"assets/imageBin/character/head/marvin_head.png",
				"assets/imageBin/character/head/goofy_head.png",
				"assets/imageBin/character/head/iceKing_head.png",
				"assets/imageBin/character/head/bart_head.png",
				"assets/imageBin/character/head/mordecai_head.png",
				"assets/imageBin/character/head/spaceGhost_head.png",
				"assets/imageBin/character/head/fred_head.png",
				"assets/imageBin/character/head/scoobyDoo_head.png",
				"assets/imageBin/character/head/bamBam_head.png",
				"assets/imageBin/character/head/finn_head.png",
				"assets/imageBin/character/head/pikachu_head.png",
				"assets/imageBin/character/head/elmo_head.png",
				"assets/imageBin/character/head/goku_head.png",
				"assets/imageBin/character/head/helloKitty_head.png",
				"assets/imageBin/character/head/mickey_head.png",
				"assets/imageBin/character/head/spongeBob_head.png"
			];

			//Eye array
			var eyeArray = [
				"assets/imageBin/character/eye/samuraiJack_eye.png",
				"assets/imageBin/character/eye/yogiBear_eye.png",
				"assets/imageBin/character/eye/fox_eye.png",
				"assets/imageBin/character/eye/link_eye.png",
				"assets/imageBin/character/eye/marvin_eye.png",
				"assets/imageBin/character/eye/iceKing_eye.png",
				"assets/imageBin/character/eye/goofy_eye.png",
				"assets/imageBin/character/eye/bart_eye.png",
				"assets/imageBin/character/eye/mordocai_eye.png",
				"assets/imageBin/character/eye/spaceGhost_eye.png",
				"assets/imageBin/character/eye/pikachu_eye.png",
				"assets/imageBin/character/eye/scoobyDoo_eye.png",
				"assets/imageBin/character/eye/fred_eye.png",
				"assets/imageBin/character/eye/bamBam_eye.png",
				"assets/imageBin/character/eye/mario_eye.png",
				"assets/imageBin/character/eye/domo_eye.png",
				"assets/imageBin/character/eye/elmo_eye.png",
				"assets/imageBin/character/eye/goku_eye.png",
				"assets/imageBin/character/eye/helloKitty_eye.png",
				"assets/imageBin/character/eye/mickey_eye.png",
				"assets/imageBin/character/eye/spongeBob_eye.png"
			];

			//Mouth array
			var mouthArray = [
				"assets/imageBin/character/mouth/bamBam_mouth.png",
				"assets/imageBin/character/mouth/domo_mouth.png",
				"assets/imageBin/character/mouth/elmo_mouth.png",
				"assets/imageBin/character/mouth/fin_mouth.png",
				"assets/imageBin/character/mouth/fred_mouth.png",
				"assets/imageBin/character/mouth/goku_mouth.png",
				"assets/imageBin/character/mouth/goofy_mouth.png",
				"assets/imageBin/character/mouth/iceKing_mouth.png",
				"assets/imageBin/character/mouth/link_mouth.png",
				"assets/imageBin/character/mouth/mickey_mouth.png",
				"assets/imageBin/character/mouth/mordecai_mouth.png",
				"assets/imageBin/character/mouth/pikachu_mouth.png",
				"assets/imageBin/character/mouth/samuraiJack_mouth.png",
				"assets/imageBin/character/mouth/scoobyDoo_mouth.png",
				"assets/imageBin/character/mouth/spaceGhost_mouth.png",
				"assets/imageBin/character/mouth/spongeBob_mouth.png",
				"assets/imageBin/character/mouth/yogiBear_mouth.png"
			];

			//Nose array 
			var noseArray = [
				"assets/imageBin/character/nose/bamBam_nose.png",
				"assets/imageBin/character/nose/bart_nose.png",
				"assets/imageBin/character/nose/elmo_nose.png",
				"assets/imageBin/character/nose/fred_nose.png",
				"assets/imageBin/character/nose/goku_nose.png",
				"assets/imageBin/character/nose/goofy_nose.png",
				"assets/imageBin/character/nose/helloKitty_nose.png",
				"assets/imageBin/character/nose/iceKing_nose.png",
				"assets/imageBin/character/nose/link_nose.png",
				"assets/imageBin/character/nose/mario_nose.png",
				"assets/imageBin/character/nose/mickey_nose.png",
				"assets/imageBin/character/nose/pikachu_nose.png",
				"assets/imageBin/character/nose/samuraiJack_nose.png",
				"assets/imageBin/character/nose/scoobyDoo_nose.png",
				"assets/imageBin/character/nose/fox_nose.png",
				"assets/imageBin/character/nose/yogiBear_nose.png"
			];

			//Body array 
			var bodyArray = [
				"assets/imageBin/character/body/bamBam_body.png",
				"assets/imageBin/character/body/bart_body.png",
				"assets/imageBin/character/body/domo_body.png",
				"assets/imageBin/character/body/elmo_body.png",
				"assets/imageBin/character/body/felixthecat_body.png",
				"assets/imageBin/character/body/finn_body.png",
				"assets/imageBin/character/body/fred_body.png",
				"assets/imageBin/character/body/goku_body.png",
				"assets/imageBin/character/body/goofy_body.png",
				"assets/imageBin/character/body/helloKitty_body.png",
				"assets/imageBin/character/body/link_body.png",
				"assets/imageBin/character/body/mario_body.png",
				"assets/imageBin/character/body/marvin_body.png",
				"assets/imageBin/character/body/mickey_body.png",
				"assets/imageBin/character/body/mordecai_body.png",
				"assets/imageBin/character/body/pikachu_body.png",
				"assets/imageBin/character/body/samuraiJack_body.png",
				"assets/imageBin/character/body/scoobyDoo_body.png",
				"assets/imageBin/character/body/spaceGhost_body.png",
				"assets/imageBin/character/body/spongeBob_body.png",
				"assets/imageBin/character/body/fox_body.png",
				"assets/imageBin/character/body/yogiBear_body.png"
			];

			//Accesory array
			var accessoryArray = [
				"../../assets/character/accessory/hellokitty_accessory.png"
			];

	/* -- LOGO -- */
			//Logo array
			var logoArray = [
			];

	/* -- BACKGROUND -- */
			//Background array
			var backgroundArray = [
			"../../assets/background/commedegarcons_background.jpg",
			"../../assets/background/southpark_background.jpg",
			"../../assets/background/louisvuiton_background.jpg"
			];


	//Select a random asset from each array list
			
			//character
				var characterName = characterNameArray[Math.floor(Math.random()* characterNameArray.length)];

					var head_image = headArray[Math.floor(Math.random()* headArray.length)];
					var eye_image = eyeArray[Math.floor(Math.random()* eyeArray.length)];
					var accessory_image = accessoryArray[Math.floor(Math.random()* 1)];
					var mouth_image = mouthArray[Math.floor(Math.random()* mouthArray.length)];
					var nose_image = noseArray[Math.floor(Math.random()* noseArray.length)];
					var body_image = bodyArray[Math.floor(Math.random()* bodyArray.length)];
					//logo
						//var logo_image = logoArray[Math.floor(Math.random()* 10)];
					//background
						//var background_image = backgroundArray[Math.floor(Math.random()* 3)];


				// used to traverse the character object literal
				// for positioning that character body part 
				var parsed_head_image = head_image.substr(31).substr(0, head_image.length-40);
				var parsed_eye_image = eye_image.substr(30).substr(0, eye_image.length-38);
				var parsed_accessory_image = accessory_image.substr(31).substr(0, accessory_image.length-40);
				var parsed_mouth_image = mouth_image.substr(32).substr(0, mouth_image.length-42);
				var parsed_nose_image = nose_image.substr(31).substr(0, nose_image.length-40);

					console.log('parsed_head_image: ' + parsed_head_image);
					//console.log('parsed_eye_image: ' + parsed_eye_image);
					//console.log('parsed_accessory_image: ' + parsed_accessory_image);
					//console.log('parsed_mouth_image: ' + parsed_mouth_image);
					//console.log('parsed_nose_image: ' + parsed_nose_image);

	//Select the image templates from the dom tree
	// and replace with random assets
			
			// append body
			var layer1 = $(".design-layer-2");
			layer1.css({
				// 'background-image': 'url("' + character_OBJ.domo.body.url + '")',
				// 'width' : character_OBJ.domo.body.width,
				// 'height': character_OBJ.domo.body.height,
				// 'left': character_OBJ.domo.body.left,
				// 'top': character_OBJ.domo.body.top

				'background-image': 'url("' + character_OBJ[characterName].body.url + '")',
				'width' : character_OBJ[characterName].body.width,
				'height': character_OBJ[characterName].body.height,
				'left': character_OBJ[characterName].body.left,
				'top': character_OBJ[characterName].body.top
			});

			// append head
			var layer2 = $(".design-layer-3");
				layer2.css({
					'background-image': 'url("' + head_image + '")',
					'width': character_OBJ[characterName].head[parsed_head_image].width + 'px',
					'height': character_OBJ[characterName].head[parsed_head_image].height + 'px',
					'left': character_OBJ[characterName].head[parsed_head_image].left + 'px',
					'top': character_OBJ[characterName].head[parsed_head_image].top + 'px'
					//'top': character_OBJ[characterName].head.top + 'px',

				});

			// append eye
			var layer3 = $(".design-layer-4");
			layer3.css({
				'background-image': 'url("' + eye_image + '")',
				'width' : character_OBJ[characterName].eye.width,
				'height': character_OBJ[characterName].eye.height,
				'left': character_OBJ[characterName].eye.left,
				'top': character_OBJ[characterName].eye.top 
			});


			// // append mouth
			var layer4 = $(".design-layer-5");
			layer4.css({
				'background-image': 'url("' + mouth_image + '")',
				'width' : character_OBJ[characterName].mouth.width,
				'height': character_OBJ[characterName].mouth.height,
				'left': character_OBJ[characterName].mouth.left,
				'top': character_OBJ[characterName].mouth.top 
			});


			// // append nose
			var layer5 = $(".design-layer-6");
			layer5.css({
				'background-image': 'url("' + nose_image + '")',
				'width' : character_OBJ[characterName].nose.width,
				'height': character_OBJ[characterName].nose.height,
				'left': character_OBJ[characterName].nose.left,
				'top': character_OBJ[characterName].nose.top
			});
			
			// // append accessory
			// var layer6 = $('.design-layer-7');
			// layer6.css({'background-image': 'url("' + accessory_image + '")'});

				// append logo
				// var layer9 = $(".layer9");
				//layer9.src = logo_image;

				//append background
				// var layer10 = $(".layer10");
				// layer10.attr("src", background_image);
				//layer10.src = background_image;
		}

		var genarator_all_patterns = $('.design-layer-generator-pattern');
		var generator_pattern1 = $('.pattern-1');
		var generator_pattern2 = $('.pattern-2');

		function generate_patter() {
			console.log('generator-pattern-button');

			genarator_all_patterns.fadeIn().draggable();
			//generator_pattern1.fadeIn().draggable();
			//generator_pattern2.fadeIn().draggable();
		}

		function generate_animal() {
			console.log('generator-animal-button');	
		}

		function generate_logo() {
			console.log('generator-logo-button');
		}

	////////////////////////////
	//	CANVAS MOUSE EVENTS   //
	////////////////////////////
	
		// PRODUCT BACKGROUND IMAGE DRAGGABLE
			shirtImage = $('.design-layer-1');

			var mousedown = 0;

			// track cursor
			var x, y;

			var dragFunctionVar;

		      shirtImage.mousedown(function() {
		        console.log('mousedown');
		        mousedown = 1;

		        
		          dragEvent();
		        
		          
		      }).mouseup(function() {
		        mousedown = 0;
		        console.log('mouseup');
		        dragFunctionVar.unbind('mousemove');
		      }).on('mouseenter mouseleave', function(e) {
		        var $that = $(this);
		        /*if (e.type == 'mouseenter') {
		          console.log('mouseenter');
		        }*/
		        if (e.type == 'mouseleave') {
		          if (mousedown == 1) {
		            console.log('mouseup');
		            mousedown = 0;
		            //console.log(mousedown);
		            dragFunctionVar.unbind('mousemove');

		          }
		        }
		      });

		    function dragEvent() {

		    	dragFunctionVar = $(document).mousemove(function(e){
					x = e.pageX;
					y = e.pageY;
					
					//console.log('x: ' + x + ' y: ' + y);
					//console.log('x:' + e.pageX +', y: '+ e.pageY);

					// google how to console log backgroundPosition
					// X and Y separately
					// shirtImage.css('backgroundPosition');

					shirtImage.css({'backgroundPosition': (x - 150) + 'px ' + (y - 50) + 'px'})
				});
		    }
	
	$(".design-layer-2" ).click( function() {
		console.log('click product-styling');	
	});

	// var design = $('.design-layer-2');

	// design.draggable();
	// design.resizable();
	// $(".design-layer-3" ).draggable();
	// $(".design-layer-3" ).resizable();

	// $(".design-layer-4" ).draggable();
	// $(".design-layer-4" ).resizable();

	$('.background-image-styling').draggable();
	$('.background-image-styling').resizable();


	//console.log('hello');
	//$('.design-layer-3').draggable();

	///////////////////////////////
	//   CHARACTER-JSON-OBJECT   //
	///////////////////////////////
	

	var character_OBJ = {
	    bamBam : 
		    { 
		    	first_name : 'BamBam',
	 			tv_show : 'Flinstones',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/bamBam_body.png',
						width: 323,
						height: 313,
						left: 121,
						top: 269
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 234,
							height: 199,
							left: 38,
							top: -168
	 					},
						bart : {
							width: 174,
							height: 202,
							left: 34,
							top: -179
						},
						elmo : {
							width: 227,
							height: 167,
							left: 13,
							top: -127
						},
						finn : {
							width: 134,
							height: 121,
							left: 58,
							top: -100
						},
						fred : {
							width: 165,
							height: 204,
							left: 47,
							top: -140
						},
						fox : {
							width: 168,
							height: 194,
							left: 40,
							top: -165
						},
						goku : {
							width: 303,
							height: 243,
							left: -37,
							top: -203
						},
						goofy : {
							width: 166,
							height: 247,
							left: 22,
							top: -171
						},
						helloKitty : {
							width: 255,
							height: 175,
							left: 5,
							top: -151
						},
						iceKing : {
							width: 199,
							height: 381,
							left: 32,
							top: -138
						},
						link : {
							width: 220,
							height: 202,
							left: -15,
							top: -165
						},
						marvin : {
							width: 168,
							height: 227,
							left: 47,
							top: -203
						},
						mickey : {
							width: 228,
							height: 206,
							left: 18,
							top: -163
						},
						mordecai : {
							width: 144,
							height: 194,
							left: 44,
							top: -173
						},
						pikachu : {
							width: 266,
							height: 162,
							left: -6,
							top: -142
						},
						samuraiJack : {
							width: 123,
							height: 202,
							left: 61,
							top: -134
						},
						scoobyDoo : {
							width: 100,
							height: 202,
							left: 68,
							top: -173
						},
						spaceGhost : {
							width: 130,
							height: 177,
							left: 46,
							top: -130
						},
						spongeBob : {
							width: 173,
							height: 152,
							left: 47,
							top: -131
						},
						yogiBear : {
							width: 168,
							height: 173,
							left: 35,
							top: -142
						}
	 				},
	 			eye : 
	 				{
						width: 80,
						height: 80,
						left: 91,
						top: -77
	 				},
	 			mouth : 
	 				{
						width: 50,
						height: 31,
						left: 110,
						top: -7
	 				},
	 			nose : 
	 				{
	 					width: 34,
						height: 20,
						left: 114,
						top: -35
	 				}
		    },
	    bart : 
	    	{ 
	    		first_name : 'Bart Simpson',
	 			tv_show : 'The Simpsons',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/bart_body.png',	
						width: 173,
						height: 329,
						left: 193,
						top: 277
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 234,
							height: 199,
							left: 1,
							top: -173
	 					},
						bart : {
							width: 161,
							height: 245,
							left: -19,
							top: -224
						},
						elmo : {
							width: 227,
							height: 167,
							left: -33,
							top: -134
						},
						finn : {
							width: 134,
							height: 121,
							left: 17,
							top: -97
						},
						fred : {
							width: 135,
							height: 164,
							left: 9,
							top: -115
						},
						fox : {
							width: 168,
							height: 194,
							left: 1,
							top: -166
						},
						goku : {
							width: 303,
							height: 243,
							left: -74,
							top: -200
						},
						goofy : {
							width: 166,
							height: 247,
							left: -22,
							top: -165
						},
						helloKitty : {
							width: 255,
							height: 175,
							left: -42,
							top: -153
						},
						iceKing : {
							width: 188,
							height: 395,
							left: -42,
							top: -124
						},
						link : {
							width: 220,
							height: 202,
							left: -51,
							top: -165
						},
						marvin : {
							width: 193,
							height: 257,
							left: 0,
							top: -224
						},
						mickey : {
							width: 249,
							height: 224,
							left: -45,
							top: -182
						},
						mordecai : {
							width: 144,
							height: 194,
							left: 6,
							top: -171
						},
						pikachu : {
							width: 288,
							height: 174,
							left: -54,
							top: -150
						},
						samuraiJack : {
							width: 123,
							height: 202,
							left: 18,
							top: -136
						},
						scoobyDoo : {
							width: 87,
							height: 202,
							left: 40,
							top: -155
						},
						spaceGhost : {
							width: 99,
							height: 177,
							left: 19,
							top: -105
						},
						spongeBob : {
							width: 173,
							height: 152,
							left: 1,
							top: -132
						},
						yogiBear : {
							width: 151,
							height: 156,
							left: 1,
							top: -126
						}
	 				},
	 			eye : 
	 				{
						width: 89,
						height: 75,
						left: 35,
						top: -99
	 				},
	 			mouth : 
	 				{
						width: 92,
						height: 65,
						left: 37,
						top: -41
	 				},
	 			nose : 
	 				{
	 					width: 43,
						height: 49,
						left: 59,
						top: -71
	 				}
	    	},
	    domo :
	    	{
	    		first_name : 'Domo',
	 			tv_show : 'Japan',
	 		 	body : 
	 				{
	 					url : 'assets/imageBin/character/body/domo_body.png',
						width: 415,
						height: 400,
						left: 57,
						top: 229
	 				},
	 			head : 
	 				{
	 					bamBam : {
							width: 392,
							height: 337,
							left: 72,
							top: -137
	 					},
						bart : {
							width: 142,
							height: 219,
							left: 126,
							top: -199
						},
						elmo : {
							width: 303,
							height: 222,
							left: 62,
							top: -33
						},
						finn : {
							width: 232,
							height: 221,
							left: 107,
							top: -99
						},
						fred : {
							width: 178,
							height: 213,
							left: 144,
							top: -149
						},
						fox : {
							width: 262,
							height: 305,
							left: 89,
							top: -153
						},
						goku : {
							width: 336,
							height: 276,
							left: 43,
							top: -196
						},
						goofy : {
							width: 207,
							height: 315,
							left: 88,
							top: -171
						},
						helloKitty : {
							width: 289,
							height: 205,
							left: 75,
							top: -62
						},
						iceKing : {
							width: 252,
							height: 478,
							left: 81,
							top: -174
						},
						link : {
							width: 337,
							height: 311,
							left: 16,
							top: -175
						},
						marvin : {
							width: 293,
							height: 403,
							left: 84,
							top: -201
						},
						mickey : {
							width: 329,
							height: 293,
							left: 57,
							top: -173
						},
						mordecai : {
							width: 253,
							height: 341,
							left: 87,
							top: -192
						},
						pikachu : {
							width: 442,
							height: 275,
							left: 5,
							top: -136
						},
						samuraiJack : {
							width: 155,
							height: 263,
							left: 140,
							top: -151
						},
						scoobyDoo : {
							width: 122,
							height: 243,
							left: 158,
							top: -180
						},
						spaceGhost : {
							width: 180,
							height: 254,
							left: 104,
							top: -180
						},
						spongeBob : {
							width: 299,
							height: 262,
							left: 72,
							top: -108
						},
						yogiBear : {
							width: 334,
							height: 331,
							left: 41,
							top: -194
						}
	 				},
	 			eye : 
	 				{
						width: 120,
	 					height: 80,
	 					left: -60,
	 					top: -40
	 				},
	 			mouth : 
	 				{
						width: 120,
	 					height: 80,
	 					left: -60,
	 					top: -40
	 				},
	 			nose : 
	 				{
	 					width: 80,
	 					height: 80,
	 					left: -40,
	 					top: -40
	 				}
	    	},
	    elmo :
	    	{
	    		first_name : 'Elmo',
	 			tv_show : 'Sesame Street',
	 		 	body : 
	 				{
	 					url : 'assets/imageBin/character/body/elmo_body.png',
						width: 347,
						height: 508,
						left: 86,
						top: 95
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 200,
							height: 200,
							left: 103,
							top: 10
	 					},
						bart : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						elmo : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						finn : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						fred : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						fox : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						goku : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						goofy : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						helloKitty : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						iceKing : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						link : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						marvin : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						mickey : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						mordecai : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						pikachu : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						samuraiJack : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						scoobyDoo : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						spaceGhost : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						spongeBob : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						},
						yogiBear : {
							width: 200,
							height: 200,
							left: 103,
							top: 10
						}
	 				},
	 			eye : 
	 				{
						width: 120,
						height: 80,
						left: 137,
						top: 47
	 				},
	 			mouth : 
	 				{
						width: 120,
						height: 80,
						left: 142,
						top: 109
	 				},
	 			nose : 
	 				{
	 					width: 48,
						height: 46,
						left: 163,
						top: 76
	 				}
	    	},
	    fox :
	    	{
	    		first_name : 'Fox McCloud',
	 			tv_show : 'Starfox',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/fox_body.png',
						width: 226,
						height: 450,
						left: 138,
						top: 190
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 200,
							height: 200,
							left: 15,
							top: -105
	 					},
						bart : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						elmo : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						finn : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						fred : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						fox : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						goku : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						goofy : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						helloKitty : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						iceKing : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						link : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						marvin : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						mickey : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						mordecai : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						pikachu : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						samuraiJack : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						scoobyDoo : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						spaceGhost : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						spongeBob : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						},
						yogiBear : {
							width: 200,
							height: 200,
							left: 15,
							top: -105
						}
	 				},
	 			eye : 
	 				{
						width: 62,
						height: 80,
						left: 81,
						top: -92
	 				},
	 			mouth : 
	 				{
						width: 73,
						height: 43,
						left: 74,
						top: -29
	 				},
	 			nose : 
	 				{
	 					width: 47,
						height: 34,
						left: 83,
						top: -49
	 				}
	    	},
	    finn :
	    	{
	    		first_name : 'Finn the Human',
	 			tv_show : 'Adventure Time',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/finn_body.png',
						width: 286,
						height: 369,
						left: 138,
						top: 230
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 182,
							height: 205,
							left: 25,
							top: -167
	 					},
						bart : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						elmo : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						finn : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						fred : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						fox : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						goku : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						goofy : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						helloKitty : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						iceKing : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						link : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						marvin : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						mickey : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						mordecai : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						pikachu : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						samuraiJack : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						scoobyDoo : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						spaceGhost : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						spongeBob : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						},
						yogiBear : {
							width: 182,
							height: 205,
							left: 25,
							top: -167
						}
	 				},
	 			eye : 
	 				{
						width: 94,
						height: 80,
						left: 61,
						top: -73.5
	 				},
	 			mouth : 
	 				{
						width: 59,
						height: 57,
						left: 76,
						top: -24.5
	 				},
	 			nose : 
	 				{
	 					width: 35,
						height: 46,
						left: 80,
						top: -48.5
	 				}
	    	},
	    fred :
	    	{
	    		first_name : 'Fred Flinstone',
	 			tv_show : 'The Flinstones',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/fred_body.png',
						width: 345,
						height: 450,
						left: 95,
						top: 178
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 209,
							height: 232,
							left: 78,
							top: -154
	 					},
						bart : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						elmo : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						finn : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						fred : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						fox : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						goku : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						goofy : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						helloKitty : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						iceKing : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						link : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						marvin : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						mickey : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						mordecai : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						pikachu : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						samuraiJack : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						scoobyDoo : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						spaceGhost : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						spongeBob : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						},
						yogiBear : {
							width: 209,
							height: 232,
							left: 78,
							top: -154
						}
	 				},
	 			eye : 
	 				{
						width: 82,
						height: 80,
						left: 139,
						top: -28
	 				},
	 			mouth : 
	 				{
						width: 120,
						height: 80,
						left: 121,
						top: 3
	 				},
	 			nose : 
	 				{
	 					width: 41,
						height: 46,
						left: 154,
						top: -3
	 				}
	    	},
	    goku :
	    	{
	    		first_name : 'Goku',
	 			tv_show : 'Dragonball Z',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/goku_body.png',
						width: 218,
						height: 508,
						left: 154,
						top: 122
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 150,
							height: 132,
							left: 38,
							top: -68
	 					},
						bart : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						elmo : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						finn : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						fred : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						fox : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						goku : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						goofy : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						helloKitty : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						iceKing : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						link : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						marvin : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						mickey : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						mordecai : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						pikachu : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						samuraiJack : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						scoobyDoo : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						spaceGhost : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						spongeBob : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						},
						yogiBear : {
							width: 150,
							height: 132,
							left: 38,
							top: -68
						}
	 				},
	 			eye : 
	 				{
						width: 60,
						height: 71,
						left: 81.5,
						top: -59
	 				},
	 			mouth : 
	 				{
						width: 44,
						height: 35,
						left: 89.5,
						top: 2
	 				},
	 			nose : 
	 				{
	 					width: 24,
						height: 24,
						left: 102.5,
						top: -7
	 				}
	    	},
	    goofy :
	    	{
	    		first_name : 'Goofy',
	 			tv_show : 'Disney',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/goofy_body.png',
						width: 411,
						height: 460,
						left: 72,
						top: 147
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 200,
							height: 200,
							left: 147,
							top: -41
	 					},
						bart : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						elmo : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						finn : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						fred : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						fox : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						goku : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						goofy : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						helloKitty : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						iceKing : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						link : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						marvin : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						mickey : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						mordecai : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						pikachu : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						samuraiJack : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						scoobyDoo : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						spaceGhost : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						spongeBob : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						},
						yogiBear : {
							width: 200,
							height: 200,
							left: 147,
							top: -41
						}
	 				},
	 			eye : 
	 				{
						width: 63,
						height: 63,
						left: 216,
						top: -14
	 				},
	 			mouth : 
	 				{
						width: 64,
						height: 50,
						left: 218,
						top: 51
	 				},
	 			nose : 
	 				{
	 					width: 39,
						height: 34,
						left: 231,
						top: 15
	 				}
	    	},
	    helloKitty :
	    	{
	    		first_name : 'Hello Kitty',
	 			tv_show : 'Sanio',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/helloKitty_body.png',
						width: 400,
						height: 272,
						left: 56,
						top: 246
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 292,
							height: 270,
							left: 48,
							top: -102
	 					},
						bart : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						elmo : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						finn : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						fred : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						fox : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						goku : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						goofy : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						helloKitty : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						iceKing : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						link : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						marvin : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						mickey : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						mordecai : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						pikachu : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						samuraiJack : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						scoobyDoo : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						spaceGhost : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						spongeBob : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						},
						yogiBear : {
							width: 292,
							height: 270,
							left: 48,
							top: -102
						}
	 				},
	 			eye : 
	 				{
						width: 100,
						height: 80,
						left: 153.5,
						top: -62
	 				},
	 			mouth : 
	 				{
						width: 120,
						height: 80,
						left: 143.5,
						top: -5
	 				},
	 			nose : 
	 				{
	 					width: 80,
						height: 80,
						left: 165.5,
						top: -62
	 				}
	    	},
	    iceKing :
	    	{
	    		first_name : 'Ice King',
	 			tv_show : 'Adventure Time',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/iceKing_body.png',
						width: 334,
						height: 366,
						left: 97,
						top: 234

	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 281,
							height: 450,
							left: 37,
							top: -163
	 					},
						bart : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						elmo : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						finn : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						fred : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						fox : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						goku : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						goofy : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						helloKitty : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						iceKing : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						link : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						marvin : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						mickey : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						mordecai : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						pikachu : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						samuraiJack : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						scoobyDoo : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						spaceGhost : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						spongeBob : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						},
						yogiBear : {
							width: 281,
							height: 450,
							left: 37,
							top: -163
						}
	 				},
	 			eye : 
	 				{
						width: 80,
						height: 80,
						left: 131,
						top: -77
	 				},
	 			mouth : 
	 				{
						width: 120,
						height: 80,
						left: 118,
						top: 3
	 				},
	 			nose : 
	 				{
	 					width: 62,
						height: 53,
						left: 126,
						top: -32
	 				}
	    	},
	    link :
	    	{
	    		first_name : 'Link',
	 			tv_show : 'Zelda',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/link_body.png',
	 					width: 330,
						height: 563,
						left: 93,
						top: 49
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 188,
							height: 194,
							left: 161,
							top: 111
	 					},
						bart : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						elmo : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						finn : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						fred : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						fox : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						goku : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						goofy : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						helloKitty : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						iceKing : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						link : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						marvin : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						mickey : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						mordecai : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						pikachu : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						samuraiJack : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						scoobyDoo : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						spaceGhost : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						spongeBob : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						},
						yogiBear : {
							width: 188,
							height: 194,
							left: 161,
							top: 111
						}
	 				},
	 			eye : 
	 				{
	 					width: 75,
						height: 80,
						left: 229.5,
						top: 189
	 				},
	 			mouth : 
	 				{
						width: 78,
						height: 67,
						left: 227,
						top: 238
	 				},
	 			nose : 
	 				{
	 					width: 43,
						height: 50,
						left: 247.5,
						top: 209
	 				}
	    	},
	    marvin :
	    	{
	    		first_name : 'Marvin the Martian',
	 			tv_show : 'Looney Tunes',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/marvin_body.png',
						width: 413,
						height: 195,
						left: 73,
						top: 306
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 150,
							height: 150,
							left: 151,
							top: -126
	 					},
						bart : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						elmo : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						finn : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						fred : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						fox : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						goku : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						goofy : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						helloKitty : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						iceKing : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						link : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						marvin : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						mickey : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						mordecai : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						pikachu : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						samuraiJack : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						scoobyDoo : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						spaceGhost : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						spongeBob : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						},
						yogiBear : {
							width: 150,
							height: 150,
							left: 151,
							top: -126
						}
	 				},
	 			eye : 
	 				{
	 					width: 62,
						height: 63,
						left: 168,
						top: -73.5
	 				},
	 			mouth : 
	 				{
						width: 51,
						height: 38,
						left: 175,
						top: -13.5
	 				},
	 			nose : 
	 				{
	 					width: 31,
						height: 30,
						left: 181,
						top: -40.5
	 				}
	    	},
	    mickey :
	    	{
	    		first_name : 'Mickey Mouse',
	 			tv_show : 'Disney',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/mickey_body.png',
	 					width: 404,
						height: 441,
						left: 68,
						top: 116
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 211,
							height: 200,
							left: 107,
							top: 40
	 					},
						bart : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						elmo : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						finn : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						fred : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						fox : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						goku : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						goofy : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						helloKitty : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						iceKing : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						link : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						marvin : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						mickey : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						mordecai : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						pikachu : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						samuraiJack : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						scoobyDoo : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						spaceGhost : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						spongeBob : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						},
						yogiBear : {
							width: 211,
							height: 200,
							left: 107,
							top: 40
						}
	 				},
	 			eye : 
	 				{
	 					width: 86,
						height: 80,
						left: 193,
						top: 106
	 				},
	 			mouth : 
	 				{
						width: 69,
						height: 49,
						left: 201,
						top: 154
	 				},
	 			nose : 
	 				{
	 					width: 46,
						height: 35,
						left: 211,
						top: 143
	 				}
	    	},
	    mordecai :
	    	{
	    		first_name : 'Mordecai',
	 			tv_show : 'Mordecai',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/mordecai_body.png',
						width: 177,
						height: 489,
						left: 201,
						top: 139
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 200,
							height: 200,
							left: -3,
							top: -93
	 					},
						bart : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						elmo : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						finn : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						fred : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						fox : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						goku : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						goofy : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						helloKitty : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						iceKing : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						link : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						marvin : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						mickey : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						mordecai : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						pikachu : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						samuraiJack : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						scoobyDoo : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						spaceGhost : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						spongeBob : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						},
						yogiBear : {
							width: 200,
							height: 200,
							left: -3,
							top: -93
						}
	 				},
	 			eye : 
	 				{
						width: 75,
						height: 59,
						left: 30,
						top: -67
	 				},
	 			mouth : 
	 				{
						width: 50,
						height: 27,
						left: 38,
						top: -18
	 				},
	 			nose : 
	 				{
	 					width: 37,
						height: 31,
						left: 40,
						top: -37
	 				}
	    	},
	    pikachu :
	    	{
	    		first_name : 'Pikachu',
	 			tv_show : 'Pokemon',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/pikachu_body.png',
						width: 341,
						height: 229,
						left: 104,
						top: 302
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 300,
							height: 300,
							left: 13,
							top: -206
	 					},
						bart : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						elmo : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						finn : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						fred : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						fox : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						goku : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						goofy : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						helloKitty : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						iceKing : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						link : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						marvin : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						mickey : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						mordecai : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						pikachu : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						samuraiJack : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						scoobyDoo : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						spaceGhost : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						spongeBob : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						},
						yogiBear : {
							width: 300,
							height: 300,
							left: 13,
							top: -206
						}
	 				},
	 			eye : 
	 				{
						width: 120,
						height: 80,
						left: 120,
						top: -165
	 				},
	 			mouth : 
	 				{
						width: 120,
						height: 80,
						left: 118,
						top: -62
	 				},
	 			nose : 
	 				{
	 					width: 80,
						height: 80,
						left: 134.5,
						top: -100
	 				}
	    	},
	    samuraiJack :
	    	{
	    		first_name : 'Samurai Jack',
	 			tv_show : 'Samurai Jack',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/samuraiJack_body.png',
						width: 477,
						height: 400,
						left: 37,
						top: 185
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 200,
							height: 200,
							left: 254,
							top: -48
	 					},
						bart : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						elmo : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						finn : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						fred : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						fox : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						goku : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						goofy : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						helloKitty : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						iceKing : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						link : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						marvin : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						mickey : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						mordecai : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						pikachu : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						samuraiJack : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						scoobyDoo : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						spaceGhost : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						spongeBob : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						},
						yogiBear : {
							width: 200,
							height: 200,
							left: 254,
							top: -48
						}
	 				},
	 			eye : 
	 				{
						width: 61,
						height: 47,
						left: 332,
						top: -20.5
	 				},
	 			mouth : 
	 				{
						width: 70,
						height: 42,
						left: 327,
						top: 5.5
	 				},
	 			nose : 
	 				{
						width: 43,
						height: 41,
						left: 340,
						top: -9.5
	 				}
	    	},
	    scoobyDoo :
	    	{
	    		first_name : 'Scooby Doo',
	 			tv_show : 'Scooby Doo',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/scoobyDoo_body.png',
						width: 331,
						height: 400,
						left: 132,
						top: 222
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 250,
							height: 250,
							left: -42,
							top: -148
	 					},
						bart : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						elmo : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						finn : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						fred : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						fox : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						goku : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						goofy : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						helloKitty : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						iceKing : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						link : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						marvin : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						mickey : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						mordecai : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						pikachu : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						samuraiJack : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						scoobyDoo : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						spaceGhost : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						spongeBob : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						},
						yogiBear : {
							width: 250,
							height: 250,
							left: -42,
							top: -148
						}
	 				},
	 			eye : 
	 				{
						width: 100,
						height: 80,
						left: 32,
						top: -98
	 				},
	 			mouth : 
	 				{
						width: 120,
						height: 80,
						left: 24,
						top: -40
	 				},
	 			nose : 
	 				{
	 					width: 54,
						height: 49,
						left: 44,
						top: -77
	 				}
	    	},
	    spaceGhost :
	    	{
	    		first_name : 'Space Ghost',
	 			tv_show : 'Space Ghost',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/spaceGhost_body.png',
						width: 311,
						height: 539,
						left: 116,
						top: 76
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 150,
							height: 152,
							left: 115,
							top: -30
	 					},
						bart : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						elmo : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						finn : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						fred : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						fox : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						goku : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						goofy : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						helloKitty : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						iceKing : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						link : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						marvin : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						mickey : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						mordecai : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						pikachu : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						samuraiJack : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						scoobyDoo : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						spaceGhost : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						spongeBob : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						},
						yogiBear : {
							width: 150,
							height: 152,
							left: 115,
							top: -30
						}
	 				},
	 			eye : 
	 				{
						width: 56,
						height: 48,
						left: 152,
						top: 26
	 				},
	 			mouth : 
	 				{
						width: 53,
						height: 29,
						left: 157,
						top: 51
	 				},
	 			nose : 
	 				{
	 					width: 20,
						height: 28,
						left: 170,
						top: 37
	 				}
	    	},
	    spongeBob :
	    	{
	    		first_name : 'Spongebob Squarepants',
	 			tv_show : 'Spongebob Squarepants',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/spongeBob_body.png',
	 					width: 396,
						height: 326,
						left: 43,
						top: 225
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 252,
							height: 291,
							left: 67,
							top: -184
	 					},
						bart : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						elmo : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						finn : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						fred : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						fox : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						goku : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						goofy : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						helloKitty : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						iceKing : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						link : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						marvin : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						mickey : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						mordecai : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						pikachu : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						samuraiJack : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						scoobyDoo : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						spaceGhost : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						spongeBob : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						},
						yogiBear : {
							width: 252,
							height: 291,
							left: 67,
							top: -184
						}
	 				},
	 			eye : 
	 				{
						width: 120,
						height: 80,
						left: 135.5,
						top: -86
	 				},
	 			mouth : 
	 				{
						width: 120,
						height: 80,
						left: 140.5,
						top: -19
	 				},
	 			nose : 
	 				{
	 					width: 80,
						height: 80,
						left: 152.5,
						top: -63
	 				}
	    	},
	    yogiBear :
	    	{
	    		first_name : 'Yogi Bear',
	 			tv_show : 'Hannah Barbera',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/yogiBear_body.png',
						width: 322,
						height: 503,
						left: 108,
						top: 61
	 				},
	 			head : 
	 				{
	 					bamBam : {
	 						width: 200,
							height: 200,
							left: 59,
							top: -21
	 					},
						bart : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						elmo : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						finn : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						fred : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						fox : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						goku : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						goofy : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						helloKitty : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						iceKing : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						link : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						marvin : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						mickey : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						mordecai : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						pikachu : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						samuraiJack : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						scoobyDoo : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						spaceGhost : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						spongeBob : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						},
						yogiBear : {
							width: 200,
							height: 200,
							left: 59,
							top: -21
						}
	 				},
	 			eye : 
	 				{
	 					width: 89,
						height: 61,
						left: 92,
						top: 46.5
	 				},
	 			mouth : 
	 				{
						width: 78,
						height: 55,
						left: 97,
						top: 96.5
	 				},
	 			nose : 
	 				{
	 					width: 39,
						height: 31,
						left: 111,
						top: 81.5
	 				}
	    	}	
	};


	//console.log(character_OBJ.bamBam.firstname);


	//////////////////
	//   PRESETS    //
	//////////////////

	designButton.addClass('canvas-tool-button-active canvas-design-button-active');
	designButton.removeClass('canvas-design-button');

});