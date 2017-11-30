$(document).ready(function () {

	$('.carousel').carousel();

	$(".link-span").click(function(){
		var className = $(this).attr("class");
		className = className.replace("link-span ","");
		className = className.replace("-span","");
		
		for(var i = 1;i < 4;i++){
			$("#img"+i).attr("src","images/"+className+i+".png");
		}

		$("#bg-video").attr("src","video/"+className+".mp4");
		$("#bg-video").attr("poster","video/"+className+".png");
    	$("#bg-video").load();
    	$("#bg-video").play();

	});
	
});