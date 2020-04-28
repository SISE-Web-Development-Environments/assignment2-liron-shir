
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
            /*var variables = [];
            variables[0] = $("#up").val();
            variables[1] = $("#down").val();
            variables[2] = $("#right").val();
            variables[3] = $("#left").val();
            variables[4] = $("#fiveBall").val();
            variables[5] = $("#fifteenBall").val();
            variables[6] = $("#twentyFiveBall").val();
            variables[7] = $("#numberOfBalls").val();
            variables[8] = $("#timeOfGame").val();
            variables[9] = $("#numberOfMonsters").val();*/
            Start(updateVaribales(form));
        }
    });
});

function updateVaribales(form){
            variables[5] = $("#fifteenBall").val();
            return [$("#up").val(), $("#down").val(),$("#right").val(),$("#left").val(),$("#fiveBall").val(),
            $("#fifteenBall").val(),$("#twentyFiveBall").val(),$("#numberOfBalls").val(),$("#timeOfGame").val(),$("#numberOfMonsters").val()];
}

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

