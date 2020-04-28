
// had to call function after page loaded with this addition of the function i think? it wasnt working before i put everything inside another function, has to be page load or soemthing. i will look more into it.
$(function(){

    // when submitting a new burger
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
            console.log("created burger");
            location.reload();
        }
    )
});

// when hitting devour button...
$(".eat").on("click", function(event){
    console.log("eat button hit");
    var id = $(this).data("id");
    console.log(id)
    var newEat = $(this).data("eaten");
    console.log(newEat)
    var newDevourState = {
        devoured: newEat
    };
    console.log(newDevourState)

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
    }).then(
        function() {
            console.log("devoured value changed to", newEat);
            location.reload();
        }
    );
});


})


