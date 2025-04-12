fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=a33479c7be343e47718fa8a8544e3d7b&units=metric")
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.main.temp)
    
    temperature.textContent = "Temperature: " + data.main.temp + "\u00B0C";    

});