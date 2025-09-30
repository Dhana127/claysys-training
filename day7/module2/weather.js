const weather = document.getElementById("search-btn-id").addEventListener("click", getWeatherData)
function getWeatherData() {
    const city = document.getElementById("city-id").value;
    const apikey = "6cd2769e8f3d2fb77bf2fdf568bfe9d3";
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weather = document.getElementById("weather-details");
            weather.innerHTML="";
            const row1 = document.createElement("div");
            row1.style.display = "flex";
            row1.style.justifyContent = "space-between";
            row1.style.marginBottom = "0px";
            row1.style.paddingBottomBottom = "4px";
            const row2 = document.createElement("div");
            row2.style.display = "flex";
            row2.style.justifyContent = "space-between";
            row2.style.marginBottom = "0px";
            row2.style.paddingBottomBottom = "4px";
            const row3 = document.createElement("div");
            row3.style.display = "flex";
            row3.style.justifyContent = "space-between";
            row3.style.marginBottom = "0px";
            row3.style.paddingBottomBottom = "4px";
            const row4 = document.createElement("div");
            row4.style.display = "flex";
            row4.style.justifyContent = "space-between";
            row4.style.marginBottom = "0px";
            row4.style.paddingBottomBottom = "4px";

            const forecast = data.list[0];
            const h3_1 = document.createElement("p");
            h3_1.textContent = `City Name:`;
            h3_1.style.marginBottom="0px";
            const h3_11 = document.createElement("p");
            h3_11.textContent = `${data.city.name}`;
            h3_11.style.marginBottom="0px";

            const h3_2 = document.createElement("p");
            h3_2.textContent = `Temperature:`;
            h3_2.style.marginTop="0px";
            h3_2.style.marginBottom="0px";
            const h3_22 = document.createElement("p");
            h3_22.textContent = `${forecast.main.temp_max}'C`;
            h3_22.style.marginTop="0px";
            h3_22.style.marginBottom="0px";

            const h3_3 = document.createElement("p");
            h3_3.textContent = `Humidity:`;
            h3_3.style.marginTop="0px";
            h3_3.style.marginBottom="0px";
            const h3_33 = document.createElement("p");
            h3_33.textContent = `${forecast.main.humidity}%`;
            h3_33.style.marginTop="0px";
            h3_33.style.marginBottom="0px";

            const h3_4 = document.createElement("p");
            h3_4.textContent = `Weather Icon:`;
            h3_4.style.marginBottom="0px";
            const iconCode = forecast.weather[0].icon;
            const img = document.createElement("img");
            img.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            img.style.height = "40px";
            img.style.width = "40px";
            img.style.alignItems = "center";

            row1.appendChild(h3_1);
            row1.appendChild(h3_11);

            row2.appendChild(h3_2);
            row2.appendChild(h3_22);

            row3.appendChild(h3_3);
            row3.appendChild(h3_33);

            row4.appendChild(h3_4);
            row4.appendChild(img);

            weather.appendChild(row1);
            weather.appendChild(row2);
            weather.appendChild(row3);
            weather.appendChild(row4);
        })
        .catch(
            error => console.error(error)
        )


}

