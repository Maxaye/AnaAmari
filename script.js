jQuery(document).ready(function(){
	jQuery(".titleWrapper").addClass("ready");
	
jQuery(".titleWrapper h1").each(function(){
	var fullString;
	var characters = jQuery(this).text().split("");
	
	$this = jQuery(this);
	$this.empty();
	$.each(characters, function (i, el) {
		if(el == " "){el = "&nbsp;"};
    $this.append("<span>" + el + "</span");
	});
		
});
	
});



//Based on: https://dribbble.com/shots/3377940-Home-Budget-App-Interactions
function abl1_Click() {
   var vid1 = document.getElementById("abl1Video");
   var t1 = document.getElementById("abl1Text");
   var v = "visible"; 
   if (vid1.style.visibility != "hidden") { v = "hidden"; }
   vid1.style.visibility =  v; 
   t1.style.visibility = v;
}