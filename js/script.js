function secret(id_div) {
if (document.getElementById(id_div).style.display == "block")
document.getElementById(id_div).style.display = "none";
else
document.getElementById(id_div).style.display = "block";
};


// localStorage.setItem('name', '1');

// function generateAllProductsHTML(data,idTemplate,boxClass){
	
// 	var theTemplate = Handlebars.compile ($(idTemplate).html());
// 	$(boxClass).append (theTemplate(data));			 
// }
// $(function () {
	
// 	var pictures = [];

// 	$.ajax('./json/base.json').done(function(data) {
// 		pictures = data.features1;

// 		generateAllProductsHTML(data,'#sfeatures_mini','#features');
// 		generateAllProductsHTML(data,'#sgalery_img','#galery_img_1');
// 		generateAllProductsHTML(data,'#sgalery_img2','#galery_img_2');
// 		generateAllProductsHTML(data,'#siphone_block1','#block_big1');
// 		generateAllProductsHTML(data,'#siphone_block2','#block_big2');
// 		generateAllProductsHTML(data,'#smeet_img_mini','#meet_img');
// 		generateAllProductsHTML(data,'#ssome_img_mini','#some_img');

// 	}).fail(function(data) {

// 	});

// 	$('body').on('click','.galery_hover',function(e) {
// 		e.preventDefault()
// 		$('.single-picture').addClass('visible');

// 		var index = $(this).attr('index');
// 		for (var i = 0; i  < pictures.length; i++) {
// 			// console.log(pictures.length)
// 			// console.log(pictures[i].id==index)
// 			console.log(pictures[i].id);
// 			console.log(index);
// 			if(pictures[i].id == index){
// 				$('.preview-large #page_img').attr('src',pictures[i].src);
// 				$('.preview-large h3').text(pictures[i].text);
// 				$('.preview-large p').text(pictures[i].inf);
// 			}
// 		}
// 	});
// 	$(".overlay, .close").on('click',function(e) {
// 		$('.single-picture').removeClass('visible');
// 	})


// });