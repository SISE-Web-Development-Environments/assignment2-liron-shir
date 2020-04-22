
$(document).ready(function() {
    $("#welcomeDiv").show();
    $("#loginDiv").hide();
    $("#registerDiv").hide();
    $("#aboutDiv").hide();
    $("#canvesDiv").hide()
});

function welcome(){
    $("#welcomeDiv").show();
    $("#loginDiv").hide();
    $("#registerDiv").hide();
    $("#aboutDiv").hide();
    /*$("#game").hide();*/
    /*$("#userSettings").hide();*/
}

function login(){
    $("#welcomeDiv").hide();
    $("#loginDiv").show();
    $("#registerDiv").hide();
    $("#aboutDiv").hide();
    /*$("#game").hide();*/
    /*$("#userSettings").hide();*/
}

function register(){
    $("#welcomeDiv").hide();
    $("#loginDiv").hide();
    $("#registerDiv").show();
    $("#aboutDiv").hide();
    /*$("#game").hide();*/
    /*$("#userSettings").hide();*/
}

function about(){
    $("#welcomeDiv").hide();
    $("#loginDiv").hide();
    $("#registerDiv").hide();
    $("#aboutDiv").show();
    /*$("#game").hide();*/
    /*$("#userSettings").hide();*/
}