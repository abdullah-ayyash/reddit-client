import PostContainer from "../../components/PostContainer"
import { upVote,downVote } from "./searchSlice"
import { useDispatch } from "react-redux"

export default function HomePost({ posts }) {

  const dispatch = useDispatch()
  const upVoteHandler = (index) => {
    dispatch(upVote(index))
  }
  const downVoteHandler = (index) => {
    dispatch(downVote(index))
  }

  return(
  posts.map((post, index) => (
      <PostContainer
        upVoteHandler={upVoteHandler}
        downVoteHandler={downVoteHandler}
        key={index}
        index={index}
        upvotes={post.upvotes}
        downvotes={post.downvotes}
        voteRatio={post.voteRatio}
        title={post.title}
        description={post.description}
        image={post.image}
        author={post.author}
        publishDate= {post.publishDate}
        id={post.id}
      /> )
    )
  )

}
