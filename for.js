alert("guess any number between 1 to 10");
var answer = 5;
var guess = prompt("whats your guess?");
let i=1
while( i< answer ){
    if(answer == guess){
        alert("you guessed correctly");
    }
     else if(guess > answer){
         alert("your guess is too high, try again");
         guess = prompt("whats your guess?");
   
}
     else if(guess < answer){
         alert("your guess is too low, try again");
         guess = prompt("whats your guess?");
}
i++;

   
    
}
