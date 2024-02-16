import {configureStore} from '@reduxjs/toolkit';
import dashboardSlice from './slices/slice'
export const store = configureStore({
    reducer:{
        dashboardReducer:dashboardSlice
    }
})