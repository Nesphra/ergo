import React, { useState, useEffect } from 'react';
import './weather.css';

export default function Weather() {
    const [weather, setWeather] = useState({
        temperature: {
            unit: '',
            value: 0,
        },
        description: '',
        iconId: '',
    });
    
    const [tempUnit, setTempUnit] = useState('C');
    const KELVIN = 273.15;
    const key = "62c9d9f7ecc798bab23112454d0c6a98";
    const [city, setCity] = useState("Houston");
    
    useEffect(() => {
        function getWeather() {
            let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
            fetch(api)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    let celsius = Math.floor(data.main.temp - KELVIN);
                    setWeather({
                        temperature: {
                            unit: tempUnit,
                            value: tempUnit === 'C' ? celsius : Math.floor((celsius * 9) / 5 + 32),
                        },
                        description: data.weather[0].description,
                        iconId: data.weather[0].icon,
                    });
                });
        }

        getWeather();
    }, [tempUnit, city, key]);

    return (
        <div className="weatherBody">
            <div className="city">
                <div>{city}</div>
                <div>Weather</div>
            </div>
            <div className='icon'>{weather.iconId}</div>
            <div className='weatherInfos'>
                <div>{weather.temperature.value} °{tempUnit}</div>
                <div>{weather.description}</div>
            </div>
        </div>
    );
}
