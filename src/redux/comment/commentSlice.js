import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utills/axios.js";

const initialState = {
  comments: [],
  loading: false,
};

export const createComment = createAsyncThunk(
  "comments/createComment",
  async ({ tweetId, comment }) => {
    try {
      const { data } = await axios.post(`/comments/${tweetId}`, {
        tweetId,
        comment,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (tweetId) => {
    try {
      const { data } = await axios.get(`tweets/comments/${tweetId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments.push(action.payload);
      })
      .addCase(createComment.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default commentSlice.reducer;
