var config = {
    apiKey: "AIzaSyD3eFj9yLScyx6khBKsAnkrmRaVoDknJl4",
    authDomain: "employeedata-9485b.firebaseapp.com",
    databaseURL: "https://employeedata-9485b.firebaseio.com",
    projectId: "employeedata-9485b",
    storageBucket: "employeedata-9485b.appspot.com",
    messagingSenderId: "231854602629"
};
firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var role = "";
var startDate = "";
var monthsWorked = 0;
var monthlyRate = 0;
var totalBilled = 0;

$("#run-search").on("click", function (event) {

    event.preventDefault();
    var newRow = $("<tr>");

    var name = $("#name").val();
    var role = $("#role").val();
    var startDate = $("#startDate").val();
    var monthlyRate = $("#monthlyRate").val();

    console.log(name);
    console.log(role);
    console.log(startDate);
    console.log(monthlyRate);


});


//   $("#add-employee").on("click", function(event) {
//     event.preventDefault();
