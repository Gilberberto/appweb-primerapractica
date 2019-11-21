		$(document).ready(function (){

			$(".cuadro").css({"height":"90px","width":"90px","border":"10px solid Blue","display":"inline-block"});
		$("#btn1").click(function () {
        	$('div[name="c1"]').css("background-color","AquaMarine");
    	});
		$("#btn2").click(function () {
        	$('div[name="c2"]').css("background-color","AquaMarine");
    	});
    	$("#btn3").click(function () {
        	$('div:nth-child(3),div[for="3"]').css("background-color","AquaMarine");
    	});
    	$("#btn4").click(function () {
        	$('div:nth-child(10),div[for="4"]').css("background-color","AquaMarine");
    	});
    	$("#btn5").click(function () {
        	$('div[name="c1"],div[name="c2"],div:nth-child(3),div[for="3"],div:nth-child(11),div[for="4"]').css("background-color","AquaMarine");
    	});
    	$("#btn6").click(function () {
        	$('div[name="c1"],div:nth-child(3),div[for="3"],div:nth-of-type(6n+8)').not('div[for="4"]').css("background-color","AquaMarine");
    	});
    	$("#AYO").click(function () {
        	$("div").css("background-color","white");
    	});
		});