import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


// note this is a free trial version. You can get our keys bey siging up for the service
const NewsAPI = `https://newsapi.org/v2/top-headlines?language=en&apiKey=4e21eae6b80d42af9d2c9e6505a346c4`


const initialState = {
    status: 'idle',
    data: [],
    errors: null

}


export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async () => {
        headers =  {
            'Content-Type': 'application/json'
        }
        try {
            const response = await axios.get(NewsAPI, {headers:headers})
            return response.data
        } catch (error) {
            return error
        }

    }
)

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.data = action.payload
        })
        builder.addCase(fetchNews.rejected, (state, action) => {
            state.status = "failed"
            state.errors = "failed"
        })
    }
})

export default newsSlice.reducer

export const getAllNews = (state) => state.news.data

export const getNewsStatus = (state) => state.news.status
export const getNewsErrors = (state) => state.news.errors
