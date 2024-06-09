import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        currentWeather:[],
        forecastWeather:[{}, {}, {}, {},{}],
    },

    reducers: {
        onLoadCurrentWeather: (state, {payload}) => {
            state.currentWeather = payload;
        },

        onLoadForescastWeather: (state, {payload}) => {
            state.forecastWeather = payload;
        },

        onMessage: (state, { payload }) => {
            state.message = payload;
          },
      
          clearMessage: (state) => {
            state.message = undefined;
          },
    }

});

export const { onLoadForescastWeather, onLoadCurrentWeather, onMessage, clearMessage } = weatherSlice.actions;