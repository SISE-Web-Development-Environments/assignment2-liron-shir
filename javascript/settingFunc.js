
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
                checkColor1: true
            },
            fifteenBall: {
                checkColor2: true
            },
            twentyFiveBall: {
                checkColor3: true
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
                checkColor1: "Each ball should have a different color"
            },
            fifteenBall: {
                checkColor2: "Each ball should have a different color"
            },
            twentyFiveBall: {
                checkColor3: "Each ball should have a different color"
            }
        },
        submitHandler: function (form, event) {
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

window.addEventListener("keydown", function(event) {
    var control = false;
    if(event.target.id === "up"){
        gameKeys[0] = event.code;
        control=true;
      }
    if(event.target.id === "down"){
        gameKeys[1] = event.code;  
        control=true;
      } 
    if(event.target.id === "left"){
        gameKeys[2] = event.code;
        control=true;
      }
      if(event.target.id === "right"){
        gameKeys[3] = event.code;
        control=true;
      }
    if(control)
      event.target.value = event.code;
  }, true);

jQuery.validator.addMethod("checkColor1", function (value, element) {
    color1 = $("#fiveBall").val();
    color2 = $("#fifteenBall").val();
    color3 = $("#twentyFiveBall").val();
    return !(color1 == color2 || color1 == color3);
});
jQuery.validator.addMethod("checkColor2", function (value, element) {
    color1 = $("#fiveBall").val();
    color2 = $("#fifteenBall").val();
    color3 = $("#twentyFiveBall").val();
    return !(color1 == color2 || color2 == color3);
});
jQuery.validator.addMethod("checkColor3", function (value, element) {
    color1 = $("#fiveBall").val();
    color2 = $("#fifteenBall").val();
    color3 = $("#twentyFiveBall").val();
    return !(color1 == color3 || color2 == color3);
});

/*random settings by buttom*/
function randomSettings(){
    $("#up")[0].value="ArrowUp";
    $("#down")[0].value="ArrowDown";
    $("#right")[0].value= "ArrowRight";
    $("#left")[0].value= "ArrowLeft";
    gameKeys[0] = $("#up")[0].value;
    gameKeys[1] = $("#down")[0].value;
    gameKeys[2] = $("#left")[0].value;
    gameKeys[3] = $("#right")[0].value;
    $("#fiveBall")[0].value=getRandomColor();
    $("#fifteenBall")[0].value=getRandomColor();
    $("#twentyFiveBall")[0].value=getRandomColor();
    colorBalls[0] = $("#fiveBall")[0].value;
    colorBalls[1] = $("#fifteenBall")[0].value;
    colorBalls[2] = $("#twentyFiveBall")[0].value;
    $("#numberOfBalls")[0].value=randomNumberOfBalls();
    numOfBall = $("#numberOfBalls").val();
    $("#timeOfGame")[0].value = 60 + Math.floor((Math.random() * 100));
    timeOfGame = $("#timeOfGame").val();
    $("#numberOfMonsters")[0].value=  randonNumberOfMonsters();
    numOfMonsters = $("#numberOfMonsters").val();
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


