//$("li").on("click", function(){
//	if($(this).css("color") === "rgb(128, 128, 128)"){
//		$(this).css("color", "rgb(0, 0, 0)");
//		$(this).css("text-decoration", "none");
//	}else{
//		$(this).css("color", "grey").css("text-decoration", "line-through");
//	}
//});

//Check for specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on span for delete todo
$("ul").on("click", "span", function(event){
	//Stopping all other events that are coming with the clicking on the span
	event.stopPropagation();
	//fadeOut and removing the li
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

//Adding a new todo in the list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add it to the ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

//Togle the form
$(".fa-plus").on("click", function(){
	$("#addingToDo").fadeToggle();
});


















