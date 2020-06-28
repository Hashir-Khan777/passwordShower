function see() {
  var pass = document.getElementById("password");
  if (pass.type === "password") {
    pass.type = "text";
    var eye = (document.querySelector(".eye").className = "fas fa-eye eye");
  } else {
    pass.type = "password";
    var eye = (document.querySelector(".eye").className =
      "fas fa-eye-slash eye");
  }
}
