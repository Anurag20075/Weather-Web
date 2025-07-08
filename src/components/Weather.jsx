import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const apiKey = "206a423f99804acc88f74336252606"; // Replace with your actual WeatherAPI key

    const getForecast = async () => {
        try {
            const res = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`
            );
            setWeatherData(res.data);
        } catch (err) {
            console.error("Error fetching forecast:", err);
        }
    };

    return (
        <div className="App p-10 px-30 text-white relative">
            <video
                autoPlay
                muted
                loop
                className="video-bg absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            >
                <source src="/weathers.mp4" type="video/mp4" />
            </video>

            <div className="w-full h-full flex flex-col lg:flex-row rounded-2xl bg-[#2e2e3f]/50 backdrop-blur-[2px] p-5">
                {/* Left Column - Input and Today Weather */}
                <div className="w-full lg:w-[500px] flex flex-col">
                    {/* Search Box */}
                    <div className="flex mb-4">
                        <div className="flex bg-white/30 backdrop-blur-sm rounded-full overflow-hidden shadow-md">
                            <input
                                type="text"
                                placeholder="Enter city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="px-4 py-2 w-[250px] bg-transparent text-white placeholder-white focus:outline-none"
                            />
                            <button
                                onClick={getForecast}
                                className="px-4 py-2 bg-gray-600 text-white hover:bg-gray-700 transition-all"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Today Weather */}
                    {weatherData && (
                        <div className="flex flex-col p-5 rounded-lg bg-[#2e2e3f]/50 hover:bg-[#2e2e3f]/70 h-full">
                            <h3 className="text-xl font-bold mb-1">
                                {weatherData.location.name},{" "}
                                {weatherData.location.country}
                            </h3>
                            <p className="text-2xl mb-1">
                                {weatherData.current.temp_c}°C -{" "}
                                {weatherData.current.condition.text}
                            </p>
                            <img
                                src={weatherData.current.condition.icon}
                                alt="icon"
                                className="w-90"
                            />
                            <p>
                                Feels like: {weatherData.current.feelslike_c}°C
                            </p>
                            <p>Humidity: {weatherData.current.humidity}%</p>
                            <p>Wind: {weatherData.current.wind_kph} kph</p>
                        </div>
                    )}
                </div>

                {/* Right Column - Hourly + 7 Day */}
                {weatherData && (
                    <div className="w-[700px]  lg:w-[700px] flex flex-col mt-10 lg:mt-15 lg:ml-5">
                        {/* Hourly Forecast */}
                        <div>
                            <h3 className="text-xl font-bold mb-2">
                                Hourly Forecast
                            </h3>
                            <div className="flex overflow-auto gap-3">
                                {weatherData.forecast.forecastday[0].hour
                                    .slice(
                                        new Date().getHours(),
                                        new Date().getHours() + 12
                                    )
                                    .map((hour, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-[#2e2e3f]/50 hover:bg-[#2e2e3f]/70 p-3 rounded-lg min-w-[100px] text-center"
                                        >
                                            <p>{hour.time.split(" ")[1]}</p>
                                            <img
                                                src={hour.condition.icon}
                                                alt="icon"
                                                className="mx-auto"
                                            />
                                            <p>{hour.temp_c}°C</p>
                                            <p className="text-sm">
                                                {hour.condition.text}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* 7-Day Forecast */}
                        <div className="w-[700px] mt-20">
                            <h3 className="text-xl font-bold mb-2">
                                7-Day Forecast
                            </h3>
                            <div className="flex gap-4 overflow-auto">
                                {weatherData.forecast.forecastday.map(
                                    (day, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#2e2e3f]/50 hover:bg-[#2e2e3f]/70 p-3 rounded-lg min-w-[120px] text-center"
                                        >
                                            <p className="font-semibold">
                                                {day.date}
                                            </p>
                                            <img
                                                src={day.day.condition.icon}
                                                alt="icon"
                                                className="mx-auto"
                                            />
                                            <p className="text-sm">
                                                {day.day.condition.text}
                                            </p>
                                            <p>Max: {day.day.maxtemp_c}°C</p>
                                            <p>Min: {day.day.mintemp_c}°C</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
