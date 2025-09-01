 const apiKey = 'bfbf839d89633be7d9b267dbe7ae6639'; // Replace with your actual API key

function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                 <p>Temperature: ${data.main.temp} &#8451;</p>
                                 <p>Weather: ${data.weather[0].description}</p>`;
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. ${error.message}</p>`;
      });
  }

  function showWeatherByCoords(event) {
    event.preventDefault();
    const lat = document.getElementById('latitude').value.trim();
    const lon = document.getElementById('longitude').value.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather at [${lat}, ${lon}]</h2>
                                 <p>Location: ${data.name || 'Unknown'}</p>
                                 <p>Temperature: ${data.main.temp} &#8451;</p>
                                 <p>Weather: ${data.weather[0].description}</p>`;
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. ${error.message}</p>`;
      });
  }
  
  
  document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
  document.getElementById('coordForm').addEventListener('submit', showWeatherByCoords);