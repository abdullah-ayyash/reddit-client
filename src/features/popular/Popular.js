import { useDispatch, useSelector } from "react-redux"
import { useEffect,useState } from "react"
import { selectPopularPosts } from "./popularSlice";
import { addPopularPosts } from "./popularSlice";
import { formateData } from "../../util/util";
import PopularPost from './PopularPost'

export default function Popular() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPopularPosts);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://www.reddit.com/hot.json')
        .then(response => response.json())
        .then(data => {
            // Process the response data
            const posts = formateData(data);
            if (posts) {
                dispatch(addPopularPosts(posts));
                setLoading(false);
            }
            
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });

    }, [])

    return (
        <section> 
            { loading ? <h1 id="loading-popular">Loading posts...</h1> : <PopularPost posts={posts} />
            }
        </section>
    
    )
    
    
}
