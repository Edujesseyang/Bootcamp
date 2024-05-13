// selectors def
const inputBox = document.querySelector('#inputBox');
const searchBtn = document.querySelector('#searchBtn');
const displayBox = document.querySelector(`#displayBox`);
const searchHistory = document.querySelector(`#searchHistory`);
const restDays = document.querySelector(`#restDays`);

// ApI key def
const API_KEY = `08e63eb3641d6ccee8d95b656261354a`; // API key
const API_KEY2 = `1a98ec91fb8a859bdf57a0189a773a08`; // back-up API key


// **************************************** functions ******************************************************************
// link generator use lat, lon, and API key.     * only generate link string, WILL NOT fetch
function getLink(lat, lon, apiKey) {
    let API_LINK = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    console.log(API_LINK);
    return API_LINK;
}


// temp calc function
function K_to_F(KelvinTemp) {
    return (((KelvinTemp - 273.15) * 9 / 5) + 32).toFixed(1);
}


// direction finder function
function degreeCalc(degree) {
    if (degree >= 0 && degree < 45) {
        return "North East";
    } else if (degree >= 45 && degree < 90) {
        return "East North";
    } else if (degree >= 90 && degree < 135) {
        return "East South";
    } else if (degree >= 135 && degree < 180) {
        return "South East";
    } else if (degree >= 180 && degree < 225) {
        return "South West";
    } else if (degree >= 225 && degree < 270) {
        return "West South";
    } else if (degree >= 270 && degree < 315) {
        return "West North";
    } else if (degree >= 315 && degree < 360) {
        return "North West";
    }
}


// get Max and Min function  (for temp)
function getMaxMin_temp(listArray, startIndex) {
    let maxTemp = listArray[0].main.temp;
    let minTemp = listArray[0].main.temp;
    let result = [];
    for (let i = startIndex; i < startIndex + 8; i++) {
        if (listArray[i].main.temp >= maxTemp) {
            maxTemp = listArray[i].main.temp;
        }
        if (listArray[i].main.temp <= minTemp) {
            minTemp = listArray[i].main.temp;
        }
    }
    result.push(maxTemp);
    result.push(minTemp);
    return result;
}


// get Max and Min function  (for wind speed)
function getMaxMin_windSpeed(listArray, startIndex) {
    let maxTemp = listArray[0].wind.speed;
    let minTemp = listArray[0].wind.speed;
    let result = [];
    for (let i = startIndex; i < startIndex + 8; i++) {
        if (listArray[i].wind.speed >= maxTemp) {
            maxTemp = listArray[i].wind.speed;
        }
        if (listArray[i].wind.speed <= minTemp) {
            minTemp = listArray[i].wind.speed;
        }
    }
    result.push(maxTemp);
    result.push(minTemp);
    return result;
}


// create history button function
function createHistoryButton(value) {
    const history = document.createElement('button');
    history.textContent = value;
    history.addEventListener('click', function () {
        getData(this.innerText);
    });
    searchHistory.append(history);
}


// add searching to the local storage and display to the page
function addSearch() {
    if (!historyArray.includes(inputBox.value) && inputBox.value) {
        historyArray.push(inputBox.value);
        createHistoryButton(inputBox.value);
        localStorage.setItem(`history`, JSON.stringify(historyArray));
    }
}


