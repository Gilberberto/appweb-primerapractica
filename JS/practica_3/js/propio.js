$(document).ready(function () {
var t = 0;

	$(".cuadro").click(function (e) {
		if(t==0){
			$(this).html("0");
			t=1;
		}else{
			$(this).html("X");
			t=0;
		}
	});

	$("#link").click(function(e){
		e.preventDefault();
		alert("pito");
	})

});