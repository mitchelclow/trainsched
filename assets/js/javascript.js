var config = {
    apiKey: "AIzaSyBXRQg4PZ2Np-v8oJrC6QBr8V3pwh3GiY4",
    authDomain: "shuttle-scheduler-790cb.firebaseapp.com",
    databaseURL: "https://shuttle-scheduler-790cb.firebaseio.com",
    projectId: "shuttle-scheduler-790cb",
    storageBucket: "",
    messagingSenderId: "278110168247"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
 
  var name = "";
  var email = "";
  var age = 0;
  var comment = "";
    // Capture Button Click
    $("#shuttle-user").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

      var name = $("#shuttlename-input").val().trim();
      var email = $("#destination-input").val().trim();
      var age = $("#firstshuttle-input").val().trim();
      var comment = $("#frequency-input").val().trim();.

      database.ref().push({
        name: name,
        email: email,
        age: age,
        comment: comment
      });
    });
    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("child_added", function(snapshot) {
      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().email);
      console.log(snapshot.val().age);
      console.log(snapshot.val().comment);

      var tableRow = $("<tr>");

      var shuttleName = $("<td>");
      var destination = $("<td>");
      var frequency = $("<td>");
      var nextArrival = $("<td>");
      var minutesAway = $("<td>");

      shuttleName.html(snapshot.val().name);
      destination.html(snapshot.val().email);
      frequency.html(snapshot.val().age);
      nextArrival.html(snapshot.val().comment);
      minutesAway.html("hello");

      tableRow.prepend(shuttleName);
      tableRow.prepend(destination);
      tableRow.prepend(frequency);
      tableRow.prepend(nextArrival);
      tableRow.prepend(minutesAway);

      $("#shuttleTable").prepend(tableRow);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });