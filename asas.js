                            /*function text chng*/
function change() {
document.getElementById("btn").innerHTML = "So, how would you like to die?";

}

                                /*function choice*/
function myFunction() {
    var y = document.getElementById("select").value;
    document.getElementById("result").innerHTML = y ;
}


                                            /*img scale change func*/
function bigImg(x) {                            

    x.style.height ="290px";
    x.style.width ="290px";
}

function normalImg(x) {
    x.style.height = "250px";
    x.style.width = "250px";
}

function one() {
    var newButton = '<select id="select" onchange="myFunction()">Ma nema jeff<option value ="">▼ ▼ ▼ ▼ ▼ ▼ <option value="That is the most requested one , you are boring.">By a headshot<option value="That is my favorite, I respekt you , gentlemen.">Throat slitting<option value="Quite cruel , I can respekt that.">Bone cracking<option value="You enjoy hurting yourself , dont you?">Burnt alive</select>'; 

    

    document.getElementById("a").innerHTML =  newButton;

}

function main() {
    one();
    change();
}
