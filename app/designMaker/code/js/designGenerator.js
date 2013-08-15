// A $ (document).ready block
$(document).ready(function() {

	console.log("designGenerator!");

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

		/* -- CHARACTER -- */

			//Eye array
			var eyeArray = [
				"../../assets/character/eye/hellokitty_eye.png",
				"../../assets/character/eye/mickey_eye.png",
				"../../assets/character/eye/spongebob_eye.png",
				"../../assets/character/eye/elmo_eye.png",
				"../../assets/character/eye/goku_eye.png",
				"../../assets/character/eye/mario_eye.png",
				"../../assets/character/eye/pikachu_eye.png",
				"../../assets/character/eye/domo_eye.png"

			]

			//Head array
			var headArray = [
				"../../assets/character/head/mickey_head.png",
				"../../assets/character/head/spongebob_head.png",
				"../../assets/character/head/hellokitty_head.png",
				"../../assets/character/head/goku_head.png",
				"../../assets/character/head/elmo_head.png",
				"../../assets/character/head/pikachu_head.png"


			]

			//Hair array
			var hairArray = [
			]

			//Accesory array
			var accessoryArray = [
				"../../assets/character/accessory/hellokitty_accessory.png"
			]

			//Mouth array
			var mouthArray = [
				"../../assets/character/mouth/mickey_mouth.png",
				"../../assets/character/mouth/spongebob_mouth.png",
				"../../assets/character/mouth/elmo_mouth.png",
				"../../assets/character/mouth/goku_mouth.png",
				"../../assets/character/mouth/domo_mouth.png",
				"../../assets/character/mouth/fin_mouth.png",
				"../../assets/character/mouth/pikachu_mouth.png",
				"../../assets/character/mouth/mario_mouth.png"
			]

			//Nose array 
			var noseArray = [
				"../../assets/character/nose/mickey_nose.png",
				"../../assets/character/nose/hellokitty_nose.png",
				"../../assets/character/nose/elmo_nose.png",
				"../../assets/character/nose/goku_nose.png",
				"../../assets/character/nose/mario_nose.png",
				"../../assets/character/nose/pikachu_nose.png"
			]

			//Body array 
			var bodyArray = [
				"../../assets/character/body/domo_body.png",
				"../../assets/character/body/mario_body.png",
				"../../assets/character/body/goku_body.png",
				"../../assets/character/body/elmo_body.png",
				"../../assets/character/body/hellokitty_body.png",
				"../../assets/character/body/mickey_body.png",
				"../../assets/character/body/pikachu_body.png",
				"../../assets/character/body/spongebob_body.png"
			]

	/* -- LOGO -- */
			//Logo array
			var logoArray = [
			]

	/* -- BACKGROUND -- */
			//Background array
			var backgroundArray = [
			"../../assets/background/commedegarcons_background.jpg",
			"../../assets/background/southpark_background.jpg"
			]


	//Select a random asset from each array list
			//character
				var eye_image = eyeArray[Math.floor(Math.random()* 8)];
				var head_image = headArray[Math.floor(Math.random()* 6)];
				var accessory_image = accessoryArray[Math.floor(Math.random()* 1)];
				var mouth_image = mouthArray[Math.floor(Math.random()* 8)];
				var nose_image = noseArray[Math.floor(Math.random()* 6)];
				var body_image = bodyArray[Math.floor(Math.random()* 8)];
			//logo
				//var logo_image = logoArray[Math.floor(Math.random()* 10)];
			//background
				var background_image = backgroundArray[Math.floor(Math.random()* 2)];



	//Select the image templates from the dom tree
	// and replace with random asset

			// append eye
			var layer1 = $(".layer1");
			layer1.attr("src", eye_image);

			// append face
			var layer2 = $(".layer2");
			layer2.attr("src", head_image);

			// append hair
			var layer3 = $(".layer3");

			// append accessory
			var layer4 = $(".layer4");
			layer4.attr("src", accessory_image);

			// append ear
			var layer5 = $(".layer5");

			// append mouth
			var layer6 = $(".layer6");
			layer6.attr("src", mouth_image);


			// append nose
			var layer7 = $(".layer7");
			layer7.attr("src", nose_image);

			// append body
			var layer8 = $(".layer8");
			layer8.attr("src", body_image);
			//layer7.src = body_image;

			// append logo
			var layer9 = $(".layer9");
			//layer9.src = logo_image;

			//append background
			var layer10 = $(".layer10");
			layer10.attr("src", background_image);
			//layer10.src = background_image;
});










