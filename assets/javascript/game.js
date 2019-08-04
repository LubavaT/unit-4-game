$(document).ready(function(){

    // Select a random number and map it to the random number field
    
    function anyNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
    
    // Generate random numbers

    var targetNumber = anyNumber(19,120);
    var amethyst = anyNumber(1,12);
    var emerald = anyNumber(1,12);
    var diamond = anyNumber(1,12);
    var ruby = anyNumber(1,12);

    console.log('amethyst: ' + amethyst + ', emerald: ' + emerald + ', diamond: ' + diamond + ', ruby: ' + ruby);

    $( '#randomNumber' ).text(targetNumber);
    
    // Declare counter variables and start at zero

    var counter = 0;
    var wins = 0;
    var losses = 0;

    // When user clicks on each gem, the gem value will be added to the counter

    $( '#amethyst' ).click(function() {
        let add = counter + amethyst;
        counter = add;
        console.log(counter);
        $( '#totalScore' ).text(counter);
        winorLose();
        });

    $( '#ruby' ).click(function() {
        let add = counter + ruby;
        counter = add;
        console.log(counter);
        $( '#totalScore' ).text(counter);
        winorLose();
        });

    $( '#diamond' ).click(function() {
        let add = counter + diamond;
        counter = add;
        console.log(counter);
        $( '#totalScore' ).text(counter);
        winorLose();
        });

    $( '#emerald' ).click(function() {
        let add = counter + emerald;
        counter = add;
        console.log(counter);
        $( '#totalScore' ).text(counter);
        winorLose();
        });

    // Target is reached or exceeded.

    function winorLose () {
        if (counter === targetNumber) {
            wins++;
            $('#totalWins').text(wins);
            alert("You win!  (" + counter + ")");
            reset();
        }

        else if (counter >= targetNumber) {
            losses++;
            $('#totalLosses').text(losses);
            alert("You lose!!  (" + counter + ")");
            reset();
        };
        
    }


        // Game resets counter back to zero and generates new numbers

    function reset() {
        targetNumber = anyNumber(19,120);
        amethyst = anyNumber(1,12);
        emerald = anyNumber(1,12);
        diamond = anyNumber(1,12);
        ruby = anyNumber(1,12);
        console.log('amethyst: ' + amethyst + ', emerald: ' + emerald + ', diamond: ' + diamond + ', ruby: ' + ruby);
        $( '#randomNumber' ).text(targetNumber);
        counter = 0;
        $( '#totalScore' ).text(counter);
    };
});
