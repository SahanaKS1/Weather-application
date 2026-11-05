# 🌦️ Weather Application – Real-Time Weather Monitoring Platform

A modern, responsive weather application built with **React.js and Vite**, designed to provide users with an interactive experience for exploring weather conditions, forecasts, air quality and geographical weather information.

The project follows a component-based architecture, focusing on reusable UI components, maintainable code organization and integration with external services.

## 🚀 Features

- **Weather Dashboard:** View weather information through an interactive dashboard.
- **Location Search:** Search for weather information using the search interface.
- **Weather Forecast:** Explore forecast information.
- **Air Quality Monitoring:** Dedicated interface for air-quality information.
- **Interactive Weather Map:** Visualize geographical weather information.
- **Favourite Locations:** Dedicated functionality for managing favourite locations.
- **User Authentication:** Login and signup interfaces with Firebase integration.
- **Responsive Interface:** Designed to provide a consistent experience across different screen sizes.

*Note: Feature availability depends on the current implementation and configuration of the external APIs and Firebase services.*

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Development server and build tooling |
| JavaScript | Application logic |
| CSS3 | Styling and responsive layouts |
| Firebase | Authentication and related backend services |
| External Weather API | Weather data integration |
| Leaflet | Interactive maps, if used by the application |

## 🏗️ Project Architecture

The application uses a modular, component-based structure.

```text
weather-application/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── AirQuality.jsx
│   │   ├── Favorites.jsx
│   │   ├── Forecast.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   └── WeatherMap.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── SplashScreen.jsx
│   │
│   ├── services/
│   │   ├── weatherService.js
│   │   └── firebaseService.js
│   │
│   ├── hooks/
│   │   └── useWeather.js
│   │
│   ├── utils/
│   │   └── weatherHelpers.js
│   │
│   ├── config/
│   │   └── firebase.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd weather-application
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root and add the configuration required by your application.

Example:

```env
VITE_WEATHER_API_KEY=your_weather_api_key

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

Use the exact variable names expected by your source code. Never commit your actual `.env` file.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🏗️ Production Build

To generate an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## ☁️ Deployment

The application can be deployed using Vercel.

1. Push the project to GitHub.
2. Open [Vercel](https://vercel.com/).
3. Import your GitHub repository.
4. Select Vite as the framework.
5. Configure the required environment variables.
6. Use the following build settings:

| Configuration | Value |
|---|---|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

7. Deploy the application.

After deployment, verify the application, API integrations, authentication and page navigation.

## 🧠 Engineering Concepts Demonstrated

This project provides practical exposure to:

- Component-based frontend architecture.
- Reusable React components.
- State management and React Hooks.
- REST API integration.
- Asynchronous JavaScript.
- Firebase integration.
- Responsive web development.
- Modular code organization.
- Production builds and deployment.

## 🔮 Future Enhancements

Potential improvements include:

- Extended hourly and 7-day weather forecasts.
- Weather alerts and notifications.
- Historical weather analytics.
- Improved loading and error handling.
- Location-based weather detection.
- Unit conversion between Celsius and Fahrenheit.
- Automated testing and continuous integration.
- Performance monitoring and optimization.

## 👩‍💻 Developer

**Sahana K S**

Artificial Intelligence and Machine Learning Engineering

- GitHub: [Add your GitHub profile](https://github.com/)
- LinkedIn: [Sahana K S](https://www.linkedin.com/in/sahana-k-s-a2bb252a3/)

---

**Project:** Weather Application  
**Category:** Full-Stack / Frontend Web Development  
**Status:** Development and deployment

Built to demonstrate practical frontend engineering, API integration and modern web application development.
