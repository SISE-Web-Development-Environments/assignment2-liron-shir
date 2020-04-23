
$(document).ready(function() {
    $("#welcomeDiv").show();
    $("#loginDiv").hide();
    $("#registerDiv").hide();
    $("#aboutDiv").hide();
    $("#canvesDiv").hide()
});
$.validator.setDefaults({
    submitHandler: function() {
        alert("submitted!");
    }
});
/*
registration validation using the jquery validation plugin
*/
$().ready(function () {
    $("#signupForm").validate({
      rules: {
        firstName:{ 
          required: true,
          lettersonly: true
        },
        lastName:{
          required: true,
          lettersonly: true
        },
        password:{
          required: true,
          minlength:8,
          numAndLetter:true
        },
        email:{
          validEmail:true
        },
        username:{
          required:true
        },
        birth:{
          required:true,
          legalDate: true
        }
      },
      messages: {
        firstName:{
          required: "Please enter your first name"
        },
        lastName:{
          required: "Please enter your last name"
        },
        password:{
          required: "Please enter a password",
          minlength:"The password must be at least 8 characters long",
          numAndLetter:"Your password must contain at least one letter and one number"
        },
        email:{
          email:"Please insert a valid email address"
        },
        username:{
          required: "Please enter username"
        },
        birth:{
          required: "Please enter your date of birth",
          legalDate: "Please enter a date that is before today"
        }
      },
      submitHandler: function(form,event){
        var newUser = Object.create(user);
        var temp = $("#username");
        newUser.username = $("#username").val();
        newUser.password = $("#password").val();
        newUser.firstName = $("#firstName").val();
        newUser.lastName = $("#lastName").val();
        newUser.email = $("#email").val();
        newUser.birth = $("#birth").val();
        users.push(newUser);
        clearFields();
        alert("User has been created");
        event.preventDefault();
        
      }
    });
  });
  /*
method definition for jquery validation plugin.
validates that the input value contains at least one letter and one number
*/
jQuery.validator.addMethod("numAndLetter", function(value, element) {
    var chars = /[a-zA-Z]/g;
    var numbers = /[0-9]/g;
    return chars.test(value) && numbers.test(value);
  }, "Password must contain at least one letter and one number");
  
  /*
  method definition for jquery validation plugin.
  validates that the input value is valid email address
  */
  jQuery.validator.addMethod("validEmail", function(value, element) {
    var emailPattern =  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/g;
    return emailPattern.test(value);
  }, "Invalid Email address");
  
  /*
  method definition for jquery validation plugin.
  validates that the input value contains only letters
  */
  jQuery.validator.addMethod("lettersonly", function(value, element) {
    var numbers = /[0-9]/g;
    return !numbers.test(value);
  }, "Your name should contain only letter");
  
  /*
    method definition for jquery validation plugin.
    validates that the date input is before today
  */
  jQuery.validator.addMethod("legalDate", function(value, element) {
    var enteredDate = new Date(value);
    var ageDifMs = Date.now() - enteredDate.getTime();
      return ageDifMs>0;
  }, "Please enter a date that is before today");

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