// get API data function
function getData(searchCity) {
    if (searchCity != '') {
        // fetch nested 
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=1&appid=${API_KEY}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // get lat and lon from the data
                lat = data[0].lat.toFixed(2).toString();
                lon = data[0].lon.toFixed(2).toString();

                // get location(str) for display the weather info boxes.
                let location = data[0].name + ', ' + data[0].state + ', ' + data[0].country;

                // use lat and lon to get the weather info
                fetch(getLink(lat, lon, API_KEY))
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        // get temp for 5 days
                        let maxMinTemp_d1 = getMaxMin_temp(data.list, 0);
                        let maxMinTemp_d2 = getMaxMin_temp(data.list, 8);
                        let maxMinTemp_d3 = getMaxMin_temp(data.list, 16);
                        let maxMinTemp_d4 = getMaxMin_temp(data.list, 24);
                        let maxMinTemp_d5 = getMaxMin_temp(data.list, 32);

                        // get wind speed for 5 days
                        let maxMinWindSpeed_d1 = getMaxMin_windSpeed(data.list, 0);
                        let maxMinWindSpeed_d2 = getMaxMin_windSpeed(data.list, 8);
                        let maxMinWindSpeed_d3 = getMaxMin_windSpeed(data.list, 16);
                        let maxMinWindSpeed_d4 = getMaxMin_windSpeed(data.list, 24);
                        let maxMinWindSpeed_d5 = getMaxMin_windSpeed(data.list, 32);


                        // *************************day 1 box elements*************************
                        const dateTime = document.querySelector(`#dateTime`);
                        const boxHead = document.querySelector(`#boxHead`);
                        const tempMax = document.querySelector(`#tempMax`);
                        const tempMin = document.querySelector(`#tempMin`);
                        const wind = document.querySelector(`#wind`);
                        const localText = document.querySelector(`#localText`);
                        // display day 1
                        dateTime.innerText = "Date: " + data.list[0].dt_txt.split(' ')[0];
                        localText.innerText = location;
                        boxHead.innerText = data.list[4].weather[0].description;
                        tempMax.innerText = "Highest : " + K_to_F(maxMinTemp_d1[0]);
                        tempMin.innerText = "Lowest :  " + K_to_F(maxMinTemp_d1[1]);
                        wind.innerText = "Wind:\nHighest: " + maxMinWindSpeed_d1[0] + ' km per hour\nLowest:  ' + maxMinWindSpeed_d1[1] + " km per hour\nDirection:  " + degreeCalc(data.list[4].wind.deg);


                        // *******************************day 2 elements******************************* 
                        const day2Head = document.querySelector(`#day2Head`);
                        const day2Date = document.querySelector(`#day2Date`);
                        const day2Text = document.querySelector(`#day2Text`);
                        const day2Wind = document.querySelector(`#day2Wind`);
                        // display day 2
                        day2Date.innerText = "Date : " + data.list[12].dt_txt.split(' ')[0];
                        day2Head.innerText = data.list[12].weather[0].description;
                        day2Text.innerText = "Highest : " + K_to_F(maxMinTemp_d2[0]) + "\nLowest :  " + K_to_F(maxMinTemp_d2[1]);
                        day2Wind.innerText = "Wind:\nHighest: " + maxMinWindSpeed_d2[0] + ' km per hour\nLowest:  ' + maxMinWindSpeed_d2[1] + " km per hour\nDirection:  " + degreeCalc(data.list[12].wind.deg);


                        // *******************************day 3 elements******************************* 
                        const day3Head = document.querySelector(`#day3Head`);
                        const day3Date = document.querySelector(`#day3Date`);
                        const day3Text = document.querySelector(`#day3Text`);
                        const day3Wind = document.querySelector(`#day3Wind`);
                        // display day 3
                        day3Date.innerText = "Date : " + data.list[20].dt_txt.split(' ')[0];
                        day3Head.innerText = data.list[20].weather[0].description;
                        day3Text.innerText = "Highest : " + K_to_F(maxMinTemp_d3[0]) + "\nLowest :  " + K_to_F(maxMinTemp_d3[1]);
                        day3Wind.innerText = "Wind:\nHighest: " + maxMinWindSpeed_d3[0] + ' km per hour\nLowest:  ' + maxMinWindSpeed_d3[1] + " km per hour\nDirection:  " + degreeCalc(data.list[20].wind.deg);


                        // *******************************day 4 elements******************************* 
                        const day4Head = document.querySelector(`#day4Head`);
                        const day4Date = document.querySelector(`#day4Date`);
                        const day4Text = document.querySelector(`#day4Text`);
                        const day4Wind = document.querySelector(`#day4Wind`);
                        // display day 4
                        day4Date.innerText = "Date : " + data.list[28].dt_txt.split(' ')[0];
                        day4Head.innerText = data.list[28].weather[0].description;
                        day4Text.innerText = "Highest : " + K_to_F(maxMinTemp_d4[0]) + "\nLowest :  " + K_to_F(maxMinTemp_d4[1]);
                        day4Wind.innerText = "Wind:\nHighest: " + maxMinWindSpeed_d4[0] + ' km per hour\nLowest:  ' + maxMinWindSpeed_d4[1] + " km per hour\nDirection:  " + degreeCalc(data.list[28].wind.deg);


                        // *******************************day 5 elements******************************* 
                        const day5Head = document.querySelector(`#day5Head`);
                        const day5Date = document.querySelector(`#day5Date`);
                        const day5Text = document.querySelector(`#day5Text`);
                        const day5Wind = document.querySelector(`#day5Wind`);
                        // display day 5
                        day5Date.innerText = "Date : " + data.list[36].dt_txt.split(' ')[0];
                        day5Head.innerText = data.list[36].weather[0].description;
                        day5Text.innerText = "Highest : " + K_to_F(maxMinTemp_d5[0]) + "\nLowest :  " + K_to_F(maxMinTemp_d5[1]);
                        day5Wind.innerText = "Wind:\nHighest: " + maxMinWindSpeed_d5[0] + ' km per hour\nLowest:  ' + maxMinWindSpeed_d5[1] + " km per hour\nDirection:  " + degreeCalc(data.list[36].wind.deg);


                        // set display to block
                        displayBox.style.display = "block";
                        restDays.style.display = "inline-block";
                    })
                    .catch(error => {
                        console.log("Error: ", error);
                    })
            })
    }
}
// ******************************************************************************************************************************


// ******************************************* MAIN (running whenever page freshed **********************************************
// get local storage searched data and put on the page
let historyArray = JSON.parse(localStorage.getItem(`history`)) || [];
historyArray.forEach(item => {
    if (item !== '') {
        createHistoryButton(item);
    }
});

// behavior when click search btn
searchBtn.addEventListener(`click`, function () {
    addSearch();
    getData(inputBox.value);
})
// *****************************************************************************************************************************
