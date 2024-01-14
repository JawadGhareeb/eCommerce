import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = { records: [], loading: false, error: null, eye: [] };
export const fetchPosts = createAsyncThunk(
  "cart/fetchPosts",
  async (_, thunkAPI) => {
    const { rejectWIthValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/cart");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWIthValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "cart/deletePost",
  async (id, thunkAPI) => {
    const { rejectWIthValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/cart/${id}", {
        method: "Delete",
      });
      return id;
    } catch (error) {
      return rejectWIthValue(error.message);
    }
  }
);

export const insertPost = createAsyncThunk(
  "cart/insertPost",
  async (item, thunkAPI) => {
    const { rejectWIthValue, getState } = thunkAPI;
    const { auth } = getState();
    item.userId = auth.id;
    try {
      const res = await fetch("http://localhost:5000/cart", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWIthValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //insert Posts
    [insertPost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [insertPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
    },
    [insertPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //delete  posts
    [deletePost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = state.records.filter((e) => e.id !== action.payload);
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default postSlice.reducer;
