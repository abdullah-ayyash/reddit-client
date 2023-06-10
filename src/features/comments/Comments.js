import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { loadComments } from "../homePosts/homeSlice";
import Comment from "./Comment";

export default function Comments() {
  const postId = useSelector((state) => state.homePosts.postId);
  const isLoadingComments = useSelector((state) => state.homePosts.isLoadingComments);
  const commentsList = useSelector((state) => state.homePosts.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    if (postId) {
      dispatch(loadComments(postId));
    }
  }, [postId])
  console.log("Post id is: " + postId)

  if (isLoadingComments) {
    return (
      <div>
        <h1>Loading......</h1>
      </div>
    )
  }
  if (commentsList.length > 0) {
    return (
      <div>
        {commentsList.map(item => (
          <Comment author={item.author} text={item.text} createdAt={item.createdAt} key={item.id} />
        )
        )
        }
      </div>
    )

  }

}
