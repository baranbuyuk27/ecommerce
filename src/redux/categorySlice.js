import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    categories:[]
}

export const getCategories = createAsyncThunk("category",async()=>{
    const response = await fetch("https://fakestoreapi.com/products/categories")
    const data = response.json();
    return data;
})

const categorySlice = createSlice({
        name:"categories",
        initialState,
        reducers: {},
        extraReducers:(builder)=>{
            builder
            .addCase(getCategories.fulfilled, (state,action)=>{
                state.categories = action.payload;
            })
        }
})

//fullfiled asenkron işler tamamlandığında 
//pending bekleme durumunda 
//rejected reddedilme durumunda kullanılır pending ve rejected kullanırken mecburen loading işlemleri yapmamız gerekiyor

export default categorySlice.reducer