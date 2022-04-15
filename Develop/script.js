var currentDay = moment().format("dddd, MMMM Do");
var currentHour = moment().format("ha")
var events = {};


$("#currentDay").text(currentDay);

var setCurrentHour = function() {

    currentHour = moment().format("ha")

    switch(currentHour) {
        case "12am":
        case "1am":
        case "2am":
        case "3am":
        case "4am":
        case "5am":
        case "6am":
        case "7am":
        case "8am":        
            $(".col-8").removeClass("past present");
            $(".col-8").addClass("future");
            break;
        case "9am":
            $("#9am").removeClass("past future");
            $("#9am").addClass("present");
            break;
        case "10am":
            $("#9am").removeClass("present future");
            $("#9am").addClass("past");
            $("#10am").removeClass("future");
            $("#10am").addClass("present");
            break;
        case "11am":
            $("#9am, #10am").removeClass("present future");
            $("#9am, #10am").addClass("past");
            $("#11am").removeClass("future");
            $("#11am").addClass("present");
            break;
        case "12pm":
            $("#9am, #10am, #11am").removeClass("present future");
            $("#9am, #10am, #11am").addClass("past");
            $("#12pm").removeClass("future");
            $("#12pm").addClass("present");
            break;
        case "1pm":
            $("#9am, #10am, #11am, #12pm").removeClass("present future");
            $("#9am, #10am, #11am, #12pm").addClass("past");
            $("#1pm").removeClass("future");
            $("#1pm").addClass("present");
            break;
        case "2pm":
            $("#9am, #10am, #11am, #12pm, #1pm").removeClass("present future");
            $("#9am, #10am, #11am, #12pm, #1pm").addClass("past");
            $("#2pm").removeClass("future");
            $("#2pm").addClass("present");
            break;
        case "3pm":
            $("#9am, #10am, #11am, #12pm, #1pm, #2pm").removeClass("present future");
            $("#9am, #10am, #11am, #12pm, #1pm, #2pm").addClass("past");
            $("#3pm").removeClass("future");
            $("#3pm").addClass("present");
            break;
        case "4pm":
            $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm").removeClass("present future");
            $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm").addClass("past");
            $("#4pm").removeClass("future");
            $("#4pm").addClass("present");
            break;
        case "5pm":
            $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm, #4pm").removeClass("present future");
            $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm, #4pm").addClass("past");
            $("#5pm").removeClass("future");
            $("#5pm").addClass("present");
            break;
        case "6pm":
        case "7pm":
        case "8pm":
        case "9pm":
        case "10pm":
        case "11pm":
            $(".col-8").removeClass("present future");
            $(".col-8").addClass("past");
            break;
    };
};

setInterval(function() {

    currentHour = moment().format("ha")
    setCurrentHour(currentHour);

}, (1000 * 60) * 10);

setCurrentHour();

var loadEvents = function() {

    events = JSON.parse(localStorage.getItem("events"));

    if (!events) {
        events = {
            nine: [],
            ten: [],
            eleven: [],
            twelve: [],
            one: [],
            two: [],
            three: [],
            four: [],
            five: [],
        };
    }
    $("#9amtextarea").text(events.nine);
    $("#10amtextarea").text(events.ten);
    $("#11amtextarea").text(events.eleven);
    $("#12pmtextarea").text(events.twelve);
    $("#1pmtextarea").text(events.one);
    $("#2pmtextarea").text(events.two);
    $("#3pmtextarea").text(events.three);
    $("#4pmtextarea").text(events.four);
    $("#5pmtextarea").text(events.five);
};

var saveEvents = function() {
    localStorage.setItem("events", JSON.stringify(events));
};

$(".saveBtn").on("click", function() {

    var NineAmtextAreaText = $("#9amtextarea").val().trim();
    events.nine = NineAmtextAreaText;
    var TenAmtextAreaText = $("#10amtextarea").val().trim();
    events.ten = TenAmtextAreaText;
    var ElevenAmtextAreaText = $("#11amtextarea").val().trim();
    events.eleven = ElevenAmtextAreaText;
    var TwelvePmtextAreaText = $("#12pmtextarea").val().trim();
    events.twelve = TwelvePmtextAreaText;
    var OnePmtextAreaText = $("#1pmtextarea").val().trim();
    events.one = OnePmtextAreaText;
    var TwoPmtextAreaText = $("#2pmtextarea").val().trim();
    events.two = TwoPmtextAreaText;
    var ThreePmtextAreaText = $("#3pmtextarea").val().trim();
    events.three = ThreePmtextAreaText;
    var FourPmtextAreaText = $("#4pmtextarea").val().trim();
    events.four = FourPmtextAreaText;
    var FivePmtextAreaText = $("#5pmtextarea").val().trim();
    events.five = FivePmtextAreaText;

    saveEvents();
    alert("Your event has been saved!")
});

loadEvents();