$(document).ready(Function){

var n = 10625;
var l = $("#bomba1").value();
$("#btn1").click(function(){
  l.innerHTML = n;
  n--;
  $("#bomba1").value()=l;
},0);
}
