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
var emplyeeCount = 0;


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


    newRow.attr("id", "employee-" + emplyeeCount);
    $("#tableBody").append(newRow);
    newColumn.append(name)
    $("#employee" + emplyeeCount).append(newColumn)


});

