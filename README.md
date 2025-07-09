
---

# 🌧️  Weather App

A **React-based web application** that displays **past 7 days of weather data** for any city in **India**, using a **third-party weather API**. Designed with a clean, responsive UI using **Tailwind CSS**.

---

## 🔍 Features

* 🕒 View **past 7 days** of weather history
* 🏙️ Search weather by any **Indian city**
* 🔗 Fetches data from a **third-party weather API**
* 📱 Responsive design with **Tailwind CSS**
* 🌡️ Daily data includes **temperature, humidity, wind speed**, and **conditions**

---

## 🛠️ Tech Stack

* **Frontend:** React
* **Styling:** Tailwind CSS
* **HTTP Requests:** Axios
* **Data Source:** Third-party weather API (like OpenWeatherMap or WeatherAPI)

---

## 📁 Project Structure

```
weather-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/                # Images or icons
│   ├── components/            # Reusable UI components (e.g., Card, SearchBar)
│   │   ├── WeatherCard.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── pages/                 # Main views/screens
│   │   └── Home.jsx
│   │
│   ├── services/              # API functions and utilities
│   │   └── weatherService.js
│   │
│   ├── utils/                 # Helper functions (e.g., date formatting)
│   │   └── formatDate.js
│   │
│   ├── App.jsx                # Root component
│   ├── index.js               # Entry point
│   └── index.css              # Tailwind base styles
│
├── .env                       # API key configuration
├── tailwind.config.js         # Tailwind customization
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project**

   ```bash
   cd weather-app
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Add your API key**

   Create a `.env` file and add:

   ```
   REACT_APP_WEATHER_API_KEY=your_api_key
   ```

5. **Start the app**

   ```bash
   npm start
   ```

---

## 🚀 How It Works

* Enter a city name (India only)
* Fetch coordinates via **geocoding API**
* Use those coordinates to request **past 7 days of weather data**
* Display each day's weather info using styled components

---

## 📦 Dependencies

* **React:** ^18.2.0
* **Axios:** ^1.6.0
* **Tailwind CSS:** ^3.4.1
* (Optional) `react-icons`, `date-fns` for UI and date handling

---

## 🌐 API

You can use one of these for historical data:

* [OpenWeatherMap History API](https://openweathermap.org/api/one-call-3)
* [WeatherAPI.com History](https://www.weatherapi.com/docs/)

> Note: Historical data often requires a **paid plan** depending on the API.

---

## 🤝 Contributing

1. Fork this repo
2. Create your feature branch

   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes

   ```bash
   git commit -m "Add feature"
   ```
4. Push to the branch

   ```bash
   git push origin feature-name
   ```
---
