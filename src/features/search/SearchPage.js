import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectSearchPosts } from "./searchSlice";
import { selectSearchTerm } from "./searchSlice";
import { loadPosts,isLoadingPosts } from "./searchSlice";
import SearchPost from "./SearchPost";


export default function SearchPage() {
  const dispatch = useDispatch();
  const searchPosts = useSelector(selectSearchPosts);
  const searchTerm = useSelector(selectSearchTerm);
  const isLoading = useSelector(isLoadingPosts);
  useEffect(() => {
    dispatch(loadPosts(searchTerm));
  }, [searchTerm])


  return (
    <section>
      {isLoading ? (
        <h3 id="loading">Loading......</h3>) :
        <SearchPost posts={searchPosts} />
      }
    </section>
  )
}
