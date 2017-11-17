//это первый способ =)


var  doc = document , //caches varibale
	 polosa = doc.getElementById("polosa") , //dynamic element
     left = 0 ,  
     scrolling_by = 128,
     scroll_to = 512;


const def_left = 0; //default value    






function sliderLeft()
{
		left = left - scrolling_by;

		if(left < - scroll_to)
		{
			left = def_left;
		}
		polosa.style.left = left + "px";
}










// start sliderLeft()
setInterval(sliderLeft, 2000);







