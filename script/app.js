$(document).ready(function(){
$(".announcement").prepend("<button>x</button>");    


$("button").on('click', function(){
    // $(".announcement p").toggle('slow');
   if ($(this).text() === 'x'){
   $(this).text("Show Announcement");
   $(this).siblings().hide("slow");
   }else{
   $(this).text("x");
   $(this).siblings().show("slow");
   }
});


});

$('button').on('click','button',function(){
    if($(this.text()=== 'x')){
     $(this).parent().find('p').hide('slow')   
    }
    else{
        $(this).parent().find('p').show('slow');
        $(this).text("Show announcement")
    }
})