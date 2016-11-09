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
xml.open("GET", "base.json", true);
xml.onreadystatechange = function() {
	if(xml.readyState == 4) {
		if(xml.status == 200) {
		}
		else{
			alert("Ошибка request: " +xml.status + " " + xml.statusText);
		}
	}
}
xml.send(null);