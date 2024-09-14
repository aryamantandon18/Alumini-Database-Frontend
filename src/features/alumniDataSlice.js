import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    alumniData: [],
    status: 'idle',
    error: null
};

const JWTtoken = localStorage.getItem('jwtToken');
console.log('JWT Token:', JWTtoken);

export const fetchAlumni = createAsyncThunk(
  'alumniDataSlice/fetchAlumni',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/alumni', {
        headers: {
          'Authorization': `Bearer ${JWTtoken}`
        }
      });
      console.log("Api response: ", response.data);
      return response.data;
    } catch (error) {
      console.log("API error: ", error.response ? error.response.data : error.message);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const alumniDataSlice = createSlice({
  name: 'alumniDataSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlumni.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAlumni.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.alumniData = action.payload;
      })
      .addCase(fetchAlumni.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export default alumniDataSlice.reducer;
