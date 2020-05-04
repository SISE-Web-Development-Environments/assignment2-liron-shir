var context;
var shape = new Object();
var score;
var pac_color;
//var start_time;
//var time_elapsed;
var interval;
var intervalTime;
var mouth_pacman;
var food_remain;
var monsters = [{ x: 1, y: 1, img: "./images/pink.ico", xPrev: 1, yPrev: 1 }, { x: 18, y: 18, img: "./images/red.png", xPrev: 18, yPrev: 18 }, { x: 1, y: 18, img: "./images/blue.ico", xPrev: 1, yPrev: 18 }, { x: 18, y: 1, img: "./images/green.jpg", xPrev: 18, yPrev: 1 }];
var startMonsters = [{ x: 1, y: 1, img: "./images/pink.ico", xPrev: 1, yPrev: 1 }, { x: 18, y: 18, img: "./images/red.png", xPrev: 18, yPrev: 18 }, { x: 1, y: 18, img: "./images/blue.ico", xPrev: 1, yPrev: 18 }, { x: 18, y: 1, img: "./images/green.jpg", xPrev: 18, yPrev: 1 }];
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
var lifes;
var gameInterval;

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
	lifes = 5;
	BallsAte = 0;
	loseGame = false;
	pac_color = "red";
	//var cnt = 100; //%
	//var pacman_remain = 1;//init pacman
	//start_time = new Date();
	//start_time.setSeconds(timeOfGame)
	food_remain = numOfBall;
	limitTime = timeOfGame;
	ball5 = 0.6 * food_remain;
	ball15 = 0.3 * food_remain;
	ball25 = 0.1 * food_remain;
	board = [
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4],
		[4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 0, 0, 4],
		[4, 0, 4, 0, 0, 0, 4, 0, 0, 4, 0, 4, 0, 4, 0, 0, 4, 0, 0, 4],
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

	initPacmen();

	while (food_remain > 0) {
		emptyCell = findRandomEmptyCell(board);
		if (ball5 > 0) {
			board[emptyCell[0]][emptyCell[1]] = 5; //food
			ball5--;
		}
		else if (ball15 > 0) {
			board[emptyCell[0]][emptyCell[1]] = 15; //food
			ball15--;
		}
		else if (ball25 > 0) {
			board[emptyCell[0]][emptyCell[1]] = 25; //food
			ball25--;
		}
		food_remain--;

	}

	keysDown = {};
	addEventListener(
		"keydown",
		function (e) {
			keysDown[e.code] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function (e) {
			keysDown[e.code] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 150);
	//intervalTime =  setTimeout(startTimer, 1000);
	intervalTime = setInterval(startTimer, 3 * 1000);
	gameInterval = setInterval(movingMonsters, 1000);
}

function initPacmen() {
	var emptyCell = findRandomEmptyCell(board);
	shape.i = emptyCell[0];
	shape.j = emptyCell[1];
	board[emptyCell[0]][emptyCell[1]] = 2; //pacmen
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
	if (keysDown[gameKeys[0]]) {
		return 1;
	}
	if (keysDown[gameKeys[1]]) {
		return 2;
	}
	if (keysDown[gameKeys[2]]) {
		return 3;
	}
	if (keysDown[gameKeys[3]]) {
		return 4;
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = limitTime;
	//lblTime.value = time_elapsed;
	lblLifes.value = lifes;
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
				var wall = new Image();
				wall.src = "./images/wall3.jpg";
				context.drawImage(wall, center.x - 20, center.y - 20, 30, 30);
				/*context.beginPath();
				context.rect(center.x - 20, center.y - 20, 30, 30);
				context.fillStyle = "grey"; //color
				context.fill();*/
			}
		}
	}
	//movingMonsters();
	DrawMonsters();
}
function bestMoveForMonster(monster) {
	var optionalSteps = new Array();
	var max = Number.MAX_SAFE_INTEGER;
	var bestMove;
	var step;
	var dis;
	optionalSteps.push([monster.x - 1, monster.y]);
	optionalSteps.push([monster.x + 1, monster.y]);
	optionalSteps.push([monster.x, monster.y + 1]);
	optionalSteps.push([monster.x, monster.y - 1]);
	for (var i = 0; i < optionalSteps.length; i++) {
		step = optionalSteps[i];
		if (board[step[0]][step[1]] != 4) {
			dis = Math.sqrt(Math.pow(step[0] - shape.i, 2) + Math.pow(step[1] - shape.j, 2));
			if (dis < max && (monster.xPrev != step[0] || monster.yPrev != step[1])) {
				max = dis;
				bestMove = { x: step[0], y: step[1] };
			}
		}
	}
	return bestMove;
}

