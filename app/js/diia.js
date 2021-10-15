$(function() {
    $('.marquee').marquee({
        duration: 6000,
        startVisible: true,
        duplicated: true
    });
});
function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

/* функция получения текущей даты и времени */
function date_time()
{
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth()+1);
    var year = current_datetime.getFullYear();
    var hours = zero_first_format(current_datetime.getHours());
    var minutes = zero_first_format(current_datetime.getMinutes());
    var monthua
    switch (month) {
        case 01:
            monthua="січня"
            break;
        case 02:
            monthua="лютого"
            break;
        case 03:
            monthua="березня"
            break;
        case 04:
            monthua="квітня"
            break;
        case 05:
            monthua="травня"
            break;
        case 06:
            monthua="червеня"
            break;
        case 07:
            monthua="липня"
            break;
        case 08:
            monthua="серпня"
            break;
        case 09:
            monthua="вересня"
            break;
        case 10:
            monthua="жовтня"
            break;
        case 11:
            monthua="листопада"
            break;
        case 12:
            monthua="грудня"
            break;
    }

    return "Дані оновлено "+day+" "+monthua+" "+year+" о "+hours+":"+minutes;
}

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
document.getElementById('current_date_time_block').innerHTML = date_time();