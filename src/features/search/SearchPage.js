import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm, loadPosts } from "./searchSlice";
import SearchPost from "./SearchPost";

export default function SearchPage() {
  const dispatch = useDispatch();
  const searchPosts = useSelector((state) => state.searchPosts.searchPosts);
  const searchTerm = useSelector(selectSearchTerm);
  const isLoading = useSelector((state) => state.searchPosts.isLoadingPosts);

  useEffect(() => {
    dispatch(loadPosts(searchTerm));
  }, [searchTerm]);

  if (isLoading) {
    return (
      <section>
        <h3 id="loading">Loading......</h3>
      </section>
    );
  }

  if (searchPosts.length > 0) {
    return (
      <section>
        <SearchPost posts={searchPosts} />
      </section>
    );
  } else {
    return null;
  }
}
