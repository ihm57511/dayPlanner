var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

var currentHour = parseInt(moment().format('H'));
console.log(currentHour);

var task = []

function init() {
    presentInfo();
};

var presentInfo = function () {
    
    for (i = 0; i < 9; i++) {
    var timeEl = $('textarea').eq(i);
    
    // timeEl.text(JSON.parse(localStorage.getItem("task"[i])));
        
    if (parseInt(timeEl.attr("id")) < currentHour) {
        timeEl.addClass(' past');
        console.log(parseInt(timeEl.attr("id")));
    } 
    else if (parseInt(timeEl.attr("id")) === currentHour) {
        timeEl.addClass(' present');
    } 
    else {
        timeEl.addClass(' future');
    }
}};

$('.saveBtn').click(function(event) {
    event.preventDefault();
    var btnClicked = $(event.target);
    console.log($(btnClicked).attr("id"));
    console.log($(btnClicked).parent().siblings("textarea").val());
    localStorage.setItem("task", JSON.stringify($(btnClicked).parent().siblings("textarea").val()));
    return
});

init();

    

