
  // Initialize Firebase
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

$("#addButton").on("click", function (event) {

    event.preventDefault();

    // name = $("#employeeName").val();
    // role = $("#employeeRole").val();
    // startDate = $("#startDate").val();
    // monthlyRate = $("#monthlyRate").val();

    var newRow = $("<tr>");
    var newColumn;
    var employeeObj = {};

    $("form").find("input").each( function (index, input){
        var key = $(input).attr("name");
        var val = $(input).val();
        employeeObj[key] = val;

        newColumn = $("<td>");
        newColumn.text(val);
        newRow.append(newColumn);
    });

    var monthsWorked = getMonthsWorked(employeeObj.startDate)
    var monthsWorkedColumn = $("<td>");
    monthsWorkedColumn.text(monthsWorked);
    newRow.append(monthsWorkedColumn);

    var totalBilled = monthsWorked * employeeObj.rate
    var totalBilledColumn = $("<td>");
    totalBilledColumn.text(totalBilled);
    newRow.append(totalBilledColumn);

    console.log(employeeObj.name)
    console.log(employeeObj.role)
    console.log(employeeObj.startDate)
    console.log(monthsWorked)
    console.log(totalBilled)

    database.ref().push({
        name: employeeObj.name,
        role: employeeObj.role,
        startDate: employeeObj.startDate,
        monthsWorked: monthsWorked,
        monthlyRate: employeeObj.rate,
        totalBilled: totalBilled
    });

    $("#tableBody").append(newRow);

    // newRow.attr("id", "employee-" + emplyeeCount);
    // $("#tableBody").append(newRow);
    // newColumn.append(name)

    // $("#employee-" + emplyeeCount).append(newColumn);
    // newColumn.append(role);

    // $("#employee-" + emplyeeCount).append(newColumn);
    // newColumn.append(startDate);

    // $("#employee-" + emplyeeCount).append(newColumn);
    // newColumn.append(monthlyRate);

    // $("#employee-" + emplyeeCount).append(newColumn);


});

function getMonthsWorked (startDate) {
    var today = moment();
    startDate = moment(startDate);

    return today.diff(startDate, "months")
};
