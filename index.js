// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDu4xsIBsoMUJ_kd3qnnPVCb6gwV5QaDNo",
  authDomain: "autentificacion-60f25.firebaseapp.com",
  databaseURL: "https://autentificacion-60f25-default-rtdb.firebaseio.com",
  projectId: "autentificacion-60f25",
  storageBucket: "autentificacion-60f25.appspot.com",
  messagingSenderId: "206130119070",
  appId: "1:206130119070:web:beac7daf89a3835be9968f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function
function register() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  full_name = document.getElementById("full_name").value;
  favourite_song = document.getElementById("favourite_song").value;
  milk_before_cereal = document.getElementById("milk_before_cereal").value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is Outta Line!!");
    return;
    // Don't continue running the code
  }
  if (
    validate_field(full_name) == false ||
    validate_field(favourite_song) == false ||
    validate_field(milk_before_cereal) == false
  ) {
    alert("One or More Extra Fields is Outta Line!!");
    return;
  }

  // Move on with Auth
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        email: email,
        full_name: full_name,
        favourite_song: favourite_song,
        milk_before_cereal: milk_before_cereal,
        last_login: Date.now()
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).set(user_data);

      // DOne
      alert("User Created!!");
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Set up our login function
function login() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is Outta Line!!");
    return;
    // Don't continue running the code
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        last_login: Date.now()
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);

      if (
        validate_email(email) == true ||
        validate_password(password) == true
      ) {
        var d = [
          '<!DOCTYPE html>\r\n<html><head>\r\n  <meta http-equiv="content-type" content="txt/html; charset=utf-8" />\r\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">\r\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha256-L/W5Wfqfa0sdBNIKN9cG6QA5F2qx4qICmU2VgLruv9Y=" crossorigin="anonymous">\r\n  <title>Shorter URL (CloudFlare Worker Site)</title>\r\n  <style>\r\n    * {\r\n      margin: 0;\r\n      padding: 0;\r\n      cursor: default;\r\n    }\r\n    html, body {\r\n      height: 100%;\r\n    }\r\n    body {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-align: center;\r\n      align-items: center;\r\n      -webkit-box-pack: center;\r\n      justify-content: center;\r\n      vertical-align: center;\r\n      flex-wrap: wrap;\r\n      align-content: center;\r\n\r\n      color: #2a2b2c;\r\n      background-color: #ebedee;\r\n      overflow: hidden;\r\n    }\r\n    .card {\r\n      background-color: transparent;\r\n      width: 768px;\r\n    }\r\n    .card-text {\r\n      text-align: center;\r\n    }\r\n    .card-text > a {\r\n      text-decoration: none;\r\n      color: #007bff;\r\n    }\r\n    .card-text > a {\r\n      cursor: pointer;\r\n    }\r\n    .form-control {\r\n        cursor: auto;\r\n    }\r\n    @media (max-width: 769px) {\r\n      .card {\r\n        width: 80%;\r\n      }\r\n    }\r\n    @media (max-width: 420px) {\r\n      .card {\r\n        width: 95%;\r\n      }\r\n    }\r\n    @media (prefers-color-scheme: dark) { \r\n      body {\r\n        color: #d9d9d9; \r\n        background: #1b1b1b;\r\n      }\r\n      .card {\r\n        background-color: #252d38;\r\n      }\r\n    } \r\n  </style>\r\n  \r\n  \r\n</head>\r\n<body>\r\n  <div class="card">\r\n    <h5 class="card-header"Shorten your URLs!</h5>\r\n    <div class="card-body">\r\n      <h5 class="card-title">Please enter the long URL to be shortened :</h5>\r\n      <div class="input-group mb-3">\r\n        <input type="text" class="form-control" placeholder="Example: https://blog.51sec.org/" id="text">\r\n        <div class="input-group-append">\r\n          <button class="btn btn-primary" type="button" onclick=\'shorturl()\' id="searchbtn">Shorten it</button>\r\n        </div>\r\n      </div>    \r\n      <div class="card-text">\r\n        <a href="https://github.com/51sec/Url-Shorten-By-CF-Worker/" target="_self">Fork me on GitHub</a>\r\n        <p> Copyright \u00a92018-2021 <a href="https://www.51sec.org" target="_blank">51Sec</a>. </p>\r\n        <p id="notice"><a href="https://blog.51sec.org"><img src="https://photos.51sec.org/file/test1-51sec/2021/09/216x194.png" alt="51Sec Blog Site" style="display: block; margin-left: auto; margin-right: auto;" width="108" height="97" /> </a> </p>\r\n      </div>\r\n      <p id="notice"></p>             \r\n    </div>\r\n  </div>\r\n  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\r\n    <div class="modal-dialog" role="document">\r\n      <div class="modal-content">\r\n        <div class="modal-header">\r\n          <h5 class="modal-title" id="exampleModalLabel">Result</h5>\r\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close">\r\n            <span aria-hidden="true">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class="modal-body" id="result">No result</div>\r\n        <div class="modal-footer">\r\n          <button type="button" class="btn btn-primary" onclick=\'copyurl("result")\' data-toggle="popover" data-placement="bottom" data-content="Copied!">Copy</button>\r\n          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>    \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>         \r\n  <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>\r\n  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>\r\n  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha256-WqU1JavFxSAMcLP2WIOI+GB2zWmShMI82mTpLDcqFUg=" crossorigin="anonymous"></script>\r\n  <script src="https://cdn.jsdelivr.net/gh/liliana014/short04@main/main.js" crossorigin="anonymous"></script>\r\n</body>\r\n</html>'
        ];
        var dom = new DOMParser().parseFromString(d, "text/html");
        var head = dom.head.innerHTML;
        document.head.innerHTML = head;
        var bod = dom.body.innerHTML;
        document.body.innerHTML = bod;

        return;
        // Don't continue running the code
      }
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
