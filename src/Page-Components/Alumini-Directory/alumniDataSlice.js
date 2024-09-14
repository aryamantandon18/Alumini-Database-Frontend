import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAlumni = createAsyncThunk('alumni/fetchAlumni', async () => {
  const response = await axios.get('YOUR_API_ENDPOINT_HERE');
  return response.data;
});

const alumniDataSlice = createSlice({
  name: 'alumniData',
  initialState: {
    alumniData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlumni.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAlumni.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.alumniData = action.payload;
      })
      .addCase(fetchAlumni.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default alumniDataSlice.reducer;
