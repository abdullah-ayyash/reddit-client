import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { formateData } from "../../util/util";
export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async (searchTerm,thunkAPI) =>{
      const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`)
      const json = await response.json();
      return formateData(json);
    }
  )

const searchPosts = createSlice({
    name: "searchPosts",
    initialState: {
        searchPosts: [],
        searchTerm: "",
        isLoadingPosts: false,
        failedToLoadPosts: false,
    },

    reducers:{
        addPosts: (state, action) =>{
            state.searchPosts = action.payload;
        },
        addSearchTerm: (state, action) =>{
            state.searchTerm = action.payload
        },
        upVote: (state, action) =>{
            const index = action.payload;
            state.searchPosts[index].upvotes += 1;
        },
        downVote: (state, action) =>{
            const index = action.payload;
            state.searchPosts[index].upvotes -= 1;
        },
        
    },
    extraReducers: {
        [loadPosts.pending]: (state,action) =>{
            state.isLoadingPosts = true;
            state.failedToLoadPosts = false;
        },
        [loadPosts.fulfilled]: (state,action) =>{
            state.searchPosts = action.payload;
            state.isLoadingPosts = false;
            state.failedToLoadPosts = false;   
        },
        [loadPosts.rejected]: (state,action) =>{
            state.isLoadingPosts = false;
            state.failedToLoadPosts = true;
        }
    }
})

export const { addPosts,addSearchTerm,upVote,downVote } = searchPosts.actions;
export const selectSearchTerm = (state) => state.searchPosts.searchTerm;
export default searchPosts.reducer;