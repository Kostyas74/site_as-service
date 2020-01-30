$(".qa_item p").click(function() {
           $class = $(this).attr('class');

           if ($(this).attr('id') == "open") {
             $id = "#" + $class;
             $($id).css({"height":"auto"});
             $i = $(this).find("i");
             $($i).attr("class", "fas fa-angle-up");
             $(this).attr('id', 'close');
           }
           else{
             $id = "#" + $class;
             $($id).css({"height":"0px"});
             $i = $(this).find("i");
             $($i).attr("class", "fas fa-angle-down");
             $(this).attr('id', 'open');
           }
           
        });