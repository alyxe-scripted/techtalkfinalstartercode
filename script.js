// JavaScript File
// JavaScript File
$( document ).ready(function() {


$("#signUp").click(function() {
    var name = $("input").val();
    $("#confirmation").append(name +  " you are confirmed to receive treats!");
    
});

$("#answer").click(function() {
    var response = $("#yesNo").val();
    if (response=== "yes") {
        alert("you rock!") {
            else if(response === "no") {
                alert("Wrong answer!")
            } else {
                alert("Choose again!")
            }
        }
    }
}


});