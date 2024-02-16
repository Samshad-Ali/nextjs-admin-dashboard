import {createSlice} from '@reduxjs/toolkit'
const dashboarSlice = createSlice({
    name:'/dashboardSlice',
    initialState:{
        data:[],
        message:'hello'
    },
    reducers:{
        setData:(action,state)=>{
        }
    }
})

export default dashboarSlice.reducer;
export const {setData} = dashboarSlice.actions;