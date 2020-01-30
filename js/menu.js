function open_menu(){
           $(".mob_menu").css({"height":"auto","transition":"0.4s"});
           $("#menu_bar").attr("onclick", "close_menu()"); 
           $("#menu_bar").attr("class", "fas fa-times"); 
        }
        function close_menu(){
           $(".mob_menu").css({"height":"0px","transition":"0.4s"});
           $("#menu_bar").attr("onclick", "open_menu()");
           $("#menu_bar").attr("class", "fas fa-bars"); 
        }
