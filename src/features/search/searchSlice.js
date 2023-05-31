import { createSlice } from "@reduxjs/toolkit";

const searchPosts = createSlice({
    name: "searchPosts",
    initialState: {
        searchPosts: {

        },
        searchTerm: ""
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
        }
    }
})

export const { addPosts,addSearchTerm,upVote,downVote } = searchPosts.actions;
export const selectSearchPosts = (state) => state.searchPosts.searchPosts;
export const selectSearchTerm = (state) => state.searchPosts.searchTerm;
export default searchPosts.reducer;