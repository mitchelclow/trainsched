var config = {
  apiKey: "AIzaSyBXRQg4PZ2Np-v8oJrC6QBr8V3pwh3GiY4",
  authDomain: "shuttle-scheduler-790cb.firebaseapp.com",
  databaseURL: "https://shuttle-scheduler-790cb.firebaseio.com",
  projectId: "shuttle-scheduler-790cb",
  storageBucket: "shuttle-scheduler-790cb.appspot.com",
  messagingSenderId: "278110168247"
};
firebase.initializeApp(config);

var database = firebase.database();

// Capture Button Click
$("#add-shuttle").on("click", function() {
  // Don't refresh the page!
  event.preventDefault();

  var shuttleName = $("#shuttlename-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var shuttleStartTime = $("#firstshuttle-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

  var newShuttle = {
    shuttleName: shuttleName,
    destination: destination,
    shuttleStartTime: shuttleStartTime,
    frequency: frequency
  };
  database.ref().push(newShuttle);
});
// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("child_added", function(snapshot) {
  // Log everything that's coming out of snapshot
  var train = snapshot.val();

  // Read in the shuttle-start-time into the moment function
  var shuttleTimeMomentObj = moment(train.shuttleStartTime, "HH:mm");
  var currentTimeMomentObj = moment();
  while (shuttleTimeMomentObj.diff(currentTimeMomentObj, "minutes") < 0) {
    shuttleTimeMomentObj.add(parseInt(train.frequency), "minutes");
  }

  var nextArrival = shuttleTimeMomentObj.format("HH:mm");
  var minutesAway = shuttleTimeMomentObj.diff(currentTimeMomentObj, "minutes") + 1;

  var tableRow = $(
    "<tr>" +
    "<td>" + train.shuttleName + "</td>" +
    "<td>" + train.destination + "</td>" +
    "<td>" + train.shuttleStartTime + "</td>" +
    "<td>" + train.frequency + "</td>" +
    "<td>" + nextArrival + "</td>" +
    "<td>" + minutesAway + "</td>" +
    "</tr>");

  $("#shuttleTable").append(tableRow);
  $("#train-form")[0].reset();

  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});