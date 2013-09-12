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
		"assets/imageBin/animal/animal_svg/mozilla-firefox-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/mgm-grand-black-vector.svg",
		"assets/imageBin/animal/animal_svg/mortal-kombat-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/playboy-magazine-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/Metro_Goldwyn_Mayer.svg",
		"assets/imageBin/animal/animal_svg/Jagermeister [Converted].svg",
		"assets/imageBin/animal/animal_svg/Penguin_Group.svg",
		"assets/imageBin/animal/animal_svg/Greyhound_Bus_Lines.svg",
		"assets/imageBin/animal/animal_svg/ING_Direct.svg",
		"assets/imageBin/animal/animal_svg/Democratic_Party.svg",
		"assets/imageBin/animal/animal_svg/MTV2.eps.svg",
		"assets/imageBin/animal/animal_svg/Emporio_Armani [Converted].eps.svg",
		"assets/imageBin/animal/animal_svg/msn---microsoft-network-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/la-vie-du-cote-bon-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/hooters-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/ferrari-emblem-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/fox-moto-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/ecko-unltd-(.eps)-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/crocs-shoes-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/new-twitter-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/chicago-bulls-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/barclays.svg",
		"assets/imageBin/animal/animal_svg/english-premier-league-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/John_Deere.svg",
		"assets/imageBin/animal/animal_svg/dodge_1993.svg",
		"assets/imageBin/animal/animal_svg/Mustang.svg",
		"assets/imageBin/animal/animal_svg/Lacoste.eps.svg",
		"assets/imageBin/animal/animal_svg/Peugeot.svg",
		"assets/imageBin/animal/animal_svg/logo-lamborghini-3d.svg",
		"assets/imageBin/animal/animal_svg/Merrill_Lynch.eps.svg",
		"assets/imageBin/animal/animal_svg/Le_Coq_Sportif [Converted].eps.svg",
		"assets/imageBin/animal/animal_svg/Dove.svg",
		"assets/imageBin/animal/animal_svg/miami-dolphins-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/evernote-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/linux-penguin-logo.svg",
		"assets/imageBin/animal/animal_svg/polar-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/POLO_-_RALPH_LAUREN.eps.svg",
		"assets/imageBin/animal/animal_svg/porsche-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/puma-se--eps--vector-logo.svg",
		"assets/imageBin/animal/animal_svg/qantas_brandmark_vertical_c.svg",
		"assets/imageBin/animal/animal_svg/RCA.eps.svg",
		"assets/imageBin/animal/animal_svg/red_bull_eps [Converted].eps.svg",
		"assets/imageBin/animal/animal_svg/Republican_correct.svg",
		"assets/imageBin/animal/animal_svg/saab-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/Sea_World.eps.svg",
		"assets/imageBin/animal/animal_svg/Sirius.eps.svg",
		"assets/imageBin/animal/animal_svg/spiderman-3-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/swarovski-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/tecate-black-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/thundercats-emblem-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/united-states-postal-service-usps-logo.eps.svg",
		"assets/imageBin/animal/animal_svg/world-wildlife-fund--eps--vector-logo.svg",
		"assets/imageBin/animal/animal_svg/zynga-logo.eps.svg",
		"assets/imageBin/animal/animal_svg/Burberry.svg",
		"assets/imageBin/animal/animal_svg/buffalo-wild-wings-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/buffalo-bills-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/browning-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/bronco-de-denver-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/batman-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/bass-pro-shops-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/bacardi-mojito-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/baby-phat-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/b.a.s.s_animal.svg",
		"assets/imageBin/animal/animal_svg/anheuser-busch-logo-vector.svg",
		"assets/imageBin/animal/animal_svg/american-eagle-outfitters-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/American_Airlines.eps.svg",
		"assets/imageBin/animal/animal_svg/Alfa_Romeo.svg",
		"assets/imageBin/animal/animal_svg/aflac-vector-logo.svg",
		"assets/imageBin/animal/animal_svg/Abercrombie_and_Fitch.svg",
		"assets/imageBin/animal/animal_svg/a-bathing-ape-vector-logo.svg"
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

	var imageArray9 = [
		"assets/imageBin/technology/technology_svg/Microsoft_Windows_XP [Converted].eps.svg",
		"assets/imageBin/technology/technology_svg/America_Online [Converted].svg",
		"assets/imageBin/technology/technology_svg/Mac_OS.svg",
		"assets/imageBin/technology/technology_svg/Wikipedia.svg",
		"assets/imageBin/technology/technology_svg/radioshack-logo-vector.svg",
		"assets/imageBin/technology/technology_svg/EA_Sports.svg",
		"assets/imageBin/technology/technology_svg/amtrak-vector-logo.svg",
		"assets/imageBin/technology/technology_svg/Internet_Explorer_4.svg",
		"assets/imageBin/technology/technology_svg/kickstarter-logo-vector.svg",
		"assets/imageBin/technology/technology_svg/Opera_O.svg",
		"assets/imageBin/technology/technology_svg/PlayStation.svg",
		"assets/imageBin/technology/technology_svg/thumbsupfacebooklikesymbol.svg",
		"assets/imageBin/technology/technology_svg/WiFi.svg",
		"assets/imageBin/technology/technology_svg/Android.svg",
		"assets/imageBin/technology/technology_svg/DVD_Video_Audio.svg"
	];


	var imageArray10 = [];
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
						var parsed_clicked_spriteImage = clicked_spriteImage.substr(136).substr(0, clicked_spriteImage.length-137);
							console.log(parsed_clicked_spriteImage);	
						
						var design_canvas_dataPath = 'assets/imageBin/completed_designs/';
						design_layer_1.css({'background-image': 'url("' + design_canvas_dataPath + parsed_clicked_spriteImage + '")'});

						console.log('clicked_mode: design-mode');
						break;
					case 'product-mode':
						console.log('clicked_mode: product-mode');
						
						var clicked_spriteImage = $(this).css('background-image').toString();
						var parsed_clicked_spriteImage = clicked_spriteImage.substr(161).substr(0, clicked_spriteImage.length-166);				
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
					'fox',
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
				var characterName_Head = characterNameArray[Math.floor(Math.random()* characterNameArray.length)];

					var eye_image = eyeArray[Math.floor(Math.random()* eyeArray.length)];
					var head_image = headArray[Math.floor(Math.random()* headArray.length)];
					var accessory_image = accessoryArray[Math.floor(Math.random()* 1)];
					var mouth_image = mouthArray[Math.floor(Math.random()* 8)];
					var nose_image = noseArray[Math.floor(Math.random()* 6)];
					var body_image = bodyArray[Math.floor(Math.random()* 8)];
					//logo
						//var logo_image = logoArray[Math.floor(Math.random()* 10)];
					//background
						//var background_image = backgroundArray[Math.floor(Math.random()* 3)];

				console.log(characterName);

	//Select the image templates from the dom tree
	// and replace with random assets
			
			// append body
			var layer1 = $(".design-layer-2");
			layer1.css({
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
					'width': character_OBJ[characterName].head.width + 'px',
					'height': character_OBJ[characterName].head.height + 'px',
					'left': character_OBJ[characterName].head.left + 'px',
					'top': character_OBJ[characterName].head.top + 'px'
					//'top': character_OBJ[characterName].head.top + 'px',

				});

			// // append eye
			// var layer3 = $(".design-layer-4");
			// layer3.css({
			// 	'background-image': 'url("' + eye_image + '")',
			// 	'width' : character_OBJ[characterName].eye.width,
			// 	'height': character_OBJ[characterName].eye.height,
			// 	'margin-left': character_OBJ[characterName].eye.margin_left,
			// 	'margin-top': character_OBJ[characterName].eye.margin_top 
			// });


			// // append mouth
			// var layer4 = $(".design-layer-5");
			// layer4.css({
			// 	'background-image': 'url("' + mouth_image + '")',
			// 	'width' : character_OBJ[characterName].mouth.width,
			// 	'height': character_OBJ[characterName].mouth.height,
			// 	'margin-left': character_OBJ[characterName].mouth.margin_left,
			// 	'margin-top': character_OBJ[characterName].mouth.margin_top 
			// });


			// // append nose
			// var layer5 = $(".design-layer-6");
			// layer5.css({
			// 	'background-image': 'url("' + nose_image + '")',
			// 	'width' : character_OBJ[characterName].nose.width,
			// 	'height': character_OBJ[characterName].nose.height,
			// 	'margin-left': character_OBJ[characterName].nose.margin_left,
			// 	'margin-top': character_OBJ[characterName].nose.margin_top
			// });
			
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
	
	// $('.design-layer-3').draggable( function () {
	// 	console.log('draggable');
	// });
	
	$(".design-layer-2" ).click( function() {
		console.log('click product-styling');	
	});

	var design = $('.design-layer-2');

	design.draggable();
	design.resizable();
	$(".design-layer-3" ).draggable();
	$(".design-layer-3" ).resizable();


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
						width: 350,
						height: 337,
						left: 98,
						top: 246
	 				},
	 			head : 
	 				{
	 					width: 168,
						height: 202,
						left: 58,
						top: -117
	 				},
	 			eye : 
	 				{
						width: 80,
	 					height: 80,
	 					left: -80,
	 					top: 0
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
	    bart : 
	    	{ 
	    		first_name : 'Bart Simpson',
	 			tv_show : 'The Simpsons',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/bart_body.png',	
						width: 199,
						height: 378,
						left: 158,
						top: 213
	 				},
	 			head : 
	 				{
	 					width: 235,
						height: 216,
						left: -34,
						top: -133
	 				},
	 			eye : 
	 				{
						width: 100,
	 					height: 80,
	 					left: -70,
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
	    domo :
	    	{
	    		first_name : 'Domo',
	 			tv_show : 'Japan',
	 		 	body : 
	 				{
	 					url : 'assets/imageBin/character/body/domo_body.png',
						width: 415,
						height: 400,
						left: 40,
						top: 186
	 				},
	 			head : 
	 				{
	 					width: 200,
						height: 200,
						left: 116,
						top: -44
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
	 					width: 200,
						height: 200,
						left: 103,
						top: 10
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
	 					width: 200,
						height: 200,
						left: 15,
						top: -105
	 				},
	 			eye : 
	 				{
						width: 100,
	 					height: 80,
	 					left: -80,
	 					top: 0
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
	    finn :
	    	{
	    		first_name : 'Finn the Human',
	 			tv_show : 'Adventure Time',
	 			body : 
	 				{
	 					url : 'assets/imageBin/character/body/finn_body.png',
						width: 349,
						height: 456,
						left: 106,
						top: 166
	 				},
	 			head : 
	 				{
	 					width: 262,
						height: 250,
						left: 45,
						top: -133
	 				},
	 			eye : 
	 				{
						width: 100,
	 					height: 80,
	 					left: -30,
	 					top: -50
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
	 					width: 209,
						height: 232,
						left: 78,
						top: -154
	 				},
	 			eye : 
	 				{
						width: 80,
	 					height: 80,
	 					left: -80,
	 					top: -70
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
	 					width: 159,
						height: 140,
						left: 31,
						top: -69

	 				},
	 			eye : 
	 				{
						width: 100,
	 					height: 80,
	 					left: -50,
	 					top: 60
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
	 					width: 200,
						height: 200,
						left: 147,
						top: -41
	 				},
	 			eye : 
	 				{
						width: 80,
	 					height: 80,
	 					left: -10,
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
	 					width: 292,
						height: 270,
						left: 48,
						top: -102
	 				},
	 			eye : 
	 				{
						width: 100,
	 					height: 80,
	 					left: -50,
	 					top: -60
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
	 					width: 281,
						height: 450,
						left: 37,
						top: -163
	 				},
	 			eye : 
	 				{
						width: 80,
	 					height: 80,
	 					left: -60,
	 					top: -70
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
	 					width: 188,
						height: 194,
						left: 161,
						top: 111
	 				},
	 			eye : 
	 				{
	 					width: 100,
	 					height: 80,
	 					left: 10,
	 					top: 0
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
	 					width: 150,
						height: 150,
						left: 151,
						top: -126
	 				},
	 			eye : 
	 				{
	 					width: 120,
	 					height: 80,
	 					left: -20,
	 					top: 40
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
	 					width: 211,
						height: 200,
						left: 107,
						top: 40
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
	 					width: 200,
						height: 200,
						left: -3,
						top: -93
	 				},
	 			eye : 
	 				{
						width: 80,
	 					height: 80,
	 					left: -60,
	 					top: -20
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
	 					width: 300,
						height: 300,
						left: 13,
						top: -206
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
	 					width: 200,
						height: 200,
						left: 254,
						top: -48,
	 				},
	 			eye : 
	 				{
						width: 100,
	 					height: 80,
	 					left: -70,
	 					top: -20
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
	 					width: 250,
						height: 250,
						left: -42,
						top: -148
	 				},
	 			eye : 
	 				{
						width: 100,
	 					height: 80,
	 					left: -80,
	 					top: -110
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
	 					width: 150,
						height: 152,
						left: 115,
						top: -30
	 				},
	 			eye : 
	 				{
						width: 80,
	 					height: 80,
	 					left: -80,
	 					top: -60
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
	 					width: 252,
						height: 291,
						left: 67,
						top: -184
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
	 					width: 200,
						height: 200,
						left: 59,
						top: -21
	 				},
	 			eye : 
	 				{
	 					width: 80,
	 					height: 80,
	 					left: -40,
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
	    	}	
	};


	//console.log(character_OBJ.bamBam.firstname);


	//////////////////
	//   PRESETS    //
	//////////////////

	designButton.addClass('canvas-tool-button-active canvas-design-button-active');
	designButton.removeClass('canvas-design-button');

});