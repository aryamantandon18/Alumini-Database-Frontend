import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Initial state
const initialState = {
    eventData: [],
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null
};

// JWT token
const JWTtoken = localStorage.getItem('jwtToken');
console.log('JWT Token:', JWTtoken); // Log the JWT token to verify

// Thunk to fetch all events
export const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/event', {
                headers: {
                    'Authorization': `Bearer ${JWTtoken}`
                }
            });
            console.log('API Response:', response.data); // Log the API response
            return response.data;
        } catch (error) {
            console.error('API Error:', error.response ? error.response.data : error.message); // Log the API error
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

// Create the eventSlice
const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {}, // Keep reducers property empty
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.eventData = action.payload;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

// Export reducer
export default eventSlice.reducer;
