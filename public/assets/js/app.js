
// this is so that the functions run after the page has loaded
$(function(){

    // when submitting a new burger, create a burger obj and send it to the DB
    $(".create-burger").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: false,
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function(){
            location.reload();
        }
    )
});

// when hitting devour button, grab info off that button then send a PUT/update request to the DB
$(".eat").on("click", function(event){
    var id = $(this).data("id");
    var newEat = $(this).data("eaten");
    var newDevourState = {
        devoured: newEat
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
    }).then(
        function() {
            location.reload();
        }
    );
});


})


