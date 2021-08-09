function formValidation() {
  var fullName = document.registration.fullName;
  var password = document.registration.password;
  var uname = document.registration.username;
  var confirm_password = document.registration.confirm_password;
  var email = document.registration.email;
  var phoneNo = document.registration.phoneNo;
  if (allLetter(fullName)) {
    if (uname_validation(uname, 5, 12)) {
      if (password_validation(password, 7, 12)) {
        if (allnumeric(phoneNo)) {
          if (ValidateEmail(email)) {
            if (is_confirm_password_match(password, confirm_password)) {
            }
          }
        }
      }
    }
  }
  return false;
}
function allLetter(fullName) {
  var letters = /^[A-Za-z]+$/;
  if (fullName.value.match(letters)) {
    return true;
  } else {
    alert("Fullname must have alphabet characters only");
    fullName.style.borderColor = "red";
    return false;
  }
}
function uname_validation(uname, min, max) {
  var uname_len = uname.value.length;
  if (uname_len == 0 || uname_len >= max || uname_len < min) {
    alert(
      "User Name should not be empty / length be between " + min + " to " + max
    );
    uname.style.borderColor = "red";
    return false;
  }
  return true;
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

function allnumeric(phone) {
  var numbers = /^[0-9]+$/;
  if (phone.value.match(numbers)) {
    return true;
  } else {
    alert("Phone No. must have numeric characters only");
    phone.style.borderColor = "red";
    return false;
  }
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

function is_confirm_password_match(password, confirm_password) {
  if (password == confirm_password) {
    return true;
  } else {
    alert("Password confirmation doesn't match password.");
    return false;
  }
}
