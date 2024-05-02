const btn = document.querySelector("#btn");
const box = document.querySelector("#box");

function showWeekDay(day) {
    let result = "";
    switch (day) {
        case 1:
            result = "Today is Monday.";
            break;
        case 2:
            result = "Today is Tuesday.";
            break;
        case 3:
            result = "Today is Wednesday.";
            break;
        case 4:
            result = "Today is Thursday.";
            break;
        case 5:
            result = "Today is Friday.";
            break;
        case 6:
            result = "Today is Saturday.";
            break;
        case 7:
            result = "Today is Sunday.";
            break;
        default:
            result = "No data.";
            break;
    }
    return result;
}



btn.addEventListener("click", function () {
    const link = "http://worldtimeapi.org/api/timezone/America/Los_Angeles";
    fetch(link)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            const content = document.querySelector('#content');
            content.textContent ="Raw data: " + data.datetime;
            let weekDay = data.day_of_week;
            const day = document.querySelector('#day');
            day.textContent = showWeekDay(weekDay);
            box.append(content);
            box.append(day);

            // formate time and date.
            let date_time = data.datetime.split('T');
            let date = date_time[0];
            date_time.shift();
            let time_arr = date_time[0].split('.');
            let time = time_arr[0];

            const timeOutput = document.querySelector("#timeOutput");
            const dateOutput = document.querySelector("#dateOutput");
            timeOutput.textContent = "Time: " + time;
            dateOutput.textContent = "Date: " + date;
            box.append(timeOutput);
            box.append(dateOutput);
        })
        .catch(error => {
            console.log("Error: ", error);
        })
})