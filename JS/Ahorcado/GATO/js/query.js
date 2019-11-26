$(document).ready(function() {
    var move=1;
    var play=true;

    $("h1").css({"margin-left":"800px","font-family":"helvetica","color":"#FEFEFE"});
    $("body").css("background-color","#F1A9F3");
    $("table").css({"border-collapse":"collapse","border-spacing":"collapse","margin":"10px auto","background-color":"#91FBFE"});
    $("table tr td").css({"width":"90px","height":"90px","border":"1px solid black","font-size":"35px","text-align":"center"});
    $("table tr td:hover").css({"background-color":"#2c3531","cursor":"pointer"});

    $("table tr td").click(function () {
        if ($(this).text()==""&& play) {
            if ((move%2)==1){
                $(this).append("X");
                $(this).css("color","#61892f")
            }else {
                $(this).append("O");
                $(this).css("color","#e85a4f")
            }
            move++;
            if (Winner() !=-1 && Winner() != ""){
                if (Winner()=="X"){
                    $("body").append("<div class='winner'><span>Ganaros las X</span></div>");
                    $("body").append("<button onclick='location.reload()'>Jugar de nuevo</button>");
                    $(".winner").css("background-color","#61892f");
                    $("button").css("color","#61892f");
                    $(".winner").css({"width":"240px","height":"20px","margin":"10px auto","text-align":"center" });
                    $(".winner span").css({"font-size":"20px","display":"block","margin-top":"10px"});
                    $("button").css({"width":"240px","height":"50px","margin":"10px auto","display":"block","border":"none","background-color":"#27272727","font-size":"20px"});
                }else{
                    $("body").append("<div class='winner'><span>Ganaron las O</span></div>");
                    $("body").append("<button onclick='location.reload()'>Jugar de nuevo</button>");
                    $(".winner").css("background-color","#e85a4f");
                    $("button").css("color","#e85a4f");
                    $(".winner").css({"width":"240px","height":"20px","margin":"10px auto","text-align":"center" });
                    $(".winner span").css({"font-size":"20px","display":"block",});
                    $("button").css({"width":"240px","height":"50px","margin":"10px auto","display":"block","border":"none","background-color":"#27272727","font-size":"20px"});
                }
                play= false;
            }
        }
    })

    function Winner() {
        re1=$("table tr:nth-child(1) td:nth-child(1)").text();
        re2=$("table tr:nth-child(1) td:nth-child(2)").text();
        re3=$("table tr:nth-child(1) td:nth-child(3)").text();
        re4=$("table tr:nth-child(2) td:nth-child(1)").text();
        re5=$("table tr:nth-child(2) td:nth-child(2)").text();
        re6=$("table tr:nth-child(2) td:nth-child(3)").text();
        re7=$("table tr:nth-child(3) td:nth-child(1)").text();
        re8=$("table tr:nth-child(3) td:nth-child(2)").text();
        re9=$("table tr:nth-child(3) td:nth-child(3)").text();$

        if((re1==re2)&&(re2==re3)){
            return re3;
        }else if ((re4==re5)&&(re5==re6)){
            return re6;
        }else if((re7==re8)&&(re8==re9)){
            return re9;
        }else if((re1==re4)&&(re4==re7)){
            return re7;
        }else if((re2==re5)&&(re5==re8)){
            return re8
        }else if((re3==re6)&&(re6==re9)) {
            return re3;
        }else if((re1==re5)&&(re5==re9)){
            return re9;
        }else if((re3==re5)&&(re5==re7)) {
            return re7;
        }
        return -1;
    }
});