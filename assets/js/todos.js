//check off specific todos by clicking
//using on here instead of click becuase it will apply code to all future todos
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Clcik on X to delete Todo
$("ul").on("click", "span", function() {
  //this is needed to remove the entire li and not just the span.
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  //this stops event from bubbling up to other elements.
  event.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
  if (event.which === 13) {
    //grab new todo text from input
    let todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(
      "<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
