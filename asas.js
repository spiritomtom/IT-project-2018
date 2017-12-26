                            /*function text chng*/
function change() {
document.getElementById("btn").innerHTML = "So, how would you like to die?";

}

                                /*function choice*/
function myFunction() {
    var y = document.getElementById("mySelect").value;
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
