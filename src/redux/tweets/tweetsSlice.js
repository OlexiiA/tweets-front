import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utills/axios.js";

const initialState = {
  tweets: [],
  popularTweets: [],
  loading: false,
};

export const createTweets = createAsyncThunk(
  "tweets/createTweets",
  async (params) => {
    try {
      const { data } = await axios.post("/tweets", params);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllTweets = createAsyncThunk(
  "tweets/getAllTweets",
  async () => {
    try {
      const { data } = await axios.get("tweets");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeTweets = createAsyncThunk(
  "tweets/removeTweets",
  async (id) => {
    try {
      const { data } = await axios.delete(`/tweets/${id}`, id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateTweets = createAsyncThunk(
  "tweets/updateTweets",
  async (updatedTweet) => {
    try {
      const { data } = await axios.put(
        `/tweets/${updatedTweet.id}`,
        updatedTweet
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTweets.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTweets.fulfilled, (state, action) => {
        state.loading = false;
        state.tweets.push(action.payload);
      })
      .addCase(createTweets.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAllTweets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTweets.fulfilled, (state, action) => {
        state.loading = false;
        state.tweets = action.payload.tweets;
        state.popularTweets = action.payload.popularTweets;
      })
      .addCase(getAllTweets.rejected, (state) => {
        state.loading = false;
      })
      .addCase(removeTweets.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeTweets.fulfilled, (state, action) => {
        state.loading = false;
        state.tweets = state.tweets.filter(
          (tweet) => tweet._id !== action.payload._id
        );
      })
      .addCase(removeTweets.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateTweets.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTweets.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.tweets.findIndex(
          (tweet) => tweet._id === action.payload._id
        );
        state.tweets[index] = action.payload;
      })
      .addCase(updateTweets.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default tweetsSlice.reducer;
