var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

var currentHour = parseInt(moment().format('H'));

function init() {
    presentInfo();
};

var presentInfo = function () {
    
    for (i = 0; i < 9; i++) {
    var timeEl = $('textarea').eq(i);
    console.log(timeEl)
    $(timeEl).val(localStorage.getItem("task" + i));
   
    if (parseInt(timeEl.attr("id")) < currentHour) {
        timeEl.addClass(' past');
       
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
    var btnClicked = $(this);
    localStorage.setItem("task" + [parseInt($(btnClicked).attr("id"))], $(btnClicked).parent().siblings("textarea").val());
});

init();

    

