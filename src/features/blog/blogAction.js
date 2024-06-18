import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogs = createAsyncThunk(
    "/blogs",
    async (_, { rejectWithValue }) => {
      try {  
        const config = {
          headers: {
            "Content-Type": "application/json"
          },
        };
        const response = await axios.get(`/blogs/`, config);
        return response.data;
      } catch (error) {
        if (error.response) {
          return rejectWithValue(error.response.data);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );