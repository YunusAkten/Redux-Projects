import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "fetchdata",
  async (state, action) => {
    const options = {
      method: "GET",
      url: "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
      headers: {
        "X-RapidAPI-Key": "e8dc3df2ebmsh98851e360f3419bp1dba7ajsnbcabaf9ea1dd",
        "X-RapidAPI-Host": "corona-virus-world-and-india-data.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState: {
    dataLoading: true,
    data: [],
    country: "USA",
    countryData: [],
    countryDataLoading: true,
    error: "",
  },
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
      state.countryDataLoading = true;
    },
    setCountryData: (state, action) => {
      state.countryData = action.payload;
      state.countryDataLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.dataLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, response) => {
      state.dataLoading = false;
      state.data = response.payload;
      state.countries = response.payload.countries_stat;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.dataLoading = false;
      state.error = action.error.message;
    });
  },
});
export const { setCountry, setCountryData } = appSlice.actions;
export default appSlice.reducer;
