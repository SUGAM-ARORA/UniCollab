const city = document.querySelector(".inputcity");

const inputform = document.querySelector(".inputForm");

const card = document.querySelector(".display");

const apikey = "4ff8a6dd831902dadd5a06c8aca75468";

inputform.addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputCity = city.value;

  if (inputCity) {
    try {
      const wdata = await getWeather(inputCity);
      displayCard(wdata);
    } catch (error) {
      dispError(error);
    }
  } else {
    dispError("Please enter a city");
  }
});

async function getWeather(city) {
  const apifetch = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  const response = await fetch(apifetch);
  console.log(response);

  if (!response.ok) {
    throw new Error("Could not Fetch the weather data");
  }
  return response.json();
}

function displayCard(data) {
  console.log(data);
  const {
    name: value,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  const city = document.createElement("h2");
  const temprature = document.createElement("p");
  const fahrenhiet = document.createElement("p");
  const humidityDisp = document.createElement("p");
  const descrip = document.createElement("p");
  const emoji = document.createElement("p");

  city.textContent = value;
  temprature.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  fahrenhiet.textContent = `${(((temp - 273.15) * 9) / 5 + 32).toFixed(1)}°F`;
  humidityDisp.textContent = `Humidity: ${humidity}%`;
  descrip.textContent = description;
  emoji.textContent = getWeatherEmoji(id);

  city.classList.add("city");
  //temprature.classList.add("display");
  //fahrenhiet.classList.add("display");
  humidityDisp.classList.add("humidityDisp");
  descrip.classList.add("decrip");
  emoji.classList.add("emoji");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(city);
  card.appendChild(temprature);
  card.appendChild(fahrenhiet);
  card.appendChild(humidityDisp);
  card.appendChild(descrip);
  card.appendChild(emoji);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "🌦️";
    case weatherId >= 500 && weatherId < 600:
      return "🌧️";
    case weatherId >= 600 && weatherId < 700:
      return "🌨️";
    case weatherId == 701:
      return "🌁";
    case weatherId == 800:
      return "☀️";
    case weatherId > 800:
      return "⛅";
    default:
      return "❓";
  }
}

function dispError(message) {
  const error = document.createElement("p");
  error.textContent = message;
  error.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(error);
}
