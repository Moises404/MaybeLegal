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
		var sectionWidth = 500;
		var sectionHeight = 500;
		var subSectionWidth = 51;
		var subSectionHeight = 51;

	//values to keep track what row we're on
		var row_section = 0;
		var row_subSection = 0;
		var maxColumns_section = 4;
		var maxColumns_subSection = 9;
		var total = 16;
		var padding_section = 10;
		var padding_subSection = 3;

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
	var imageArray = [
	"assets/imageBin/logos_SVG/7-eleven.svg",
"assets/imageBin/logos_SVG/AAA_2.svg",
"assets/imageBin/logos_SVG/ABC.svg",
"assets/imageBin/logos_SVG/ABH.svg",
"assets/imageBin/logos_SVG/AEON.svg",
"assets/imageBin/logos_SVG/ASMI.svg",
"assets/imageBin/logos_SVG/Accenture.svg",
"assets/imageBin/logos_SVG/Ace_Hardware.svg",
"assets/imageBin/logos_SVG/Acer.svg",
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
"assets/imageBin/logos_SVG/Conni_Pizzas.svg",
"assets/imageBin/logos_SVG/Continental_Airlines_BusinessFirst.svg",
"assets/imageBin/logos_SVG/Converse.svg",
"assets/imageBin/logos_SVG/Coronel_Mostarda.svg",
"assets/imageBin/logos_SVG/Corto_de_Malta.svg",
"assets/imageBin/logos_SVG/Cote_d_Or.svg",
"assets/imageBin/logos_SVG/Credit_Suisse.svg",
"assets/imageBin/logos_SVG/Crem_Helado.svg",
"assets/imageBin/logos_SVG/Cub_Foods.svg",
"assets/imageBin/logos_SVG/DIET_MOUNTAIN_DEW.svg",
"assets/imageBin/logos_SVG/DIET_PEPSI.svg",
"assets/imageBin/logos_SVG/DVD_Video_Audio.svg",
"assets/imageBin/logos_SVG/D__Doces.svg",
"assets/imageBin/logos_SVG/Daim.svg",
"assets/imageBin/logos_SVG/Danone_2.svg",
"assets/imageBin/logos_SVG/Danone_Danito.svg",
"assets/imageBin/logos_SVG/Dare(1).svg",
"assets/imageBin/logos_SVG/Dare(2).svg",
"assets/imageBin/logos_SVG/Dawtona.svg",
"assets/imageBin/logos_SVG/DePaul_Blue_Demons273.svg",
"assets/imageBin/logos_SVG/De_Oya_Cocina.svg",
"assets/imageBin/logos_SVG/Dean_Foods.svg",
"assets/imageBin/logos_SVG/DelValle_Classico.svg",
"assets/imageBin/logos_SVG/DelValle_light.svg",
"assets/imageBin/logos_SVG/Delicia.svg",
"assets/imageBin/logos_SVG/Delicyu_s.svg",
"assets/imageBin/logos_SVG/Detroit_Tigers300.svg",
"assets/imageBin/logos_SVG/Detroit_Tigers302.svg",
"assets/imageBin/logos_SVG/Dickens_Cafe.svg",
"assets/imageBin/logos_SVG/Divino_Mestre.svg",
"assets/imageBin/logos_SVG/Divino_Sabor.svg",
"assets/imageBin/logos_SVG/Doce_Desfrute.svg",
"assets/imageBin/logos_SVG/Dodge_Truck.svg",
"assets/imageBin/logos_SVG/Dolce_Pasta_Italiana.svg",
"assets/imageBin/logos_SVG/Dolce__Gabbana33.svg",
"assets/imageBin/logos_SVG/Domashnya_Kuhnya(2).svg",
"assets/imageBin/logos_SVG/Domino_s_Pizza(1).svg",
"assets/imageBin/logos_SVG/Domino_s_Pizza(3).svg",
"assets/imageBin/logos_SVG/Don_Bettino.svg",
"assets/imageBin/logos_SVG/Donatos_Pizza.svg",
"assets/imageBin/logos_SVG/Dragon_Ball_Z.svg",
"assets/imageBin/logos_SVG/Dragon_Optical.svg",
"assets/imageBin/logos_SVG/Dragus.svg",
"assets/imageBin/logos_SVG/EA_Sports.svg",
"assets/imageBin/logos_SVG/EA_Sports_Big.svg",
"assets/imageBin/logos_SVG/EFR.svg",
"assets/imageBin/logos_SVG/Eisberg.svg",
"assets/imageBin/logos_SVG/El_Fogoncito.svg",
"assets/imageBin/logos_SVG/El_Globo.svg",
"assets/imageBin/logos_SVG/Eleven_Beach_Club.svg",
"assets/imageBin/logos_SVG/Elite.svg",
"assets/imageBin/logos_SVG/FORMIGA.svg",
"assets/imageBin/logos_SVG/Fannie_Mae.svg",
"assets/imageBin/logos_SVG/Ferrari.svg",
"assets/imageBin/logos_SVG/Ferrari170.svg",
"assets/imageBin/logos_SVG/Ferrari_Ufficiale.svg",
"assets/imageBin/logos_SVG/Fiesta_Mart.svg",
"assets/imageBin/logos_SVG/Flanby.svg",
"assets/imageBin/logos_SVG/Fleischmann_s.svg",
"assets/imageBin/logos_SVG/Florida_Gators.svg",
"assets/imageBin/logos_SVG/Florina.svg",
"assets/imageBin/logos_SVG/Food__and__Friends.svg",
"assets/imageBin/logos_SVG/Ford.svg",
"assets/imageBin/logos_SVG/Ford50.svg",
"assets/imageBin/logos_SVG/Fornetti.svg",
"assets/imageBin/logos_SVG/Foster_Farms.svg",
"assets/imageBin/logos_SVG/Fox_Sports.svg",
"assets/imageBin/logos_SVG/Fresno_Falcons.svg",
"assets/imageBin/logos_SVG/Frito-Lay.svg",
"assets/imageBin/logos_SVG/Fritolay.svg",
"assets/imageBin/logos_SVG/Gadoua.svg",
"assets/imageBin/logos_SVG/Gatorade.svg",
"assets/imageBin/logos_SVG/Giraffas.svg",
"assets/imageBin/logos_SVG/Gold_Ekmek.svg",
"assets/imageBin/logos_SVG/Goldman_Sachs.svg",
"assets/imageBin/logos_SVG/Gorila.svg",
"assets/imageBin/logos_SVG/Gorki_List(1).svg",
"assets/imageBin/logos_SVG/Granja_el_Pato.svg",
"assets/imageBin/logos_SVG/Grill_Fish.svg",
"assets/imageBin/logos_SVG/GuaraVital(1).svg",
"assets/imageBin/logos_SVG/HRG_Pastas.svg",
"assets/imageBin/logos_SVG/HRUStepka(1).svg",
"assets/imageBin/logos_SVG/Habana_Frapuchinos.svg",
"assets/imageBin/logos_SVG/Habib_s.svg",
"assets/imageBin/logos_SVG/Hain.svg",
"assets/imageBin/logos_SVG/Happy_Joe_s.svg",
"assets/imageBin/logos_SVG/Hawaiian_Airlines163.svg",
"assets/imageBin/logos_SVG/Hipercard.svg",
"assets/imageBin/logos_SVG/Hleb.svg",
"assets/imageBin/logos_SVG/Hochland.svg",
"assets/imageBin/logos_SVG/Honda_Automobiles72.svg",
"assets/imageBin/logos_SVG/Hooters.svg",
"assets/imageBin/logos_SVG/Hoover_2.svg",
"assets/imageBin/logos_SVG/Hormel_Foods.svg",
"assets/imageBin/logos_SVG/Hot__and__Fresh_Pizza_Pizza.svg",
"assets/imageBin/logos_SVG/Huacalera.svg",
"assets/imageBin/logos_SVG/Hyatt_Regency_La_Manga.svg",
"assets/imageBin/logos_SVG/Hydra_Vodka_Water.svg",
"assets/imageBin/logos_SVG/IDFA.svg",
"assets/imageBin/logos_SVG/IL_RITROVO_D_ABRUZZO.svg",
"assets/imageBin/logos_SVG/Il_Forno.svg",
"assets/imageBin/logos_SVG/Illinois_Fighting_Illini.svg",
"assets/imageBin/logos_SVG/Illinois_Restaurant_Association.svg",
"assets/imageBin/logos_SVG/Importali.svg",
"assets/imageBin/logos_SVG/Internet_Explorer_4.svg",
"assets/imageBin/logos_SVG/Iomega.svg",
"assets/imageBin/logos_SVG/Island_Grill.svg",
"assets/imageBin/logos_SVG/Jack_Daniels.svg",
"assets/imageBin/logos_SVG/Jacobs(1).svg",
"assets/imageBin/logos_SVG/Java_University_Program.svg",
"assets/imageBin/logos_SVG/Jody_Maronis.svg",
"assets/imageBin/logos_SVG/Juicy.svg",
"assets/imageBin/logos_SVG/Juicy_cool.svg",
"assets/imageBin/logos_SVG/KAS.svg",
"assets/imageBin/logos_SVG/KFC-_Kentucky_Fried_Chicken.svg",
"assets/imageBin/logos_SVG/Kang.svg",
"assets/imageBin/logos_SVG/Kasha_Malasha.svg",
"assets/imageBin/logos_SVG/Kavli.svg",
"assets/imageBin/logos_SVG/Kawasaki98.svg",
"assets/imageBin/logos_SVG/Kibon.svg",
"assets/imageBin/logos_SVG/Kit_Kat.svg",
"assets/imageBin/logos_SVG/Knorr.svg",
"assets/imageBin/logos_SVG/Knott_s_Berry_Farm(1).svg",
"assets/imageBin/logos_SVG/Knott_s_Berry_Farm.svg",
"assets/imageBin/logos_SVG/Kool-Aid(1).svg",
"assets/imageBin/logos_SVG/Korzo.svg",
"assets/imageBin/logos_SVG/Kraft.svg",
"assets/imageBin/logos_SVG/Krispy_Kreme_Doughnuts.svg",
"assets/imageBin/logos_SVG/Kroger_s_Food_Store.svg",
"assets/imageBin/logos_SVG/Kronik_Energy.svg",
"assets/imageBin/logos_SVG/Kugu_Pastaneleri_Istanbul.svg",
"assets/imageBin/logos_SVG/LA_CASCINA.svg",
"assets/imageBin/logos_SVG/La_Estancia_de_los_Tecajetes.svg",
"assets/imageBin/logos_SVG/La_Lafayette_Ragin_Cajuns(1).svg",
"assets/imageBin/logos_SVG/La_Lafayette_Ragin_Cajuns.svg",
"assets/imageBin/logos_SVG/La_Tour.svg",
"assets/imageBin/logos_SVG/La_Virginia.svg",
"assets/imageBin/logos_SVG/Las_Delicias.svg",
"assets/imageBin/logos_SVG/Le_Marche.svg",
"assets/imageBin/logos_SVG/Letnij_Sad_Pizza.svg",
"assets/imageBin/logos_SVG/Linda_McCartney_Foods.svg",
"assets/imageBin/logos_SVG/Liquid_Audio102.svg",
"assets/imageBin/logos_SVG/Lo_Chef_e_il_Pescatore.svg",
"assets/imageBin/logos_SVG/Looza.svg",
"assets/imageBin/logos_SVG/Los_Angeles_Dodgers60.svg",
"assets/imageBin/logos_SVG/Lotus.svg",
"assets/imageBin/logos_SVG/Lotus_Bakeries.svg",
"assets/imageBin/logos_SVG/Louis_Vuitton.svg",
"assets/imageBin/logos_SVG/Louis_Vuitton97.svg",
"assets/imageBin/logos_SVG/Louis_Vuitton98.svg",
"assets/imageBin/logos_SVG/Lunch_Garden.svg",
"assets/imageBin/logos_SVG/Lunni_Cafes.svg",
"assets/imageBin/logos_SVG/MDX.svg",
"assets/imageBin/logos_SVG/MOUNTAIN_DEW_CODE_RED.svg",
"assets/imageBin/logos_SVG/MOUNTAIN_DEW_LIVE_WIRE.svg",
"assets/imageBin/logos_SVG/Mac_Doner.svg",
"assets/imageBin/logos_SVG/Makita103.svg",
"assets/imageBin/logos_SVG/Maltin_Polar.svg",
"assets/imageBin/logos_SVG/Mama_Fu_s.svg",
"assets/imageBin/logos_SVG/Mange.svg",
"assets/imageBin/logos_SVG/Maseca.svg",
"assets/imageBin/logos_SVG/Maxwell_House(2).svg",
"assets/imageBin/logos_SVG/Mayfield_Dairy_Farms.svg",
"assets/imageBin/logos_SVG/Me__and__Ed_s.svg",
"assets/imageBin/logos_SVG/MercedesBenz153.svg",
"assets/imageBin/logos_SVG/Merrill_Lynch.svg",
"assets/imageBin/logos_SVG/Milkey.svg",
"assets/imageBin/logos_SVG/Milo(1).svg",
"assets/imageBin/logos_SVG/Milpa_Real_Tostadas.svg",
"assets/imageBin/logos_SVG/Minnesota_Vikings.svg",
"assets/imageBin/logos_SVG/Miracle_Whip(1).svg",
"assets/imageBin/logos_SVG/Miracle_Whip.svg",
"assets/imageBin/logos_SVG/Miracoli.svg",
"assets/imageBin/logos_SVG/Mitsubishi_Motors.svg",
"assets/imageBin/logos_SVG/Mitsubishi_Motors311.svg",
"assets/imageBin/logos_SVG/Monster_Energy.svg",
"assets/imageBin/logos_SVG/Monster_Energy_Beverage_Co_.svg",
"assets/imageBin/logos_SVG/Monte.svg",
"assets/imageBin/logos_SVG/Moon_Pie.svg",
"assets/imageBin/logos_SVG/Morsberry.svg",
"assets/imageBin/logos_SVG/Mountain_Dew.svg",
"assets/imageBin/logos_SVG/Mr__Pizza(1).svg",
"assets/imageBin/logos_SVG/Mr__Pizza.svg",
"assets/imageBin/logos_SVG/Mrs__GoodCookie.svg",
"assets/imageBin/logos_SVG/Mustang85.svg",
"assets/imageBin/logos_SVG/Myllan.svg",
"assets/imageBin/logos_SVG/NBA.svg",
"assets/imageBin/logos_SVG/NBC_Sports.svg",
"assets/imageBin/logos_SVG/NCAA_2K3_College_Basketball.svg",
"assets/imageBin/logos_SVG/NCAA_Basketball.svg",
"assets/imageBin/logos_SVG/Na_Zdorovie.svg",
"assets/imageBin/logos_SVG/Natasha_s_Restaurant.svg",
"assets/imageBin/logos_SVG/Neru_coffee.svg",
"assets/imageBin/logos_SVG/Nescafe_Frappe.svg",
"assets/imageBin/logos_SVG/Nestle.svg",
"assets/imageBin/logos_SVG/Nike_Football56.svg",
"assets/imageBin/logos_SVG/Nike_Golf57.svg",
"assets/imageBin/logos_SVG/Nike_Golf59.svg",
"assets/imageBin/logos_SVG/Noel.svg",
"assets/imageBin/logos_SVG/Nom.svg",
"assets/imageBin/logos_SVG/Norge.svg",
"assets/imageBin/logos_SVG/Northern_Ireland_Food__and__Drink.svg",
"assets/imageBin/logos_SVG/Nova_Alimentos.svg",
"assets/imageBin/logos_SVG/O_Brien_s_Irish_Sandwich_Bar.svg",
"assets/imageBin/logos_SVG/Opera_O.svg",
"assets/imageBin/logos_SVG/Orange.svg",
"assets/imageBin/logos_SVG/Oregon_Ducks81.svg",
"assets/imageBin/logos_SVG/Oreo(1).svg",
"assets/imageBin/logos_SVG/Oreo.svg",
"assets/imageBin/logos_SVG/Orval_Kent.svg",
"assets/imageBin/logos_SVG/Pabst_Blue_Ribbon.svg",
"assets/imageBin/logos_SVG/Palma_Juce.svg",
"assets/imageBin/logos_SVG/Parmalat.svg",
"assets/imageBin/logos_SVG/Paul__Shark.svg",
"assets/imageBin/logos_SVG/Pepsi.svg",
"assets/imageBin/logos_SVG/Pepsi101.svg",
"assets/imageBin/logos_SVG/Pepsi102.svg",
"assets/imageBin/logos_SVG/PepsiDiet.svg",
"assets/imageBin/logos_SVG/Pepsi_Light.svg",
"assets/imageBin/logos_SVG/Pepsi_Twist.svg",
"assets/imageBin/logos_SVG/Pepsico.svg",
"assets/imageBin/logos_SVG/Pepsilogo2008.svg",
"assets/imageBin/logos_SVG/Perkos_Restaurants.svg",
"assets/imageBin/logos_SVG/PigglyWiggly.svg",
"assets/imageBin/logos_SVG/Pisang_Ambon.svg",
"assets/imageBin/logos_SVG/Pizza_Hut(2).svg",
"assets/imageBin/logos_SVG/Pizza_Inn(2).svg",
"assets/imageBin/logos_SVG/Pizza_Inn_2.svg",
"assets/imageBin/logos_SVG/PlayStation.svg",
"assets/imageBin/logos_SVG/Plumrose.svg",
"assets/imageBin/logos_SVG/Pollo_Feliz.svg",
"assets/imageBin/logos_SVG/Popeyes.svg",
"assets/imageBin/logos_SVG/Post-it.svg",
"assets/imageBin/logos_SVG/Post.svg",
"assets/imageBin/logos_SVG/Post_2.svg",
"assets/imageBin/logos_SVG/Puma55.svg",
"assets/imageBin/logos_SVG/Pure.svg",
"assets/imageBin/logos_SVG/Q_Water.svg",
"assets/imageBin/logos_SVG/Qatar-petroleum-logo-vector.svg",
"assets/imageBin/logos_SVG/Ragu.svg",
"assets/imageBin/logos_SVG/Rama_Lite.svg",
"assets/imageBin/logos_SVG/Ramkon.svg",
"assets/imageBin/logos_SVG/Rauch_Bravo.svg",
"assets/imageBin/logos_SVG/Red_Gold_Quality.svg",
"assets/imageBin/logos_SVG/Regency123.svg",
"assets/imageBin/logos_SVG/Restaurant_El_Zapata.svg",
"assets/imageBin/logos_SVG/Ricolino.svg",
"assets/imageBin/logos_SVG/Road_Bar(1).svg",
"assets/imageBin/logos_SVG/Rodnikovy_Kray.svg",
"assets/imageBin/logos_SVG/Rouzaneh__Daily_.svg",
"assets/imageBin/logos_SVG/Roxy_Girl.svg",
"assets/imageBin/logos_SVG/Royal.svg",
"assets/imageBin/logos_SVG/Ruffles.svg",
"assets/imageBin/logos_SVG/SIERRA_MIST.svg",
"assets/imageBin/logos_SVG/SOL_food_oil_saloon.svg",
"assets/imageBin/logos_SVG/SWA_Sharks.svg",
"assets/imageBin/logos_SVG/Sa_Cavalcante_Comestiveis.svg",
"assets/imageBin/logos_SVG/San_Ignacio.svg",
"assets/imageBin/logos_SVG/Sanitarium(1).svg",
"assets/imageBin/logos_SVG/Sanitarium.svg",
"assets/imageBin/logos_SVG/Saudi_Aramco.svg",
"assets/imageBin/logos_SVG/Schwan_s_Select.svg",
"assets/imageBin/logos_SVG/Schweppes.svg",
"assets/imageBin/logos_SVG/Sharky_s_Seafood.svg",
"assets/imageBin/logos_SVG/Shell40.svg",
"assets/imageBin/logos_SVG/Shell41.svg",
"assets/imageBin/logos_SVG/Shell43.svg",
"assets/imageBin/logos_SVG/Shrimpy75.svg",
"assets/imageBin/logos_SVG/Sinada.svg",
"assets/imageBin/logos_SVG/Skiny.svg",
"assets/imageBin/logos_SVG/Skippy.svg",
"assets/imageBin/logos_SVG/Smak_Market.svg",
"assets/imageBin/logos_SVG/Snack_Attack.svg",
"assets/imageBin/logos_SVG/Snapple.svg",
"assets/imageBin/logos_SVG/Sormovsky(2).svg",
"assets/imageBin/logos_SVG/Southern_Methodist_Mustangs.svg",
"assets/imageBin/logos_SVG/Soy_Restaurant.svg",
"assets/imageBin/logos_SVG/Spox.svg",
"assets/imageBin/logos_SVG/Spur.svg",
"assets/imageBin/logos_SVG/Spy_Bar.svg",
"assets/imageBin/logos_SVG/Star_Burger.svg",
"assets/imageBin/logos_SVG/Starbucks_Coffee.svg",
"assets/imageBin/logos_SVG/Step_Drink.svg",
"assets/imageBin/logos_SVG/Subway.svg",
"assets/imageBin/logos_SVG/Suiza_Foods.svg",
"assets/imageBin/logos_SVG/Sultana.svg",
"assets/imageBin/logos_SVG/Sunrise(1).svg",
"assets/imageBin/logos_SVG/SuperFresh.svg",
"assets/imageBin/logos_SVG/Super_Moli(1).svg",
"assets/imageBin/logos_SVG/Supermercado_Vila_Lais.svg",
"assets/imageBin/logos_SVG/Sushiko.svg",
"assets/imageBin/logos_SVG/Suzuki120.svg",
"assets/imageBin/logos_SVG/TROPICANA_TWISTER_SODA.svg",
"assets/imageBin/logos_SVG/Taco_Bell.svg",
"assets/imageBin/logos_SVG/Taleriai.svg",
"assets/imageBin/logos_SVG/Tata_Football_Academy_de_Jamshedpur.svg",
"assets/imageBin/logos_SVG/TeleFood.svg",
"assets/imageBin/logos_SVG/TelePizza.svg",
"assets/imageBin/logos_SVG/Tentissimo.svg",
"assets/imageBin/logos_SVG/Terra_Mia.svg",
"assets/imageBin/logos_SVG/Terrasamba.svg",
"assets/imageBin/logos_SVG/Tete_Restaurant.svg",
"assets/imageBin/logos_SVG/Texaco-logo.svg",
"assets/imageBin/logos_SVG/The_Buzz_Cafe_de_Torreon.svg",
"assets/imageBin/logos_SVG/The_Schwan_Food_Company(2).svg",
"assets/imageBin/logos_SVG/Tia_Rosa.svg",
"assets/imageBin/logos_SVG/Tropi_Light_Jugos.svg",
"assets/imageBin/logos_SVG/Tropicana.svg",
"assets/imageBin/logos_SVG/Tsar_hlib.svg",
"assets/imageBin/logos_SVG/Turtles.svg",
"assets/imageBin/logos_SVG/Umpa_Umpa.svg",
"assets/imageBin/logos_SVG/Unilever.svg",
"assets/imageBin/logos_SVG/VISA138.svg",
"assets/imageBin/logos_SVG/VWVolkswagen (1).svg",
"assets/imageBin/logos_SVG/Vans68.svg",
"assets/imageBin/logos_SVG/Varanda.svg",
"assets/imageBin/logos_SVG/Vegemite.svg",
"assets/imageBin/logos_SVG/Velveeta.svg",
"assets/imageBin/logos_SVG/Vitol.svg",
"assets/imageBin/logos_SVG/Volkswagen50.svg",
"assets/imageBin/logos_SVG/Vollkornbackerei_Niemand.svg",
"assets/imageBin/logos_SVG/Vom_Fass.svg",
"assets/imageBin/logos_SVG/Walt_Disney_Home_Video.svg",
"assets/imageBin/logos_SVG/Warner_Bros_Michigan_J_Frog.svg",
"assets/imageBin/logos_SVG/Wells_Fargo_Bank.svg",
"assets/imageBin/logos_SVG/Wheat_Thins.svg",
"assets/imageBin/logos_SVG/WiFi.svg",
"assets/imageBin/logos_SVG/Wintmolders.svg",
"assets/imageBin/logos_SVG/Wisk.svg",
"assets/imageBin/logos_SVG/Yahoo_Sports.svg",
"assets/imageBin/logos_SVG/Yellow_Pages.svg",
"assets/imageBin/logos_SVG/adria-magistra-vector-logo.svg",
"assets/imageBin/logos_SVG/aflac-vector-logo.svg",
"assets/imageBin/logos_SVG/aia.svg",
"assets/imageBin/logos_SVG/aig-logo-vector.svg",
"assets/imageBin/logos_SVG/airbnb-logo-vector.svg",
"assets/imageBin/logos_SVG/albertsons-logo-vector.svg",
"assets/imageBin/logos_SVG/allianz-black-vector-logo.svg",
"assets/imageBin/logos_SVG/amtrak-vector-logo.svg",
"assets/imageBin/logos_SVG/applebees.svg",
"assets/imageBin/logos_SVG/avis-vector-logo.svg",
"assets/imageBin/logos_SVG/banca_generali.svg",
"assets/imageBin/logos_SVG/banco-de-chile-logo-vector.svg",
"assets/imageBin/logos_SVG/banco-ge-logo-vector.svg",
"assets/imageBin/logos_SVG/banco-le„≥n-logo-vector.svg",
"assets/imageBin/logos_SVG/barbie.svg",
"assets/imageBin/logos_SVG/batmanlogos.svg",
"assets/imageBin/logos_SVG/batmanvintage70slogo.svg",
"assets/imageBin/logos_SVG/batmanvintagelogo_.svg",
"assets/imageBin/logos_SVG/bazinga.svg",
"assets/imageBin/logos_SVG/bbva-banco-provincial-vector-logo.svg",
"assets/imageBin/logos_SVG/beefeater-london-dry-gin-logo-vector.svg",
"assets/imageBin/logos_SVG/beershotantverpen.svg",
"assets/imageBin/logos_SVG/best-western-logo-vector.svg",
"assets/imageBin/logos_SVG/big-lots-logo-vector.svg",
"assets/imageBin/logos_SVG/black-&-decker-logo-vector.svg",
"assets/imageBin/logos_SVG/brasilrecca.svg",
"assets/imageBin/logos_SVG/braun-logo-vector.svg",
"assets/imageBin/logos_SVG/browning--eps--vector-logo.svg",
"assets/imageBin/logos_SVG/california-poly-mustangs-vector-logo.svg",
"assets/imageBin/logos_SVG/canal-9-vector-logo.svg",
"assets/imageBin/logos_SVG/canon-you-can-vector-logo.svg",
"assets/imageBin/logos_SVG/carrefour-group-vector-logo.svg",
"assets/imageBin/logos_SVG/cartier--eps--vector-logo.svg",
"assets/imageBin/logos_SVG/casper-black-vector-logo.svg",
"assets/imageBin/logos_SVG/cerveza_bubweiser.svg",
"assets/imageBin/logos_SVG/chevron-logo-vector.svg",
"assets/imageBin/logos_SVG/citibank-(.eps)-logo-vector.svg",
"assets/imageBin/logos_SVG/citybanklogo.svg",
"assets/imageBin/logos_SVG/clarks-vector-logo.svg",
"assets/imageBin/logos_SVG/cnbc-vector-logo.svg",
"assets/imageBin/logos_SVG/comercial-mexicana-logo-vector.svg",
"assets/imageBin/logos_SVG/convergencia-vector-logo.svg",
"assets/imageBin/logos_SVG/coors-light-slant-vector-logo.svg",
"assets/imageBin/logos_SVG/costa-maya-vector-logo.svg",
"assets/imageBin/logos_SVG/costco-logo-vector.svg",
"assets/imageBin/logos_SVG/craigslist-logo-vector.svg",
"assets/imageBin/logos_SVG/credicard-vector-logo.svg",
"assets/imageBin/logos_SVG/crush-orange-vector-logo.svg",
"assets/imageBin/logos_SVG/danger-mouse-vector.svg",
"assets/imageBin/logos_SVG/dcshoessplah.svg",
"assets/imageBin/logos_SVG/dharma--eps--vector-logo.svg",
"assets/imageBin/logos_SVG/diners-club-international-logo-vector.svg",
"assets/imageBin/logos_SVG/discover-network-vector-logo.svg",
"assets/imageBin/logos_SVG/disneyland-vector-logo.svg",
"assets/imageBin/logos_SVG/dodge-division-vector-logo.svg",
"assets/imageBin/logos_SVG/dodgeviper2012logo.svg",
"assets/imageBin/logos_SVG/dow-logo-vector.svg",
"assets/imageBin/logos_SVG/dun-&-bradstreet-logo-vector.svg",
"assets/imageBin/logos_SVG/dungeons---dragons-vector-logo.svg",
"assets/imageBin/logos_SVG/eventbrite-logo-vector.svg",
"assets/imageBin/logos_SVG/feelthedifferencebrandnew.svg",
"assets/imageBin/logos_SVG/fiu_panthers_logo.svg",
"assets/imageBin/logos_SVG/foot-locker-logo-vector.svg",
"assets/imageBin/logos_SVG/garmin-logo-vector.svg",
"assets/imageBin/logos_SVG/giant-eagle-logo-vector.svg",
"assets/imageBin/logos_SVG/giant-logo-vector.svg",
"assets/imageBin/logos_SVG/great-eastern-logo-vector.svg",
"assets/imageBin/logos_SVG/greenbaypackerslogo.svg",
"assets/imageBin/logos_SVG/habitat-for-humanity-logo-vector.svg",
"assets/imageBin/logos_SVG/haima.svg",
"assets/imageBin/logos_SVG/harleylogo.svg",
"assets/imageBin/logos_SVG/hellokitty.svg",
"assets/imageBin/logos_SVG/ing-group-vector-logo.svg",
"assets/imageBin/logos_SVG/inspired_bikes_logo.svg",
"assets/imageBin/logos_SVG/interac-yellow-vector-logo.svg",
"assets/imageBin/logos_SVG/interflora-fleurop-vector-logo.svg",
"assets/imageBin/logos_SVG/iveco-corporation-vector-logo.svg",
"assets/imageBin/logos_SVG/johndeerelogo.svg",
"assets/imageBin/logos_SVG/kelloggsspecialk.svg",
"assets/imageBin/logos_SVG/kickstarter-logo-vector.svg",
"assets/imageBin/logos_SVG/kmart-vector-logo.svg",
"assets/imageBin/logos_SVG/kroger-logo-vector.svg",
"assets/imageBin/logos_SVG/labelbeervector.svg",
"assets/imageBin/logos_SVG/liberty-mutual-logo-vector.svg",
"assets/imageBin/logos_SVG/livingsocial-logo-vector.svg",
"assets/imageBin/logos_SVG/logicspace.svg",
"assets/imageBin/logos_SVG/logo_bmw.svg",
"assets/imageBin/logos_SVG/logo_linksys_eps.svg",
"assets/imageBin/logos_SVG/logofacebookf.svg",
"assets/imageBin/logos_SVG/logohollister.svg",
"assets/imageBin/logos_SVG/logowatermarkrwwhite186c.svg",
"assets/imageBin/logos_SVG/loreal-logo-vector.svg",
"assets/imageBin/logos_SVG/lowes-company-vector-logo.svg",
"assets/imageBin/logos_SVG/made-for-ipod-vector.svg",
"assets/imageBin/logos_SVG/maestro--card-vector-logo.svg",
"assets/imageBin/logos_SVG/mattel.svg",
"assets/imageBin/logos_SVG/mercedesbenzlogo2011.svg",
"assets/imageBin/logos_SVG/metlife-logo-vector.svg",
"assets/imageBin/logos_SVG/metro-logo-vector.svg",
"assets/imageBin/logos_SVG/mlbmajorleaguebaseballlogo.svg",
"assets/imageBin/logos_SVG/mm.svg",
"assets/imageBin/logos_SVG/mms.svg",
"assets/imageBin/logos_SVG/mobil-pegasus-logo.svg",
"assets/imageBin/logos_SVG/moneygram-vector-logo.svg",
"assets/imageBin/logos_SVG/mozilla_firefox.svg",
"assets/imageBin/logos_SVG/nationwide-logo-vector.svg",
"assets/imageBin/logos_SVG/neiman-marcus-logo-vector.svg",
"assets/imageBin/logos_SVG/news-corporation-logo-vector.svg",
"assets/imageBin/logos_SVG/nielsen-logo.svg",
"assets/imageBin/logos_SVG/nike-vector-logo.svg",
"assets/imageBin/logos_SVG/onedirection.svg",
"assets/imageBin/logos_SVG/p90x_logo.svg",
"assets/imageBin/logos_SVG/paypal-vector-logo.svg",
"assets/imageBin/logos_SVG/prudential-logo.svg",
"assets/imageBin/logos_SVG/publix-logo-vector.svg",
"assets/imageBin/logos_SVG/rabobank--eps--vector-logo.svg",
"assets/imageBin/logos_SVG/radioshack-logo-vector.svg",
"assets/imageBin/logos_SVG/rag-logo-vector.svg",
"assets/imageBin/logos_SVG/rbk-reebok-vector-logo.svg",
"assets/imageBin/logos_SVG/red4color3dstk (1).svg",
"assets/imageBin/logos_SVG/redbulleps (1).svg",
"assets/imageBin/logos_SVG/remax---above-the-crowd-vector-logo.svg",
"assets/imageBin/logos_SVG/riyadh_baladiyah.svg",
"assets/imageBin/logos_SVG/rolex--eps--vector-logo.svg",
"assets/imageBin/logos_SVG/ross-logo-vector.svg",
"assets/imageBin/logos_SVG/sams-club-vector-logo.svg",
"assets/imageBin/logos_SVG/samsonite-vector-logo.svg",
"assets/imageBin/logos_SVG/samsung.svg",
"assets/imageBin/logos_SVG/samsung_galaxy_s4.svg",
"assets/imageBin/logos_SVG/santander-group-vector-logo.svg",
"assets/imageBin/logos_SVG/sercome.svg",
"assets/imageBin/logos_SVG/shell.svg",
"assets/imageBin/logos_SVG/soundcloud_logo.svg",
"assets/imageBin/logos_SVG/spar-shop-vector-logo.svg",
"assets/imageBin/logos_SVG/sports-authority-logo-vector.svg",
"assets/imageBin/logos_SVG/square-logo-vector.svg",
"assets/imageBin/logos_SVG/starbucks_2011_true_logo.svg",
"assets/imageBin/logos_SVG/state-farm-logo-vector.svg",
"assets/imageBin/logos_SVG/thumbsupfacebooklikesymbol.svg",
"assets/imageBin/logos_SVG/tous-vector-logo.svg",
"assets/imageBin/logos_SVG/ugg-vector-logo.svg",
"assets/imageBin/logos_SVG/united-technologies-logo-vector.svg",
"assets/imageBin/logos_SVG/v-d-vector-logo.svg",
"assets/imageBin/logos_SVG/vansoffthewall.svg",
"assets/imageBin/logos_SVG/versace-jeans-couture-vector-logo.svg",
"assets/imageBin/logos_SVG/vmon_3d_logo_glow_cmyk_hz_pos_hi.svg",
"assets/imageBin/logos_SVG/wakefern-logo-vector.svg",
"assets/imageBin/logos_SVG/warnerhvblack.svg",
"assets/imageBin/logos_SVG/western-union.svg",
"assets/imageBin/logos_SVG/winn-dixie-logo-vector.svg",
"assets/imageBin/logos_SVG/wmt285copy1235sprk1.svg",
"assets/imageBin/logos_SVG/worldbank-vector-logo.svg",
"assets/imageBin/logos_SVG/yum!-brands-logo-vector.svg",
"assets/imageBin/logos_SVG/zumbafitness.svg"

	]

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
					var colorSubSection = 'rgb(' + r_offset + ', ' + g_offset + ', ' + b_offset + ')';
					//console.log(colorSubSection);
					//console.log('r:' + r_offset + ' g:' + g_offset + ' b:' + b_offset);


					var $mainBodySubSectionWrapper = $('<div class="bodyPart-subSection-wrapper"/>');
					var $mainBodySubSection = $('<div class="bodyPart-subSection"><div/>');
					var $subSectionImage = $('<div class="subSection-image"></div>');	
					
					//var randomColor = ('#'+Math.floor(Math.random()*16777215).toString(16));

					$mainBody_Section.append($mainBodySubSectionWrapper);
					$mainBodySubSectionWrapper.append($mainBodySubSection);
					$mainBodySubSection.append($subSectionImage);

					$mainBodySubSectionWrapper.css({"top": new_top_subSection + "px", "left": new_left_subSection + "px"});
					$mainBodySubSection.css({"background-color": colorSubSection});
					$subSectionImage.css({'backgroundImage': "url(" + imageArray[currentImageCounter] + ")"});

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
					thisChild.animate({height:"80px",width: "80px", margin: "5px"}, 80);
					thisChild.addClass("subSection-hover-border-radius");
					//console.log("something");
				},
				function () {
					var thisChild = $(this).children();
					//$(this).animate({height:"200px", width: "200px", margin: "-100px 0 0 -100px"}, 100);
					$(this).animate({height:"51px", width: "51px", margin: "3px", marginRight: "0", marginBottom: "0", zIndex: "0"}, 100);
					$(this).removeClass("subSection-shadow subSection-hover-border-radius");
					thisChild.animate({height:"45px", width: "45px", margin: "3px", marginRight: "0", marginBottom: "0"}, 100);
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