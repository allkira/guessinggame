console.log("welcome albert");//shows the comment welcome albert in the console
var randomNum= Math.floor(Math.random() * 51);

function guessNumber() {
    console.log('randomNum',randomNum);

    guess = prompt ("please enter a number between o and 50");
    console.log("your guess is : " + guess);
    

    if (guess < randomNum){
        window.alert("your guess is low, try again");
        guessNumber()
    }
    else if(guess > randomNum){
        window.alert("your guess is too high, try again");
        guessNumber()
    }
    else if(guess == randomNum){
        window.alert("congratulations");
    }



}
