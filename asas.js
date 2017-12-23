function change() {
document.getElementById("btn").innerHTML = "You. Are. Already. Dead. 😈";

}


var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function mainFunction() {

    change();
    onClick();



}
