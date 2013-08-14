// A $ (document).ready block
$(document).ready(function() {

	console.log("Character Maker Tutorial!");

	// Check if jQuery and jQueryUI have loaded
	if (jQuery) {  
		console.log("jQuery is loaded"); 
	} else {
		console.log("jQuery is not loaded");
	}

var logoHeader = $('.logo-header');

var logoArray = [];

// CONSTRUCTORS
function mb_logo(imgSrc, width) {
	this.width = width;
	this.imgSrc = imgSrc;
}

var mb_logos_width = [
]

var mb_logos_imgSrc = [
	"MaybeLegal_Logos/MaybeLegal_CartoonNetwork.png",
	"MaybeLegal_Logos/MaybeLegal_Channel.png",
	"MaybeLegal_Logos/MaybeLegal_Cocacola.png",
	"MaybeLegal_Logos/MaybeLegal_Demonoid.png",
	"MaybeLegal_Logos/MaybeLegal_Disney.png",
	"MaybeLegal_Logos/MaybeLegal_DunkinDonuts.png",
	"MaybeLegal_Logos/MaybeLegal_Ebay.png",
	"MaybeLegal_Logos/MaybeLegal_Hermes.png",
	"MaybeLegal_Logos/MaybeLegal_Hollister.png",
	"MaybeLegal_Logos/MaybeLegal_IBM.png",
	"MaybeLegal_Logos/MaybeLegal_LouisVuiton.png",
	"MaybeLegal_Logos/MaybeLegal_Microsoft.png",
	"MaybeLegal_Logos/MaybeLegal_Monster.png",
	"MaybeLegal_Logos/MaybeLegal_MTV.png",
	"MaybeLegal_Logos/MaybeLegal_Nickelodeon.png",
	"MaybeLegal_Logos/MaybeLegal_PirateBay.png",
	"MaybeLegal_Logos/MaybeLegal_Puma.png",
	"MaybeLegal_Logos/MaybeLegal_UrbanOutfitters.png",
]

for (i = 0; i < mb_logos_imgSrc.length; i++) {
	var logo = new mb_logo(mb_logos_imgSrc[i], "250px");
	logoArray.push(logo);
}

console.log(logoArray);

// Select a random item from each array list
var random_mb_logo = logoArray[Math.floor(Math.random()* 18)];

//console.log(random_mb_logo.imgSrc);

//add random logo to the dom

//console.log(logoHeader.attr('src', )
	logoHeader.attr('src', random_mb_logo.imgSrc);

		
});