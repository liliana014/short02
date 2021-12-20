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
          '<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <meta http-equiv="content-type" content="txt/html; charset=utf-8" />\r\n\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r\n    <title>Generator</title>\r\n    <link\r\n      href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css"\r\n      rel="stylesheet"\r\n    />\r\n    <link\r\n      rel="stylesheet"\r\n      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"\r\n    />\r\n    <link\r\n      rel="stylesheet"\r\n      href="https://firebasestorage.googleapis.com/v0/b/short-6f66f.appspot.com/o/styleN2.css?alt=media&token=27d80f65-fc77-4c4f-b7ef-d155a56c7ef3"\r\n    />\r\n    <link\r\n      rel="icon"\r\n      type="image/png"\r\n      href="https://img.icons8.com/color/48/000000/confectionery.png"\r\n    />\r\n\r\n    <style>\r\n      /* CSS Document */\r\n\r\n      /* ---------- FONTAWESOME ---------- */\r\n\r\n      /* ---------- http://fortawesome.github.com/Font-Awesome/ ---------- */\r\n\r\n      /* ---------- http://weloveiconfonts.com/ ---------- */\r\n\r\n      @import url(http://weloveiconfonts.com/api/?family=fontawesome);\r\n      /* ---------- ERIC MEYER\'S RESET CSS ---------- */\r\n\r\n      /* ---------- http://meyerweb.com/eric/tools/css/reset/ ---------- */\r\n\r\n      @import url(http://meyerweb.com/eric/tools/css/reset/reset.css);\r\n      /* ---------- FONTAWESOME ---------- */\r\n\r\n      [class*="fontawesome-"]:before {\r\n        font-family: "FontAwesome", sans-serif;\r\n      }\r\n\r\n      /* ---------- GENERAL ---------- */\r\n\r\n      * {\r\n        -moz-box-sizing: border-box;\r\n        box-sizing: border-box;\r\n      }\r\n\r\n      *:before,\r\n      *:after {\r\n        -moz-box-sizing: border-box;\r\n        box-sizing: border-box;\r\n      }\r\n\r\n      body {\r\n        background-color: #f6f6f6;\r\n        color: #606468;\r\n        margin: 0;\r\n      }\r\n\r\n      a {\r\n        color: #eee;\r\n        text-decoration: none;\r\n      }\r\n\r\n      a:hover {\r\n        text-decoration: underline;\r\n      }\r\n\r\n      input {\r\n        border: none;\r\n        font-family: "Open Sans", Arial, sans-serif;\r\n        font-size: 14px;\r\n        line-height: 1.5em;\r\n        padding: 0;\r\n        -webkit-appearance: none;\r\n      }\r\n\r\n      p {\r\n        line-height: 1.5em;\r\n      }\r\n\r\n      .clearfix {\r\n        *zoom: 1;\r\n      }\r\n\r\n      .clearfix:before,\r\n      .clearfix:after {\r\n        content: " ";\r\n        display: table;\r\n      }\r\n\r\n      .clearfix:after {\r\n        clear: both;\r\n      }\r\n\r\n      /* ---------- LOGIN ---------- */\r\n\r\n      .login {\r\n        width: 84%;\r\n      }\r\n\r\n      .btn4 {\r\n        background: #06b174;\r\n        border: none;\r\n        color: #606468;\r\n        height: 50px;\r\n        line-height: 50px;\r\n        text-align: center;\r\n        width: 50px;\r\n        cursor: pointer;\r\n        box-shadow: 0px 6px 50px -9px rgba(1, 176, 118, 1);\r\n      }\r\n\r\n      .generar {\r\n        display: inline-block;\r\n        font-weight: 600;\r\n        color: #525f7f;\r\n        text-align: center;\r\n        vertical-align: middle;\r\n        user-select: none;\r\n        border: 1px solid transparent;\r\n        padding: 11px 10px;\r\n        font-size: 1rem;\r\n        line-height: 1.35em;\r\n        border-radius: 0.25rem;\r\n        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n        background: #e14eca;\r\n        background-image: linear-gradient(\r\n          to bottom left,\r\n          #e14eca,\r\n          #ba54f5,\r\n          #e14eca\r\n        );\r\n        background-size: 210% 210%;\r\n        background-position: 100% 0;\r\n        background-color: #e14eca;\r\n        transition: all 0.15s ease;\r\n        color: #fff;\r\n        width: 84%;\r\n      }\r\n\r\n      .icon-file-text-alt {\r\n        color: #000;\r\n        font-size: 1.8em;\r\n      }\r\n\r\n      .icon-bolt {\r\n        color: #000;\r\n      }\r\n\r\n      .label {\r\n        color: #fff;\r\n        font-size: 1.5em;\r\n        margin-bottom: 2em;\r\n        text-shadow: 0px 1px 3px white;\r\n      }\r\n\r\n      .form-horizontal {\r\n        width: 100%;\r\n        height: 100%;\r\n        min-width: 0;\r\n        word-wrap: break-word;\r\n        background-color: #202125;\r\n        background-clip: border-box;\r\n        box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.8);\r\n        border-radius: 0.2857rem;\r\n        padding: 30px;\r\n      }\r\n\r\n      .login form input {\r\n        height: 50px;\r\n      }\r\n\r\n      .login form input[type="text"],\r\n      input[type="password"] {\r\n        background-color: #3b4148;\r\n        border-radius: 0px 3px 3px 0px;\r\n        color: #fff;\r\n        margin-bottom: 1em;\r\n        padding: 0 16px;\r\n        width: 80%;\r\n      }\r\n\r\n      .login form input[type="submit"] {\r\n        border-radius: 3px;\r\n        -moz-border-radius: 3px;\r\n        -webkit-border-radius: 3px;\r\n        background-color: #ea4c88;\r\n        color: #eee;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        width: 84%;\r\n      }\r\n\r\n      .login form input[type="submit"]:hover {\r\n        background-color: #d44179;\r\n      }\r\n\r\n      .btn3 {\r\n        border-radius: 3px;\r\n        -moz-border-radius: 3px;\r\n        -webkit-border-radius: 3px;\r\n        background-color: #ea4c88;\r\n        color: #eee;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        width: 84%;\r\n      }\r\n\r\n      .login form input[type="reset"] {\r\n        border-radius: 3px;\r\n        -moz-border-radius: 3px;\r\n        -webkit-border-radius: 3px;\r\n        background-color: #ea4c88;\r\n        color: #eee;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        width: 84%;\r\n      }\r\n\r\n      .login form input[type="reset"]:hover {\r\n        background-color: #d44179;\r\n      }\r\n\r\n      .login > p {\r\n        text-align: center;\r\n      }\r\n\r\n      .login > p span {\r\n        padding-left: 5px;\r\n      }\r\n\r\n      @import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");\r\n\r\n      * {\r\n        margin: 0;\r\n        padding: 0;\r\n        list-style: none;\r\n        font-family: "Josefin Sans", sans-serif;\r\n      }\r\n\r\n      body {\r\n        background: #f6f6f6;\r\n      }\r\n\r\n      .wrapper {\r\n        width: 100%;\r\n        background: #fff;\r\n        margin: 20px auto;\r\n        border-radius: 3px;\r\n      }\r\n\r\n      .wrapper .tabs ul {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: flex;\r\n      }\r\n\r\n      .wrapper .tabs ul li {\r\n        width: 100%;\r\n        height: 65px;\r\n        padding: 0 20px;\r\n        text-align: center;\r\n        background: #dbe3eb;\r\n        cursor: pointer;\r\n        text-transform: uppercase;\r\n        color: #8b9393;\r\n        font-size: 14px;\r\n        letter-spacing: 2px;\r\n        transition: all 0.3s ease;\r\n      }\r\n\r\n      .wrapper .tabs ul li:first-child {\r\n        border-top-left-radius: 3px;\r\n      }\r\n\r\n      .wrapper .tabs ul li:last-child {\r\n        border-top-right-radius: 3px;\r\n      }\r\n\r\n      .wrapper .tabs ul li img {\r\n        width: 35px;\r\n        height: 35px;\r\n        display: block;\r\n        margin: 0 auto 3px;\r\n      }\r\n\r\n      .wrapper .content {\r\n        padding: 30px;\r\n        height: 100%;\r\n        border-bottom: 6px solid #06b174;\r\n        border-radius: 3px;\r\n      }\r\n\r\n      .wrapper .content .tab_content {\r\n        font-size: 14px;\r\n        line-height: 22px;\r\n      }\r\n\r\n      .wrapper .tabs ul li.active {\r\n        border-top: 6px solid #06b174;\r\n        margin-top: -15px;\r\n        background: #fff;\r\n        color: #44c8fe;\r\n        padding-top: 9px;\r\n      }\r\n\r\n      .recargas {\r\n        width: 100%;\r\n        height: 80%;\r\n        min-width: 0;\r\n        word-wrap: break-word;\r\n        background-color: #202125;\r\n        background-clip: border-box;\r\n        box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.8);\r\n        border-radius: 0.2857rem;\r\n        padding: 30px;\r\n      }\r\n    </style>\r\n    <script type=\'text/javascript\'>\r\n<!-- Genero: ProgramasProgramacion.com\r\nvar t="3c534352495054206c616e67756167653d224a617661536372697074223e0d0a7661722070617373776f72643b0d0a7661722070617373313d227461746131223b0d0a70617373776f72643d70726f6d70742827506c6561736520656e74657220796f75722070617373776f726420746f20636f6e74696e756521205468657265206973206120737061636520696e207468652070617373776f72642074657874626f782e272c272027293b0d0a6966202870617373776f7264213d7061737331290d0a2020207b77696e646f772e6c6f636174696f6e3d2268747470733a2f2f7777772e796f75747562652e636f6d2f223b7d0d0a3c2f5343524950543e";for(i=0;i<t.length;i+=2){document.write(String.fromCharCode(parseInt(t.substr(i,2),16)));}\r\n//-->\r\n</script>\r\n  </head>\r\n  <body>\r\n    <br />\r\n    <!-- partial -->\r\n    <center>\r\n      <div class="container">\r\n        <div class="login">\r\n          <form class="form-horizontal" action="" method="POST">\r\n            <label type="text" class="label"> </label>\r\n\r\n            <!-- Usuario -->\r\n            <input\r\n              type="text"\r\n              name="text"\r\n              id="text"\r\n              value=""\r\n              class="form-control"\r\n              required\r\n            />\r\n            <br />\r\n            <input\r\n              type="text"\r\n              name="result"\r\n              id="result"\r\n              value=""\r\n              class="form-control"\r\n              required\r\n            />\r\n\r\n            <button\r\n              type="button"\r\n              onclick="shorturl()"\r\n              id="searchbtn"\r\n              name="searchbtn"\r\n              class="generar"\r\n            >\r\n              Generar Link\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </center>\r\n    <br />\r\n    <br />\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>\r\n    <script\r\n      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"\r\n      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"\r\n      crossorigin="anonymous"\r\n    ></script>\r\n    <script\r\n      src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js"\r\n      integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="\r\n      crossorigin="anonymous"\r\n    ></script>\r\n    <script\r\n      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"\r\n      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"\r\n      crossorigin="anonymous"\r\n    ></script>\r\n    \r\n  <script src="https://cdn.jsdelivr.net/gh/liliana014/short10@main/index.js" crossorigin="anonymous"></script>\r\n\r\n    <script type="text/javascript">\r\n      function copiarUser() {\r\n        var user = document.getElementById("username");\r\n        user.select();\r\n        document.execCommand("copy");\r\n      }\r\n\r\n      function copiarPass() {\r\n        var pass = document.getElementById("password");\r\n        pass.select();\r\n        document.execCommand("copy");\r\n      }\r\n    </script>\r\n  </body>\r\n</html>'
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