function movingMonsters() {
	var best;
	for (var i = 0; i < numOfMonsters; i++) {
		best = bestMoveForMonster(monsters[i]);
		monsters[i].xPrev = monsters[i].x;
		monsters[i].yPrev = monsters[i].y;
		monsters[i].x = best.x;
		monsters[i].y = best.y;
	}
}

function DrawMonsters() {
	for (var i = 0; i < numOfMonsters; i++) {
		var center = new Object();
		var monster = monsters[i];
		center.x = monster.x * 30 + 20;
		center.y = monster.y * 30 + 20;
		var monster_img = new Image();
		monster_img.width = "30px";
		monster_img.height = "30px";
		monster_img.src = monster.img;
		context.drawImage(monster_img, center.x - 20, center.y - 20, 30, 30);
		if (monster.x == shape.i && monster.y == shape.j) {
			monsterHitPacmen();

		}
	}
}

function monsterHitPacmen() {
	if (lifes > 1) {
		lifes--;
		lblLifes.value = lifes;
		score = score - 10;
		lblScore.value = score
		initGameAfterHit();
	}
	else {
		loseGame = true;
		gameOver()
	}
}

function initGameAfterHit() {
	board[shape.i][shape.j] = 0;
	initPacmen();
	for(var i=0; i<numOfMonsters; i++){
		monsters[i].x = startMonsters[i].x;
		monsters[i].xPrev = startMonsters[i].xPrev;
		monsters[i].y = startMonsters[i].y;
		monsters[i].yPrev = startMonsters[i].yPrev;
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
		score = score + 5;
		BallsAte++;
	}
	else if (board[shape.i][shape.j] == 15) {//food- ball 15 points
		score = score + 15;
		BallsAte++;
	}
	else if (board[shape.i][shape.j] == 25) {//food- ball 25 points
		score = score + 25;
		BallsAte++;
	}
	board[shape.i][shape.j] = 2;
	/*var currentTime = new Date();
	time_elapsed = (start_time - currentTime.getSeconds) / 1000;
	if (time_elapsed <= 0)
		gameOver();

	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}*/
	if (BallsAte == numOfBall) {
		//window.clearInterval(interval);
		//window.alert("Game completed");
		gameOver();
	} else {
		Draw();
	}
}

function showSettings() {
	lblUp.value = gameKeys[0];
	lblDown.value = gameKeys[1];
	lblLeft.value = gameKeys[2];
	lblRight.value = gameKeys[3];
	lblBalls.value = numOfBall;
	lblBall5.value = colorBalls[0];
	lblBall5.style["background-color"] = colorBalls[0];
	lblBall15.value = colorBalls[1];
	lblBall15.style["background-color"] = colorBalls[1];
	lblBall25.value = colorBalls[2];
	lblBall25.style["background-color"] = colorBalls[2];
	lblMonsters.value = numOfMonsters;
}
/*timer of game*/

function startTimer() {
	//setInterval(function(){
	limitTime--;
	//lblTime.value = limitTime;
	if (limitTime == 0) {
		gameOver();
	}
	//}, 4*1000);
}
function gameOver() {
	var score = document.getElementById("lblScore");
	if (loseGame) {
		alert("Loser!");
	}
	else if (score.value < 100) {
		alert("You are better than " + score.value, "points!");
	}
	else {
		alert("Winner!!!");
	}
	//clearInterval(intervalTime);
}

