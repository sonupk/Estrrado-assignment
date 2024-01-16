$(document).ready(function() {
    $("#loginForm").validate({
      rules: {
        username: {
          required: true
        },
        password: {
          required: true
        }
      },
      messages: {
        username: {
          required: "Please enter your username"
        },
        password: {
          required: "Please enter your password"
        }
      },
      submitHandler: function(form) {
        // Handle form submission (send data to the server)
        const formData = $(form).serialize();
        $.ajax({
          url: 'http://localhost:3000/login', 
          type: 'POST',
          data: formData,
          success: function(response) {
            alert("Login successful!");
            // Redirect upon successful login
          },
          error: function(xhr, status, error) {
            alert("Login failed. " + xhr.responseText);
          }
        });
      }
    });
  });
  