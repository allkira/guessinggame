console.log("welcome");

var y = Math.floor(Math.random() * 10 + 1);

var guess= 6;
document.getElementId("submitguess").onclick = function(){
    var x = getElementId("guessfield").value;
    if (x === y){
        alert("congratulations");
    }
    else if(x > y){
        guess ++;
        alert('the number is greater,try again');
    }
    else if(x < y){
        guess ++;
        alert("the number is less than,try again");
    }
}
