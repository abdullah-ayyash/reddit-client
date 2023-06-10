import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { formateComments } from '../../util/util';

export const loadComments = createAsyncThunk(
    'comments/loadComments',
    async (postId, thunkAPI) => {
        const response = await fetch(`https://www.reddit.com//comments/${postId}.json`)
        const json = await response.json();
        console.log(formateComments(json))
        return formateComments(json);
    }
)

const homePosts = createSlice({
    name: "homePosts",
    initialState: {
        homePosts: [],
        comments: [],
        postId:"",
        isLoadingComments: false,
        failedLoadingComments: false
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
        },
        setPostId: (state, action) =>{
            state.postId = action.payload;
        }
    },

    extraReducers: {
        [loadComments.pending]: (state,action) =>{
            state.isLoadingComments = true;
            state.failedLoadingComments = false;
        },
        [loadComments.fulfilled]: (state,action) =>{
            state.comments = action.payload;
            state.isLoadingComments = false;
            state.failedLoadingComments = false;   
        },
        [loadComments.rejected]: (state,action) =>{
            state.isLoadingComments = false;
            state.failedLoadingComments = true;
        }
    }
})

export const selectHomePosts = (state) => state.homePosts.homePosts;
export const { addPosts, upVote, downVote,setPostId } = homePosts.actions;
export default homePosts.reducer;
