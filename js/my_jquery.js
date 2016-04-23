/*
* This jquery is working on index.html
* */

/****FIRST EXAMPLE***
 * You can uncomment this example to play with
$(document).ready(function(){
    $("#player").click(function(){ //This function will increase 'margin-left' in 5px every click over the square
        //First we get the current margin-left
        var currentMarginLeft = parseInt($("#player").css('margin-left'));
        //Update 'margin-left' with 5px more
        $("#player").css('margin-left', (5+currentMarginLeft)+'px');
    });
});
*/

/*******YOUR EXECERCISE************/
/*
Following the example above, every 10seconds
the jquery should update margin-left with 5px more
*/



