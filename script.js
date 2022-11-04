"use strict";

// const loginUsername = document.querySelector(".userName");

// console.log(loginUsername);

document.querySelector(".loginSubmit").addEventListener("click", function () {
  const user = document.querySelector(".loginUsername").value;
  const number = document.querySelector(".loginPhoneNumber").value;
  const otp = document.querySelector(".login-otp").value;

  if (user == "") {
    document.querySelector(".username").innerHTML =
      "**Please fill the username feild";
    return false;
  } else if (user.length <= 2 || user.length > 20) {
    document.querySelector(".username").innerHTML =
      "**Username Length must be between 2 & 20";
    return false;
  } else if (!isNaN(user)) {
    document.querySelector(".username").innerHTML = "**Username must be latter";
    return false;
  } else {
    document.querySelector(".username").innerHTML = "";
  }

  if (number == "") {
    document.querySelector(".phoneNumber").innerHTML =
      "**Please fill the phone number feild";
    return false;
  }
  if (number.length != 10) {
    document.querySelector(".phoneNumber").innerHTML =
      "**Phoner Number must be 10 digit";
    return false;
  }
  if (!isNaN(number)) {
    document.querySelector(".phoneNumber").innerHTML =
      "** Please Enter Vaild Number";
    return false;
  }
  // if {
  //   document.querySelector(".phoneNumber").innerHTML = "";
  //   return false;
  // }

  if (otp == "") {
    document.querySelector(".oneTimePassword").innerHTML =
      "**Please fill the OTP feild";
    return false;
  } else {
    document.querySelector(".oneTimePassword").innerHTML = "";
    return false;
  }
});
