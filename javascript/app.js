var context;
var shape = new Object();
var score;
var pac_color;
var start_time;
//var time_elapsed;
var interval;
var intervalTime;
var mouth_pacman;
var food_remain;
var monsters = [{ x: 1, y: 1, img: "./images/pink.ico", xPrev: 1, yPrev: 1 }, { x: 18, y: 18, img: "./images/red.png", xPrev: 18, yPrev: 18 }, { x: 1, y: 18, img: "./images/blue.ico", xPrev: 1, yPrev: 18 }, { x: 18, y: 1, img: "./images/green.jpg", xPrev: 18, yPrev: 1 }];
var board;
var numOfBall;
var gameKeys = [];
var colorBalls = ["#F996B8", "#CE96F9", "#87F7F5"];
var timeOfGame;
var limitTime;
var numOfMonsters;
var ball5;
var ball15;
var ball25;
var loseGame;
var BallsAte;
var lives;


$(document).ready(function () {
	context = canvas.getContext("2d");
	Start();
});

function game() {
	$("#welcomeDiv").hide();
	$("#loginDiv").hide();
	$("#registerDiv").hide();
	$("#settingDiv").hide();
	$("#canvesDiv").show();
	$("#welcome_user").text("Welcome" + "\u00A0" + user.username + "!");
  }

