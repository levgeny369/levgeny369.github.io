function secret(id_div) {
if (document.getElementById(id_div).style.display == "block")
document.getElementById(id_div).style.display = "none";
else
document.getElementById(id_div).style.display = "block";
};


$(function () {

	var blog =[];
	window.location.hash = '#';
	$(window).on('hashchange', function(){
		render(decodeURI(window.location.hash));
	});
	$(window).trigger('hashchange');
	window.location.hash = '#';


	$.getJSON("features1.json", function(data) {
	    console.log(data);
   	    features1 = data;
	    generateBlogHTML(data,"#features1",'.features1');
	    

	}).fail(function(jqXHR, status, error) {	    
	    console.log( jqXHR,status,error);
	});

	var singleBlogPage = $('.single-blog');

	singleBlogPage.on('click', function (e) {

		if (singleBlogPage.hasClass('visible')) {

			var clicked = $(e.target);

			// If the close button or the background are clicked go to the previous page.
			if (clicked.hasClass('close') || clicked.hasClass('overlay')) {
				singleBlogPage.removeClass('visible');
				window.location.hash = '#blog';	
							
			}

		}

	});

	function generateAllProductsHTML(data,idTemplate,boxClass){
		var theTemplate = Handlebars.compile ($(idTemplate).html());
		 $(boxClass).append (theTemplate(data));			 
	}

	function generateBlogHTML(data,idTemplate,boxClass){
		var theTemplate = Handlebars.compile ($(idTemplate).html());
		$(boxClass).append (theTemplate(data));	
			 
		$(boxClass).find('li').on('click', function (e) {
			e.preventDefault();
			var productIndex = $(this).data('index');
			window.location.hash = 'blog/' + productIndex;
		})
	}

	

 	function renderSingleProductPage(index, data){

		var page = $('.single-blog'),
		container = $('.preview-large');
		console.log("renderSingleProductPage","index=",index);
		if(data.length){
			data.forEach(function (item) {
				console.log(item);
				if(item.id == index){
					container.find('h3').text(item.headline);
					container.find('img').attr('src', "assets/images/"+item.image);
					container.find('p').text(item.blogText);
				}
			});
		}

		page.addClass('visible');

	}
	function render(url) {
		var temp = url.split('/')[0];
		$('.main-content').removeClass('visible');

		
		var	map = {
			'#blog': function() {
				var index = url.split('#blog/')[1].trim();
				console.log("render blog");
				renderSingleProductPage(index, blog);
			}
		}
		if(map[temp]){
			map[temp]();
		}


	}

});