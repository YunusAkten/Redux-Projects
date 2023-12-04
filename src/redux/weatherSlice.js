import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import dayjs from "dayjs";
//for dropdown
export const fetchCities = createAsyncThunk("weather/fetchCities", () =>
  axios
    .get(
      "https://api.openaq.org/v2/cities?limit=100&page=1&offset=0&sort=asc&country=tr&order_by=city"
    )
    .then((response) => {
      return response.data.results;
    })
);
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (selectedCity) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric `
    );

    const dailyWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.city.coord.lat}&lon=${response.data.city.coord.lon}&units=metric&lang=tr&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_API_KEY} `
    );
    return dailyWeather.data.daily;
  }
);
// for user location
export const fetchWeatherByCoord = createAsyncThunk(
  "weather/fetchWeatherByCoord",
  async (coord) => {
    const dailyWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&lang=tr&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_API_KEY} `
    );
    return dailyWeather.data.daily;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    selectedCity: "İstanbul",
    cities: [],
    coord: {},
    defaultCoord: {},
    weeklyWeather: [],
    date: dayjs().format("DD.MM"),
  },
  reducers: {
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    setCities: (state, action) => {
      state.cities = action.payload;
    },
    setCoord: (state, action) => {
      state.coord = action.payload;
    },
    setWeeklyWeather: (state, action) => {
      state.weeklyWeather = action.payload;
    },
    setDefaultCoord: (state, action) => {
      state.defaultCoord = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        console.error("fetchCities failed with error: ", action.error.message);
      });

    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weeklyWeather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        console.error("fetchWeather failed with error: ", action.error.message);
      })

      .addCase(fetchWeatherByCoord.rejected, (state, action) => {
        console.error(
          "fetchWeatherByCoord failed with error: ",
          action.error.message
        );
      })
      .addCase(fetchWeatherByCoord.fulfilled, (state, action) => {
        state.weeklyWeather = action.payload;
      });
  },
});
export const { setSelectedCity, setCoord, setWeeklyWeather, setDefaultCoord } =
  weatherSlice.actions;
export default weatherSlice.reducer;
