const apiKey ="2ee27edc88eb4e8eff1c5b63702d38ea";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.getElementById("text");
let searchBtn = document.getElementById("button");
let weatherIcon = document.querySelector('.weather-icon');

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

async function checkWeather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
    if(response.status == 404)
        {
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }else{

        
    
    var data = await response.json();
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png";

    }else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png";}
        else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "images/drizzle.png";}
            else if(data.weather[0].main === "Mist"){
                weatherIcon.src = "images/mist.png";}

    document.querySelector('.weather').style.display = "block";
    document.querySelector(".error").style.display="none";
}
}