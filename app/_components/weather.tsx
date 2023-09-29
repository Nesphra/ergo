import './weather.css'

const Weather = () => {
    // const weather = {
    //     temperature: {
    //         unit: '',
    //         value: 0,
    //     },
    //     description: '',
    //     iconId: '',
    // };
    
    // let tempUnit = `C`;
    // const KELVIN = 273.15;
    // const key = "62c9d9f7ecc798bab23112454d0c6a98"
    // setPosition();
    // const city = "Houston"
    
    // function getWeather() {
    // let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    // fetch(api)
    //     .then(function (response) {
    //     let data = response.json();
    //     return data;
    //     })
    //     .then(function (data) {
    //     let celsius = Math.floor(data.main.temp - KELVIN);
    //     weather.temperature.value =
    //         tempUnit == 'C' ? celsius : Math.floor((celsius * 9) / 5 + 32);
    //     weather.description = data.weather[0].description;
    //     weather.iconId = data.weather[0].icon;
    //     })}
    // function setPosition() {
    //     getWeather();
    // }

    return (
        <div className="weatherBody">
            <div>Houston Weather</div>
            <div>Image here</div>
            <div className='weatherInfos'>
                <div>4 C</div>
                <div>Overcast Clouds</div>
            </div>
        </div>
    )
}

export default Weather;