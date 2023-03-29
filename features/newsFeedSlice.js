import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    loading:false,
    data:[],
    errors:null

}


const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async 
)

export const counterSlice = createSlice({
    name:"news",
    initialState,
    reducers:{

    }
})
