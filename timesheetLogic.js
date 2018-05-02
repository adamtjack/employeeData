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


$("#add-employee").on("click", function (event) {
    event.preventDefault();

    var newRow = $("<tr>");
    var newColumn = $("<td>");


    name = $("#name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#startDate").val().trim();
    monthlyRate = $("#monthlyRate").val().trim();

    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthsWorked: monthsWorked,
        monthlyRate: monthlyRate,
        totalBilled: totalBilled
    });

    $("#tableBody").append(newRow);

});

// Loop for making Month select form
for (i = 1; i < 13; i++) {
    var newOption = $("<option>");
    newOption.val(i);
    newOption.text(i);
    $("#startMonth").append(newOption);
}
// Loop for making Day select form
for (i = 1; i < 32; i++) {
    var newOption = $("<option>");
    newOption.val(i);
    newOption.text(i);
    $("#startDay").append(newOption);
}
// Loop for making Year select form
for (i = 1900; i < 2019; i++) {
    var newOption = $("<option>");
    newOption.val(i);
    newOption.text(i);
    $("#startYear").prepend(newOption);
}
$("#startYear").prepend("<option value='' selected disabled>Year</option>");