function Start() {
	game();
	board = new Array();
	score = 0;
	lives = 5;
	BallsAte = 0;
	loseGame = false;
	pac_color = "red";
	//var cnt = 100; //%
	//var pacman_remain = 1;//init pacman
	start_time = new Date();
	food_remain = numOfBall;
	ball5 = 0.6*food_remain;
	ball15 = 0.3*food_remain;
	ball25 = 0.1*food_remain;
	limitTime = timeOfGame;
	board = [
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4],
		[4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 0, 0, 4],
		[4, 0, 4, 0, 4, 0, 4, 0, 0, 4, 0, 4, 0, 4, 0, 0, 4, 0, 0, 4],
		[4, 0, 4, 0, 4, 0, 4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4, 0, 0, 4],
		[4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4],
		[4, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 4],
		[4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 0, 0, 4],
		[4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 4],
		[4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4, 0, 0, 4, 0, 4, 0, 0, 4],
		[4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4],
		[4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4],
		[4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 0, 0, 0, 4],
		[4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 4, 0, 4],
		[4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[4, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4],
		[4, 0, 0, 0, 4, 0, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4],
		[4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 4],
		[4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 4],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]

	];
	/*for (var i = 0; i < 10; i++) {
		//board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 10; j++) {
			if (
				(i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) ||
				(i == 6 && j == 1) ||
				(i == 6 && j == 2)
			) {
				board[i][j] = 4;
			} else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) {
					food_remain--;
					board[i][j] = 1;
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					shape.i = i;
					shape.j = j;
					pacman_remain--;
					board[i][j] = 2;
				} else {
					board[i][j] = 0;
				}
				cnt--;// no criti
			}
		}
	}*/
	var emptyCell = findRandomEmptyCell(board);
	shape.i = emptyCell[0];
	shape.j = emptyCell[1];
	board[emptyCell[0]][emptyCell[1]] = 2; //pacmen

	while (food_remain > 0) {
		emptyCell = findRandomEmptyCell(board);
		if(ball5 >0){
			board[emptyCell[0]][emptyCell[1]] = 5; //food
			ball5--;
			food_remain--;
		}
		if(ball15 >0){
			board[emptyCell[0]][emptyCell[1]] = 15; //food
			ball15--;
			food_remain--;
		}
		if(ball25 >0){
			board[emptyCell[0]][emptyCell[1]] = 25; //food
			ball25--;
			food_remain--;
		}

	}

	keysDown = {};
	addEventListener(
		"keydown",
		function (e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function (e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 100);
	//setTimeout(startTimer(), 1000);
	//startTimer();
	intervalTime = setInterval(startTimer, 1000);
}

function findRandomEmptyCell(board) {
	var i = Math.floor((Math.random() * 19) + 1);
	var j = Math.floor((Math.random() * 19) + 1);
	while (board[i][j] != 0) {
		i = Math.floor((Math.random() * 19) + 1);
		j = Math.floor((Math.random() * 19) + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[38]) {
		return 1;
	}
	if (keysDown[40]) {
		return 2;
	}
	if (keysDown[37]) {
		return 3;
	}
	if (keysDown[39]) {
		return 4;
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = limitTime;
	lblLives.value = lives;
	showSettings();
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 20; j++) {
			var center = new Object();
			center.x = i * 30 + 20;
			center.y = j * 30 + 20;
			if (board[i][j] == 2) {//pacman
				if (mouth_pacman == 2) { //down
					context.beginPath();
					context.arc(center.x, center.y, 10, 0.65 * Math.PI, 0.35 * Math.PI); // half circle
					context.lineTo(center.x, center.y);
					context.fillStyle = pac_color; //color 
					context.fill();
					context.beginPath();
					context.arc(center.x + 4, center.y + 2.6, 1.5, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color 
					context.fill();
				}
				else if (mouth_pacman == 3) { //left
					context.beginPath();
					context.arc(center.x, center.y, 10, 1.15 * Math.PI, 0.85 * Math.PI); // half circle
					context.lineTo(center.x, center.y);
					context.fillStyle = pac_color; //color 
					context.fill();
					context.beginPath();
					context.arc(center.x - 1.5, center.y - 5, 1.5, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color 
					context.fill();
				}
				else if (mouth_pacman == 1) {//up
					context.beginPath();
					context.arc(center.x, center.y, 10, 1.65 * Math.PI, 1.35 * Math.PI); // half circle
					context.lineTo(center.x, center.y);
					context.fillStyle = pac_color; //color 
					context.fill();
					context.beginPath();
					context.arc(center.x + 4, center.y - 2.6, 1.5, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color 
					context.fill();
				}
				else if (mouth_pacman == 4) {//right
					context.beginPath();
					context.arc(center.x, center.y, 10, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
					context.lineTo(center.x, center.y);
					context.fillStyle = pac_color; //color
					context.fill();
					context.beginPath();
					context.arc(center.x + 1.5, center.y - 5, 1.5, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color
					context.fill();
				}
				else {

					context.beginPath();
					context.arc(center.x, center.y, 10, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
					context.lineTo(center.x, center.y);
					context.fillStyle = pac_color; //color
					context.fill();
					context.beginPath();
					context.arc(center.x + 1.5, center.y - 5, 1.5, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color
					context.fill();
				}
			} else if (board[i][j] == 5) {//food- 5ball
				context.beginPath();
				context.arc(center.x, center.y, 7, 0, 2 * Math.PI); // circle
				context.fillStyle = colorBalls[0]; //color
				context.fill();
			}
			else if (board[i][j] == 15) {//food- 15ball
				context.beginPath();
				context.arc(center.x, center.y, 7, 0, 2 * Math.PI); // circle
				context.fillStyle = colorBalls[1]; //color
				context.fill();
			}
			else if (board[i][j] == 25) {//food- 25ball
				context.beginPath();
				context.arc(center.x, center.y, 7, 0, 2 * Math.PI); // circle
				context.fillStyle = colorBalls[2]; //color
				context.fill();
			}
			else if (board[i][j] == 4) {//walls
				context.beginPath();
				context.rect(center.x - 20, center.y - 20, 30, 30);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
	//move the monsters
	/*	for (var i = 0; i < 4; i++) {
			var j = Math.floor((Math.random() * 9) + 1);
			monsters[i].xPrev = monsters[i].x;
			monsters[i].yPrev = monsters[i].y;
		}*/
	//draw monsters
	for (var i = 0; i < numOfMonsters; i++) {
		var mon = monsters[i];
		var pic = new Image();
		pic.width = "30px";
		pic.height = "30px";
		pic.src = mon.img;
		context.drawImage(pic, mon.x * 30, mon.y * 30, 20, 20);
	}
}

function UpdatePosition() {
	$("#lblScore").text(score);
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {//up
			shape.j--;
			mouth_pacman = 1;
		}
	}
	if (x == 2) {
		if (shape.j < 20 && board[shape.i][shape.j + 1] != 4) {//down
			shape.j++;
			mouth_pacman = 2;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {//left
			shape.i--;
			mouth_pacman = 3;
		}
	}
	if (x == 4) {
		if (shape.i < 20 && board[shape.i + 1][shape.j] != 4) {//right
			shape.i++;
			mouth_pacman = 4;
		}
	}
	if (board[shape.i][shape.j] == 5) {//food- ball 5 points
		score=score+5;
		BallsAte++;
	}
	else if(board[shape.i][shape.j] == 15){//food- ball 15 points
		score=score+15;
		BallsAte++;
	}
	else if(board[shape.i][shape.j] == 25){//food- ball 25 points
		score=score+25;
		BallsAte++;
	}
	board[shape.i][shape.j] = 2;
	/*var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}*/
	if (BallsAte == numOfBall) {
		window.clearInterval(interval);
		//window.alert("Game completed");
		gameOver();
	} else {
		Draw();
	}
}

function showSettings(){
	lblUp.value = gameKeys[0];
	lblDown.value = gameKeys[1];
	lblRight.value = gameKeys[2];
	lblLeft.value = gameKeys[3];
	lblBalls.value = numOfBall;
	lblBall5.value = colorBalls[0];
	lblBall15.value = colorBalls[1];
	lblBall25.value = colorBalls[2];
	lblMonsters.value = numOfMonsters;
}
/*timer of game*/

function startTimer(){
	//var timer = setInterval(function(){
		limitTime--;
		lblTime.value = limitTime;
		if (limitTime ==0) {
			gameOver();
		}
	//}, 1000);
  }
  function gameOver(){
	var score=document.getElementById("lblScore");
	if(loseGame){
		alert("Loser!");
	}
	else if(score.value<100){
	  alert("You are better than "+score.value,"points!");
	}
	else{
	  alert("Winner!!!");
	}
	//clearInterval(timer);
  }

