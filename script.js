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
   var current = 13//moment().hours()
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

function saveData (event) {
 var text = $(this).parent().parent().siblings(".td-class").children(".input-group").children("input").val()
 console.log(text)
}
$(".btn").each(function (){
  $(this).on("click", saveData)
})

function printData () {
  var text = $(this).parent().parent().siblings(".td-class").children(".input-group").children("input").val()
  var projectRowEl = $('<p>').addClass('project-display');
  projectRowEl.append(text);
 }
 $(".btn").each(function (){
   $(this).on("click", printData)
 })


// function printProjectData(name, type, hourlyRate, dueDate) {
//   var projectRowEl = $('<tr>');

//   var projectNameTdEl = $('<td>').addClass('p-2').text(name);

//   var projectTypeTdEl = $('<td>').addClass('p-2').text(type);

//   var rateTdEl = $('<td>').addClass('p-2').text(hourlyRate);

//   var dueDateTdEl = $('<td>').addClass('p-2').text(dueDate);

//   var daysToDate = moment(dueDate, 'MM/DD/YYYY').diff(moment(), 'days');
//   var daysLeftTdEl = $('<td>').addClass('p-2').text(daysToDate);

//   var totalEarnings = calculateTotalEarnings(hourlyRate, daysToDate);

//   // You can also chain methods onto new lines to keep code clean
//   var totalTdEl = $('<td>')
//     .addClass('p-2')
//     .text('$' + totalEarnings);

//   var deleteProjectBtn = $('<td>')
//     .addClass('p-2 delete-project-btn text-center')
//     .text('X');

//   // By listing each `<td>` variable as an argument, each one will be appended in that order
//   projectRowEl.append(
//     projectNameTdEl,
//     projectTypeTdEl,
//     rateTdEl,
//     dueDateTdEl,
//     daysLeftTdEl,
//     totalTdEl,
//     deleteProjectBtn
//   );

//   projectDisplayEl.append(projectRowEl);

//   projectModalEl.modal('hide');
// }

function handleDeleteProject(event) {
  console.log(event.target);
  var btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

// handle project form submission
function handleProjectFormSubmit(event) {
  event.preventDefault();

  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  printProjectData(projectName, projectType, hourlyRate, dueDate);

  projectFormEl[0].reset();
}

projectFormEl.on('submit', handleProjectFormSubmit);
projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);
// dueDateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);
setInterval(displayHour, 1000);
