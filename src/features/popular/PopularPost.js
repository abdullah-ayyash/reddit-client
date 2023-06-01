import PostContainer from "../../components/PostContainer"
import { upVote } from "./popularSlice"
import { useDispatch } from "react-redux"

export default function HomePost({ posts }) {

  const dispatch = useDispatch()
  const upVoteHandler = (index) => {
    dispatch(upVote(index))
  }

  return(
  posts.map((post, index) => (
      <PostContainer
        upVoteHandler={upVoteHandler}
        key={index}
        index={index}
        upvotes={post.upvotes}
        voteRatio={post.voteRatio}
        title={post.title}
        description={post.description}
        image={post.image}
        author={post.author}
      /> )
    )
  )

}
