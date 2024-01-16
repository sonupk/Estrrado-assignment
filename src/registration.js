$(document).ready(function() {
    $("#registrationForm").validate({
      rules: {
        firstName: {
          required: true,
          minlength: 2
        },
        lastName: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        },
        confirmPassword: {
          required: true,
          equalTo: "#password"
        }
      },
      messages: {
        firstName: {
          required: "Please enter your first name",
          minlength: "Your first name must be at least 2 characters"
        },
        lastName: {
          required: "Please enter your last name",
          minlength: "Your last name must be at least 2 characters"
        },
        email: {
          required: "Please enter your email",
          email: "Please enter a valid email address"
        },
        password: {
          required: "Please enter a password",
          minlength: "Your password must be at least 6 characters"
        },
        confirmPassword: {
          required: "Please confirm your password",
          equalTo: "Passwords do not match"
        }
      },
      submitHandler: function(form) {
        // Handle form submission (example, send data to the server)
        alert("Registration successful!");
      }
    });
  });
  