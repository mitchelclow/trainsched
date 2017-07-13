  // var config = {
  //     apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
  //     authDomain: "fir-recent-user.firebaseapp.com",
  //     databaseURL: "https://fir-recent-user.firebaseio.com",
  //     storageBucket: "fir-recent-user.appspot.com"
  //   };
  //   firebase.initializeApp(config);
    // Create a variable to reference the database
    // var database = firebase.database();
    // Initial Values
    // var name = "";
    // var email = "";
    // var age = 0;
    // var comment = "";
    // // Capture Button Click
    $("#add-user").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

      var name = $("#shuttlename-input").val().trim();
      var email = $("#email-input").val().trim();
      var age = $("#age-input").val().trim();
      var comment = $("#comment-input").val().trim();

      // Change the ids (html and js)
      // Add an id for the table body
      // Create a new table row
      // To this table row, append <td>s with the form values
      // Append row to table body

      // database.ref().push({
      //   name: name,
      //   email: email,
      //   age: age,
      //   comment: comment
      // });
    });
    // Firebase watcher + initial loader HINT: .on("value")
    // database.ref().on("value", function(snapshot) {
    //   // Log everything that's coming out of snapshot
    //   console.log(snapshot.val());
    //   console.log(snapshot.val().name);
    //   console.log(snapshot.val().email);
    //   console.log(snapshot.val().age);
    //   console.log(snapshot.val().comment);
    //   // Change the HTML to reflect
    //   $("#shuttlename-display").html(snapshot.val().name);
    //   $("#email-display").html(snapshot.val().email);
    //   $("#age-display").html(snapshot.val().age);
    //   $("#comment-display").html(snapshot.val().comment);
    //   // Handle the errors
    // }, function(errorObject) {
    //   console.log("Errors handled: " + errorObject.code);
    // });