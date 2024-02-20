import {createSlice} from '@reduxjs/toolkit'


const dashboarSlice = createSlice({
    name:'/dashboardSlice',
    initialState:{
        refresh:false,
        products:[],
        isAddCartOpen:false,
    },
    reducers:{
        setRefresh:(state,action)=>{
            state.refresh = action.payload;
            console.log(state.refresh)
        },
        setIsAddCart:(state,action)=>{
            state.isAddCartOpen=action.payload;
        },
        setProducts : (state,action)=>{
            const datas = action.payload;
             state.products = datas?.map((item)=>({
                ...item,
                revenue:item?.price * item?.sales
             }));
             console.log('from slice',state.products)
        }
    }
})

export default dashboarSlice.reducer;
export const {setIsAddCart,setProducts,setRefresh} = dashboarSlice.actions;