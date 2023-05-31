import { createSlice } from '@reduxjs/toolkit';

const homePosts = createSlice({
    name: "homePosts",
    initialState: {
        homePosts: []
    },
    reducers: {
        addPosts: (state, action) =>{
            state.homePosts = action.payload

        },
        upVote: (state, action) =>{
            const index = action.payload;
            state.homePosts[index].upvotes += 1;
        },
        downVote: (state, action) =>{
            const index = action.payload;
            state.homePosts[index].upvotes -= 1;
        }
    }
})

export const selectHomePosts = (state) => state.homePosts.homePosts;
export const { addPosts, upVote, downVote } = homePosts.actions;
export default homePosts.reducer;
