import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('fetchPosts', async (page = 0) => {
  console.log('fetchPosts', page);
  let youtubeData = await fetch(
    `https://internship-service.onrender.com/videos?page=${page}`
  );
  let data = await youtubeData.json();
  return data;
});

const appSlice = createSlice({
  name: 'app',
  initialState: {
    count: 0,
    videos: [],
    page: 0,
    isMenuOpen: false,
    selectedVideo: {},
  },
  reducers: {
    getVideos: (state, action) => {
      state.videos = [...state.videos, ...action.payload.data.posts];
      state.page += 1;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setSelectedVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
    clearSelectedVideo: (state) => {
      state.selectedVideo = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      //  state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.videos = [...state.videos, ...action.payload.data.posts];
      state.page += 1;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {});
  },
});

export const {
  increment,
  decrement,
  toggleMenu,
  setSelectedVideo,
  clearSelectedVideo,
} = appSlice.actions;
export default appSlice.reducer;
