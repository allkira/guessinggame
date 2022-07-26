var randNum = Math.floor( 100*Math.random() ) +1;
    var numGuesses = 0;

    function gameTime()
    {   
        var guess = document.getElementById("guess").value;
        var status = document.getElementById("status"); 

        numGuesses++;

        if(guess == "")
        {
            alert("You did not guess a number!")
            numGuesses--;
        }
        else if(guess == randNum)
            status.value += (guess + " was the right number! It only took you " + numGuesses + " tries" + "\r")
        else if(guess > randNum)
            status.value += (guess + " is too high!" + "\r")
        else    
            status.value += (guess + " is too low!" + "\r")

        document.getElementById("guess").value = "";
    }

    function reset()
    {
        randNum = Math.floor( 100*Math.random() ) +1;
        numGuesses = 0;
        document.getElementById("guess").value = "";
        document.getElementById("status").value = "";
    }

    function quit()
    {
        document.getElementById("status").value += ("The correct number was " + randNum + "!\r")
    }