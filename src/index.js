function changeCurrentTemperature(response) {
  
    let currentTemperature = Math.round(response.data.temperature.current);
    let changedTemperature = document.querySelector("#temperature");
    let cityName = document.querySelector("#city-name");
    changedTemperature.innerHTML = currentTemperature;
    cityName.innerHTML = response.data.city.trim();
  }
  
  function changeCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let currentCity = searchInput.value
  
    let apiKey = "9240352440ao0101at80cbf93b35d00b"; 
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${currentCity}&key=${apiKey}&units=metric`;
      
    axios.get(apiUrl).then(changeCurrentTemperature);
     
    };
    
     
  function updateData() {
  let now = new Date();
  let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayName = weekDays[now.getDay()];
  let hours = (`0`+ now.getHours()).slice(-2);
  let minutes = (`0`+ now.getMinutes()).slice(-2);
  currentTime.innerHTML = (`${dayName} ${hours}:${minutes}`);
  };
  
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", changeCity);
  
  let currentTime = document.querySelector("#current-time");
  searchForm.addEventListener("submit", updateData);