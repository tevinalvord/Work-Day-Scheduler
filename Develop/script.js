var currentDay = moment().format("dddd, MMMM Do");

$("#currentDay").text(currentDay);

var currentHour = moment().format("ha")

switch(currentHour) {
    case "9pm":

        break;

}

$("#9am").on("click", "textarea", function() {
    console.log("9am text area clicked");
});

$("#10am").on("click", "textarea", function() {
    console.log("10am text area clicked");
});

setInterval(function() {

    switch(currentHour) {
        case "12am":
            $(".col-8").removeClass("past");
            $(".col-8").addClass("future");
            break;
        case "9am":
            $("#9am").removeClass("future");
            $("#9am").addClass("present");
            break;
        case "10am":
            $("#9am").removeClass("present");
            $("#9am").addClass("past");
            $("#10am").removeClass("future");
            $("#10am").addClass("present");
            break;
        case "11am":
            $("#10am").removeClass("present");
            $("#10am").addClass("past");
            $("#11am").removeClass("future");
            $("#11am").addClass("present");
            break;
        case "12pm":
            $("#11am").removeClass("present");
            $("#11am").addClass("past");
            $("#12pm").removeClass("future");
            $("#12pm").addClass("present");
            break;
        case "1pm":
            $("#12pm").removeClass("present");
            $("#12pm").addClass("past");
            $("#1pm").removeClass("future");
            $("#1pm").addClass("present");
            break;
        case "2pm":
            $("#1pm").removeClass("present");
            $("#1pm").addClass("past");
            $("#2pm").removeClass("future");
            $("#2pm").addClass("present");
            break;
        case "3pm":
            $("#2pm").removeClass("present");
            $("#2pm").addClass("past");
            $("#3pm").removeClass("future");
            $("#3pm").addClass("present");
            break;
        case "4pm":
            $("#3pm").removeClass("present");
            $("#3pm").addClass("past");
            $("#4pm").removeClass("future");
            $("#4pm").addClass("present");
            break;
        case "5pm":
            $("#4pm").removeClass("present");
            $("#4pm").addClass("past");
            $("#5pm").removeClass("future");
            $("#5pm").addClass("present");
            break;
        case "6pm":
            $(".col-8").removeClass("future present");
            $(".col-8").addClass("past");
            break;
    }

}, (1000 * 60) * 60);

// switch(currentHour) {
//     case "12am":
//         $(".col-8").removeClass("past");
//         $(".col-8").addClass("future");
//         break;
//     case "9am":
//         $("#9am").removeClass("future");
//         $("#9am").addClass("present");
//         break;
//     case "10am":
//         $("#9am").removeClass("present");
//         $("#9am").addClass("past");
//         $("#10am").removeClass("future");
//         $("#10am").addClass("present");
//         break;
//     case "11am":
//         $("#10am").removeClass("present");
//         $("#10am").addClass("past");
//         $("#11am").removeClass("future");
//         $("#11am").addClass("present");
//         break;
//     case "12pm":
//         $("#11am").removeClass("present");
//         $("#11am").addClass("past");
//         $("#12pm").removeClass("future");
//         $("#12pm").addClass("present");
//         break;
//     case "1pm":
//         $("#12pm").removeClass("present");
//         $("#12pm").addClass("past");
//         $("#1pm").removeClass("future");
//         $("#1pm").addClass("present");
//         break;
//     case "2pm":
//         $("#1pm").removeClass("present");
//         $("#1pm").addClass("past");
//         $("#2pm").removeClass("future");
//         $("#2pm").addClass("present");
//         break;
//     case "3pm":
//         $("#2pm").removeClass("present");
//         $("#2pm").addClass("past");
//         $("#3pm").removeClass("future");
//         $("#3pm").addClass("present");
//         break;
//     case "4pm":
//         $("#3pm").removeClass("present");
//         $("#3pm").addClass("past");
//         $("#4pm").removeClass("future");
//         $("#4pm").addClass("present");
//         break;
//     case "5pm":
//         $("#4pm").removeClass("present");
//         $("#4pm").addClass("past");
//         $("#5pm").removeClass("future");
//         $("#5pm").addClass("present");
//         break;
//     case "6pm":
//         $(".col-8").removeClass("future present");
//         $(".col-8").addClass("past");
//         break;
// };

// if (currentHour === "12am") {
//     $(".col-8").removeClass("past");
//     $(".col-8").addClass("future");
// };

// if (currentHour === "9am") {
//     $("#9am").removeClass("future");
//     $("#9am").addClass("present");
// };

// if (currentHour === "10am") {
//     $("#9am").removeClass("present");
//     $("#9am").addClass("past");
//     $("#10am").removeClass("future");
//     $("#10am").addClass("present");
// };

// if (currentHour === "11am") {
//     $("#10am").removeClass("present");
//     $("#10am").addClass("past");
//     $("#11am").removeClass("future");
//     $("#11am").addClass("present");
// };

// if (currentHour === "12pm") {
//     $("#11am").removeClass("present");
//     $("#11am").addClass("past");
//     $("#12pm").removeClass("future");
//     $("#12pm").addClass("present");
// };

// if (currentHour === "1pm") {
//     $("#12pm").removeClass("present")
//     $("#12pm").addClass("past");
//     $("#1pm").removeClass("future");
//     $("#1pm").addClass("present");
// };

// if (currentHour === "2pm") {
//     $("#1pm").removeClass("present");
//     $("#1pm").addClass("past");
//     $("#2pm").removeClass("future");
//     $("#2pm").addClass("present");
// };

// if (currentHour === "3pm") {
//     $("#2pm").removeClass("present");
//     $("#2pm").addClass("past");
//     $("#3pm").removeClass("future");
//     $("#3pm").addClass("present");
// };

// if (currentHour === "4pm") {
//     $("#3pm").removeClass("present");
//     $("#3pm").addClass("past");
//     $("#4pm").removeClass("future");
//     $("#4pm").addClass("present");
// };

// if (currentHour === "5pm") {
//     $("#4pm").removeClass("present");
//     $("#4pm").addClass("past");
//     $("#5pm").removeClass("future");
//     $("#5pm").addClass("present");
// };

// if (currentHour === "6pm") {
//     $(".col-8").removeClass("future present");
//     $(".col-8").addClass("past");
// };