function formValidation() {
  var email = document.login_form.email;
  var password = document.login_form.password;

  if (ValidateEmail(email)) {
    if (password_validation(password, 7, 12)) {
    }
  }
  return false;
}

function ValidateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    email.style.borderColor = "red";
    return false;
  }
}

function password_validation(password, min, max) {
  var password_len = password.value.length;
  if (password_len == 0 || password_len >= max || password_len < min) {
    alert(
      "Password should not be empty / length be between " + min + " to " + max
    );
    password.style.borderColor = "red";
    return false;
  }
  return true;
}
