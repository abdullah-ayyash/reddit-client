import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectSearchPosts } from "./searchSlice";
import { selectSearchTerm } from "./searchSlice";
import { formateData } from "../../util/util";
import { addPosts, } from "./searchSlice";
import SearchPost from "./SearchPost";


export default function SearchPage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const searchPosts = useSelector(selectSearchPosts);
    const searchTerm = useSelector(selectSearchTerm);
    console.log(searchTerm)
    useEffect(()=>{
        fetch(`https://www.reddit.com/search.json?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          // Process the response data
          const posts = formateData(data)
  
          if (posts) {
            setLoading(false)
          }
          dispatch(addPosts(posts));
        })
        .catch(error => {
          // Handle any errors
          console.error('Error:', error);
        });
    },[searchTerm])

    return (
    <section>
      {loading ? (
        <h3 id="loading">Loading......</h3>) :
        <SearchPost posts={searchPosts} />
      }
    </section>
    )
}
