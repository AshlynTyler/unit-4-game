

var gemCount = 0;

var maxGem;

var wins = 0;

var losses = 0;

var gameOver = false;


//start/reset the game

function reset(){
    gameOver = false;

    $("#points").css("color","white");

    $("#game-over").css("color","white");

    $("#game-over").text("___");

    gemCount = 0;

    maxGem = Math.floor(Math.random() * 102 + 19);

    $(".gem").each(function(){
        $(this).attr("value", String(Math.floor(Math.random() * 12 + 1)));
    })

    $("#points").text(String(gemCount) + " / " + String(maxGem));
}

reset();


//give gem points when clicked, then see if the game has ended.
//If the game has already ended, restart the game.

$(".gem").on("click",function(){

    if(gameOver){
        reset();
    }

    else{
        gemCount +=  parseInt($(this).attr("value"));

        if(gemCount === maxGem){
            gameOver = true;

            wins++;

            $("#wins").text("wins: " + String(wins));

            $("#points").css("color","#55ff55");

            $("#game-over").text("Nice!  Click any gem to restart.");

            $("#game-over").css("color","#55ff55");
        }

        if(gemCount > maxGem){
            gameOver = true;

            losses++;

            $("#losses").text("wins: " + String(losses));

            $("#points").css("color","#ff5555");

            $("#game-over").text("You went too hight!  Crap!  Click any gem to restart.");

            $("#game-over").css("color","#ff5555");
        }

        $("#points").text(String(gemCount) + " / " + String(maxGem));
    }
});