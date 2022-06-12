jQuery(document).ready(function($){
 

    // Open
    $("button").click(function(){
      $("#bottom").fadeIn("slow");
    });
    // Close
    $(".close").click(function(){
      $("#bottom").fadeOut("slow");
    });
    // Close on off click 
    $(document).mouseup(function (e)
    {
        var container = $("#bottom");
        if (container.has(e.target).length === 0)
        {
            container.fadeOut("slow");
        }
    });
     
      
    });