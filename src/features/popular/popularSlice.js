import { createSlice } from '@reduxjs/toolkit';


const popularPosts = createSlice({
    name: "popularPosts",
    initialState: {
        popularPosts: {

        }
    },
    reducers: {
        addPopularPosts: (state, action) => {
            state.popularPosts = action.payload
        },
        upVote: (state, action) =>{
            const index = action.payload;
            state.popularPosts[index].upvotes += 1;
        },
        downVote: (state, action) =>{
            const index = action.payload;
            state.popularPosts[index].upvotes -= 1;
        }
    }
})

export const selectPopularPosts = (state) => state.popularPosts.popularPosts;
export const { addPopularPosts,upVote,downVote } = popularPosts.actions;
export default popularPosts.reducer;

