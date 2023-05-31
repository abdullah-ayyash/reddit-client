import { configureStore } from "@reduxjs/toolkit";
import homePostsReducer from "./features/homePosts/homeSlice"
import popularPostsReducer from "./features/popular/popularSlice"
import searchPostsReducer from "./features/search/searchSlice"

const store =  configureStore({
    reducer: {
      homePosts: homePostsReducer,
      popularPosts: popularPostsReducer,
      searchPosts: searchPostsReducer
    },
  });

  export default store;