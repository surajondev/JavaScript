$("document").ready(function(){
    $.validator.addMethod("email", function(value, element) {
        return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(value);
    }, "Please Enter A Valid Email");

    $("#requires-validation").validate({
        rules : {
          Name : {
            required : true 
        },
        email : "required email",
        position :{
            required : true
        },
        password :{
            required : true,
            minlength : 5
        },
        gender:{
            required : true
        },
        confirm_password:{
            required : true,
            equalTo : "#password"
        },
        confirm :{
            required : true 
        }
      },
      messages :{
        Name : {
            required : "Please Enter A Name"
        },
        position :{
            required : "Enter Your Position"
        },
        email:{
          required : "Please Enter Email"
        },
        gender:{
            required : "Please Enter Your Gender"
        }
        ,
        password :{
            required : "Please Enter A Password",
            minlength : "The Minimum Length Of A Password Should be 5"
        },
        confirm_password :{
            required : "Please Confirm Your Password",
            equalTo : "Does Not Match With The Password"
        },
        confirm :{
            required : "Not Accepted"
        }
      }
    })
})