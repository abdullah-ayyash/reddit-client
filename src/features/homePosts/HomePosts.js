import HomePost from "./HomePost"
import { useEffect, useState } from "react"
import { addPosts } from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectHomePosts } from "./homeSlice";
import { formateData } from "../../util/util";


export default function HomePosts() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const selectedPosts = useSelector(selectHomePosts)
  useEffect(() => {
    fetch('https://www.reddit.com/r/popular.json')
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

  }, [])


  // console.log(selectedPosts);
  
  return (
    <section>
      {loading ? (
        <h3 id="loading">Loading......</h3>) :
        <HomePost posts={selectedPosts} />
      }
    </section>
  )
}
