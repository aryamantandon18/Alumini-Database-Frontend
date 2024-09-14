import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    achievements: [],
    status: 'idle',
    error: null
};

const JWTtoken = localStorage.getItem('jwtToken');
console.log('JWT Token:', JWTtoken); // Log the JWT token to verify


// Thunk to fetch all achievements
// Thunk to fetch all achievements
export const fetchAllAchievements = createAsyncThunk(
  'achievements/fetchAllAchievements',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/achievement', {
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


const achievementsSlice = createSlice({
    name: 'achievements',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllAchievements.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllAchievements.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.achievements = action.payload;
            })
            .addCase(fetchAllAchievements.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default achievementsSlice.reducer;
