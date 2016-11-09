var arrange = function(data) {
    var features = document.getElementById("features");
    data.blocks.forEach(function(item, i, arr) {
        var features_mini = document.createElement("div");
        var features_mini2 = document.createElement("span");
        var features_text = document.createElement("div");      
        var img = document.createElement("img"); 
        features_mini.className = "features_mini";        
        features_mini2.className = "features_mini2";
        features_text.className = "features_text";        
        img.className = "features_img";    
        //features_mini.innerHTML = item.features_mini;
        features_mini2.innerHTML = item.features_mini2;
        features_text.innerHTML = item.features_text;            
        img.src = item.src;     
        features_mini.appendChild(img);
        features_mini.appendChild(features_mini2);
        features_mini.appendChild(features_text);
        features.appendChild(features_mini);
        });


     var galery_img_1 = document.getElementById("galery_img_1");
     data.features1.forEach(function(item, i, arr) {
         var src1 = document.createElement("a");
         var img1 = document.createElement("img");
         // src1.className = "src1";
         // img1.className = "img1";
         src1.innerHTML = item.src1;
         img1.innerHTML = item.img1;
         src1.href = "#";
         img1.src = item.src;    
         src1.appendChild(img1); 
         galery_img_1.appendChild(src1);
     });

    var galery_img_2 = document.getElementById("galery_img_2");
    data.features2.forEach(function(item, i, arr) {
        var src2 = document.createElement("a");
         var img2 = document.createElement("img");
         // src2.className = "src2";
         // img2.className = "img";
         src2.innerHTML = item.src2;
         img2.innerHTML = item.img2;
         src2.href = "#";
         img2.src = item.src;    
         src2.appendChild(img2); 
         galery_img_2.appendChild(src2);
    });

};

var request = new XMLHttpRequest();
request.open('GET', 'base.json', true);

request.onload = function() {
    if (request.status == 200) {
        var data = JSON.parse(request.responseText);
        arrange(data);
    } else {
        console.log("error")
    }
};
request.onerror = function() {
    // There was a connection error of some sort
};

request.send();


