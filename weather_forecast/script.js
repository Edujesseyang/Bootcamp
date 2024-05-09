// get link for direct city name search
const API_KEY = `08e63eb3641d6ccee8d95b656261354a`;
const API_KEY2 = `1a98ec91fb8a859bdf57a0189a773a08`;
function getLink(lat, lon, apiKey) {

    let API_LINK = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    console.log(API_LINK);
    return API_LINK;
}


// temp calc
function K_to_F(KelvinTemp) {
    return (((KelvinTemp - 273.15) * 9 / 5) + 32).toFixed(1);
}

// direction finder
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

// selectors def
const inputBox = document.querySelector('#inputBox');
const searchBtn = document.querySelector('#searchBtn');
const displayBox = document.querySelector(`#displayBox`);
const searchHistory = document.querySelector(`#searchHistory`);


// **** save searching history ****
// 1. get local storage searched data and put on the page
let historyArray = JSON.parse(localStorage.getItem(`history`)) || [];
if (historyArray != null) {
    for (let i = 0; i < historyArray.length; i++) {
        if (historyArray[i] != ``) {
            const history = document.createElement(`p`);
            history.textContent = historyArray[i];
            searchHistory.append(history);
            // FIXME: Add class attribute, use querySelectorAll to get all addEventListener getData(value)
        }
    }
}



// 2. click search btn
searchBtn.addEventListener(`click`, function () {
    addSearch();
    getData(inputBox.value);
})


// add searching to the local storage and display to the page
function addSearch() {
    if (!historyArray.includes(inputBox.value) && inputBox.value) {
        const history = document.createElement(`p`);
        historyArray.push(inputBox.value);
        history.textContent = inputBox.value;
        searchHistory.append(history);
    }
    localStorage.setItem(`history`, JSON.stringify(historyArray));
}



// get API data
function getData(searchCity) {
    if (searchCity != '') {
        // fetch nested 
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputBox.value}&limit=1&appid=${API_KEY}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                // get lat and lon
                console.log(data);
                lat = data[0].lat.toFixed(2).toString();
                lon = data[0].lon.toFixed(2).toString();
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
                        console.log(data);

                        // get tempArray include 40 temps of 5 days.
                        let tempArray = [];
                        for (let i = 0; i < 40; i++) {
                            tempArray.push(data.list[i].main.temp);
                        }
                        console.log(tempArray);
                        // get max and min for first day
                        let maxTemp = tempArray[0];
                        let minTemp = tempArray[0];
                        for (let i = 0; i < 8; i++) {

                            if (tempArray[i] >= maxTemp) {
                                maxTemp = tempArray[i];
                            }
                            if (tempArray[i] <= minTemp) {
                                minTemp = tempArray[i];
                            }
                        }


                        // get the max wind speed in day1
                        let windSpeedMax = data.list[0].wind.speed;
                        let windSpeedMin = data.list[0].wind.speed;
                        for (let i = 0; i < 8; i++) {
                            if (windSpeedMax <= data.list[i].wind.speed) {
                                windSpeedMax = data.list[i].wind.speed;
                            }
                            if (windSpeedMin >= data.list[i].wind.speed) {
                                windSpeedMin = data.list[i].wind.speed;
                            }
                        }


                        // create first day box elements
                        const dayBox = document.querySelector(`#dayBox`);
                        const dateTime = document.querySelector(`#dateTime`);
                        const boxHead = document.querySelector(`#boxHead`);
                        const tempMax = document.querySelector(`#tempMax`);
                        const tempMin = document.querySelector(`#tempMin`);
                        const wind = document.querySelector(`#wind`);
                        const localText = document.querySelector(`#localText`);
                        localText.innerText = location;
                        wind.innerText = "Wind:\nhighest: " + windSpeedMax + ' km per hour\nlowest:  ' + windSpeedMin + " km per hour\nDirection:  " + degreeCalc(data.list[0].wind.deg);
                        tempMax.innerText = "Highest temp: " + K_to_F(maxTemp);
                        tempMin.innerText = "Lowest temp:  " + K_to_F(minTemp);
                        boxHead.innerText = data.list[0].weather[0].description;
                        dateTime.innerText = "Date: " + data.list[0].dt_txt.split(' ')[0];
                        dayBox.append(dateTime, localText, boxHead, tempMax, tempMin, wind);
                        displayBox.append(dayBox);
                        displayBox.style.display = "block";
                        dayBox.style.marginTop = "5px";

                        console.log(data.list[0].weather[0].description,);
                    })
                    .catch(error => {
                        console.log("Error: ", error);
                    })
            })
    }
}


