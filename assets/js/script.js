//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

//Delete todos
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Creating todos
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append($("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>").hide().fadeIn(500));
    }
});
 //Toggle Form
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
})