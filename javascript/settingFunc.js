
/* game settings */

function myFunction(val) {
    document.getElementById("BallsNumber").innerHTML = val;
}

$.validator.setDefaults({
    submitHandler: function () {
        alert("submitted!");
    }
});

$().ready(function () {
    // validate the comment form when it is submitted
    $("#commentForm").validate();

    $("#setting").validate({
        rules: {
            up: {
                required: true
            },
            down: {
                required: true
            },
            right: {
                required: true
            },
            left: {
                required: true
            },
            fiveBall: {
                checkColor: true
            },
            fifteenBall: {
                checkColor: true
            },
            twentyFiveBall: {
                checkColor: true
            },
        },
        messages: {
            up: {
                required: "Please enter up move key"
            },
            down: {
                required: "Please enter down move key"
            },
            right: {
                required: "Please enter right move key"
            },
            left: {
                required: "Please enter left move key"
            },
            fiveBall: {
                checkColor: "Each ball should have a different color"
            },
            fifteenBall: {
                checkColor: "Each ball should have a different color"
            },
            twentyFiveBall: {
                checkColor: "Each ball should have a different color"
            }
        },
        submitHandler: function (form, event) {
            gameKeys[0] = $("#up").val();
            gameKeys[1] = $("#down").val();
            gameKeys[2] = $("#right").val();
            gameKeys[3] = $("#left").val();
            colorBalls[0] = $("#fiveBall").val();
            colorBalls[1] = $("#fifteenBall").val();
            colorBalls[2] = $("#twentyFiveBall").val();
            numOfBall = $("#numberOfBalls").val();
            timeOfGame = $("#timeOfGame").val();
            numOfMonsters = $("#numberOfMonsters").val();
            Start();
        }
    });
});

jQuery.validator.addMethod("checkColor", function (value, element) {

    return !(colorBalls[0] == colorBalls[1] && colorBalls[0] == colorBalls[2] && colorBalls[1] == colorBalls[2]);
});

window.addEventListener("keydown", function (event) {
    var key = event.which || event.keyCode || event.keydown;
    if (event.target.id === "up") {
        document.getElementById("up").innerHTML = key;
        gameKeys[0] = key;
    }
    if (event.target.id === "down") {
        document.getElementById("down").innerHTML = key;
        gameKeys[1] = key;
    }
    if (event.target.id === "right") {
        document.getElementById("right").innerHTML = key;
        gameKeys[2] = key;
    }
    if (event.target.id === "left") {
        document.getElementById("left").innerHTML = key;
        gameKeys[3] = key;
    }
    return true;
});
/*random settings by buttom*/
function randomSettings(){
    $("#up")[0].value="ArrowUp";
    $("#down")[0].value="ArrowDown";
    $("#right")[0].value= "ArrowRight";
    $("#left")[0].value= "ArrowLeft";
    gameKeys[0] = $("#up")[0].value;
    gameKeys[1] = $("#down")[0].value;
    gameKeys[2] = $("#right")[0].value;
    gameKeys[3] = $("#left")[0].value;
    $("#fiveBall")[0].value=getRandomColor();
    $("#fifteenBall")[0].value=getRandomColor();
    $("#twentyFiveBall")[0].value=getRandomColor();
    colorBalls[0] = $("#fiveBall")[0].value;
    colorBalls[1] = $("#fifteenBall")[0].value;
    colorBalls[2] = $("#twentyFiveBall")[0].value;
    numOfBall = randomNumberOfBalls();
    timeOfGame = 60 + Math.floor((Math.random() * 100));
    numOfMonsters = randonNumberOfMonsters();
    Start();
}

function randomNumberOfBalls(){
    var numBalls = '56789';
    var ballsNumber= '';
    for (var i = 0; i < 2; i++) {
        ballsNumber += numBalls[Math.floor(Math.random() * 5)];
      }
      return ballsNumber;
}

function randonNumberOfMonsters(){
    var numMonsters = '123';
    var monstersNumber='';
    for (var i = 0; i < 1; i++) {
        monstersNumber += numMonsters[Math.floor(Math.random() * 3)];
      }
      return monstersNumber;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


