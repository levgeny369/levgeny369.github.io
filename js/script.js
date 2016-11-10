function secret(id_div) {
if (document.getElementById(id_div).style.display == "block")
document.getElementById(id_div).style.display = "none";
else
document.getElementById(id_div).style.display = "block";
};


function getAjax() {
	var xml = null;
	try { xml = new XMLHttpRequest(); } catch(e) {}
	try { xml = new ActiveXObject("Msxml2.XMLHTTP"); } catch(e) {}
	try { xml = new XMLHttpRequest("Microsoft.XMLHTTP"); } catch(e) {}

	return xml;
}

var xml = getAjax();
xml.open("GET", "./base.json", true);
xml.onreadystatechange = function() {
	if(xml.readyState == 4) {
		if(xml.status == 200) {
			var json = JSON.parse(xml.responseText),
				sfeatures_mini = document.getElementById("sfeatures_mini").innerHTML,
				compile_sfeatures_mini = Handlebars.compile(sfeatures_mini),
				result_features = compile_sfeatures_mini(json),
				features = document.getElementById("features");
			features.innerHTML = result_features;		

			sgalery_img1 = document.getElementById("sgalery_img").innerHTML,
				compile_sgalery_img1 = Handlebars.compile(sgalery_img1),
				result_galery_img_big1 = compile_sgalery_img1(json),
				galery_img_big1 = document.getElementById("galery_img_1");
			galery_img_big1.innerHTML = result_galery_img_big1;		

			sgalery_img2 = document.getElementById("sgalery_img2").innerHTML,
				compile_sgalery_img2 = Handlebars.compile(sgalery_img2),
				result_galery_img_big2 = compile_sgalery_img2(json),
				galery_img_big2 = document.getElementById("galery_img_2");
			galery_img_big2.innerHTML = result_galery_img_big2;	

			siphone_block1 = document.getElementById("siphone_block1").innerHTML,
				compile_siphone_block1 = Handlebars.compile(siphone_block1),
				result_siphone_block1 = compile_siphone_block1(json),
				block_big1 = document.getElementById("block_big1");
			block_big1.innerHTML = result_siphone_block1;	

			siphone_block2 = document.getElementById("siphone_block2").innerHTML,
				compile_siphone_block2 = Handlebars.compile(siphone_block2),
				result_siphone_block2 = compile_siphone_block2(json),
				block_big2 = document.getElementById("block_big2");
			block_big2.innerHTML = result_siphone_block2;	


			smeet_img_mini = document.getElementById("smeet_img_mini").innerHTML,
				compile_smeet_img_mini = Handlebars.compile(smeet_img_mini),
				result_smeet_img_mini = compile_smeet_img_mini(json),
				smeet_img = document.getElementById("meet_img");
			smeet_img.innerHTML = result_smeet_img_mini;	

			ssome_img_mini = document.getElementById("ssome_img_mini").innerHTML,
				compile_ssome_img_mini = Handlebars.compile(ssome_img_mini),
				result_ssome_img_mini = compile_ssome_img_mini(json),
				ssome_img = document.getElementById("some_img");
			ssome_img.innerHTML = result_ssome_img_mini;	



		}
		else{
			alert("Ошибка request: " + xml.status + " " + xml.statusText);
		}
	}
}
xml.send(null);