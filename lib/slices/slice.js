import { createSlice } from "@reduxjs/toolkit";

const dashboarSlice = createSlice({
  name: "/dashboardSlice",
  initialState: {
    refresh: false,
    products: [],
    visitors: [],
    isAddCartOpen: false,
  },
  reducers: {
    setRefresh: (state, action) => {
      state.refresh = action.payload;
      console.log(state.refresh);
    },
    setIsAddCart: (state, action) => {
      state.isAddCartOpen = action.payload;
    },
    setProducts: (state, action) => {
      const datas = action.payload;
      state.products = datas?.map((item) => ({
        ...item,
        revenue: item?.price * item?.sales,
      }));
    },
    setVisitors: (state, action) => {
      state.visitors = action.payload;
    },
  },
});

export default dashboarSlice.reducer;
export const { setIsAddCart, setProducts, setVisitors, setRefresh } =
  dashboarSlice.actions;
