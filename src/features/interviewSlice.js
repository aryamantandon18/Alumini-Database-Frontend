import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    interviews: [],
    status: 'idle',
    error: null
};

// Retrieve JWT token from local storage
const JWTtoken = localStorage.getItem('jwtToken');
console.log('JWT Token:', JWTtoken); // Log the JWT token to verify

// Thunk to fetch all interviews
export const fetchAllInterviews = createAsyncThunk(
  'interviews/fetchAllInterviews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/interviewexperiences', {
        headers: {
          'Authorization': `Bearer ${JWTtoken}`
        }
      });
      console.log('API Response:', response.data); // Log the API response
      return response.data;
    } catch (error) {
      console.error('API Error:', error.response.data); // Log the API error
      return rejectWithValue(error.response.data);
    }
  }
);

// Create interviews slice
const interviewsSlice = createSlice({
    name: 'interviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllInterviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllInterviews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.interviews = action.payload;
            })
            .addCase(fetchAllInterviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default interviewsSlice.reducer;
