// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
// var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var hourDisplayEl = $('#hour-display');

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

function changeGray (event) {
  event.currentTarget.setAttribute(
    "style",
    "background-color: blue"
  );
}

function displayHour() {
  var displayHour = moment({hour: 9});
  hourDisplayEl.text(moment({hour: 9}));
}

function changeColor () {
  $(".timeBlock").each(function (){
   var time = $(this).data("time")
   $(this).children(".td-class").children(".input-group").children(".form-control").val(localStorage.getItem(time))
   var current = moment().hours()
  console.log(time)
  console.log(current)
  if (time < current) {
    $(this).css("background-color","gray")
  } else if (time > current) {
    $(this).css("background-color","green")
  } else if (time === current) {
    $(this).css("background-color","red")
  }
  })
}

changeColor()

function saveData (text) {
 var text = $(this).parent().parent().siblings(".td-class").children(".input-group").children("input").val()
 var time = $(this).parent().parent().parent().data("time")
 console.log(text)
 localStorage.setItem(time, text)
}
$(".btn").each(function (){
  $(this).on("click", saveData)
})

function printData (text) {
  var projectDisplayEl = $('<p>').addClass('project-display').text(task);

  projectDisplayEl.append(text)
  console.log("hi")
  
 }
 




setInterval(displayTime, 1000);
setInterval(displayHour, 1000);
