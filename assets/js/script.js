var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

var currentHour = moment().format('H');
console.log(currentHour);
// **** bug here ****
// only first save button is operational, 
// see line 55 for potential solution
var saveButton = document.getElementById("button-addon2")

function init() {
    presentTime();
    getTaskList();
}

var presentTime = function () {
// **** bug here *****
// does not hit id=9 and i do not understand why
    for (i = 9; i <= 17; i++) {
        if (document.getElementById([i]).id < currentHour) {
            document.getElementById(i).className += " past";
            console.log(document.getElementById([i]));
        } 
        else if (document.getElementById([i]).id === currentHour) {
            document.getElementById(i).className += " present";
            console.log(document.getElementById([i]));
        }
        else {
            document.getElementById(i).className += " future";
            console.log(document.getElementById([i]));
        }
    } return
}

var taskList = function() {
    for (i = 9; i <= 17; i++) {
        localStorage.setItem(i, document.getElementById([i]).value);
        // if below line is run here, storage is not pulled upon page refresh
        // document.getElementById(i).value = localStorage[i];
    }

    
};

// ***** bug here *****
// returns undefined if page loaded with cleared storag
var getTaskList = function() {
    for (i = 9; i <= 17; i++) {
        document.getElementById(i).value = localStorage[i];
    }
}

saveButton.addEventListener("click", taskList); 
console.log(document.getElementById([9]).value)

// **********
// unsure of how to structure 
// variable.addEventListener("click", function(event) {
//     var element = event.target;

//     if (element.matches("button") === true) {
//         for (i = 9; i <= 17; i++) {
//             localStorage.setItem(i, document.getElementById([i]).value);
//         }return
//     }
// });

init();