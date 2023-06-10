import { useState } from "react"
import { setPostId } from "../features/homePosts/homeSlice";
import { useDispatch } from "react-redux";
import Comments from "../features/comments/Comments";
// make the homepage a list of subreddits
export default function PostContainer({ index, upVoteHandler, downVoteHandler, upvotes, downvotes, voteRatio, title, description, image, author, publishDate,id }) {
  const [uniquePostId, setUniquePostId] = useState(id);
  const [showComments, setShowComments] = useState(false); 
  const [upClicked, setUpClicked] = useState(false);
  const [downClicked, setDownClicked] = useState(false);
  const [upColor, setUpColor] = useState("aliceblue");
  const [downColor, setDownColor] = useState("aliceblue");
  const dispatch = useDispatch();
  const handleUpClick = (e) => {
    let index = Number(e.target.id);
    if (!upClicked && !downClicked) {
      setUpColor("aquamarine");
      setUpClicked(true);
      setDownClicked(false);
      upVoteHandler(index);
    }
    else if (!upClicked && downClicked) {
      setUpColor("aquamarine");
      setDownColor("aliceblue");
      setUpClicked(true);
      setDownClicked(false);
      upVoteHandler(index);
    }
  }

  const handleDownClick = (e) => {
    let index = Number(e.target.id);
    if (!upClicked && !downClicked) {
      setDownColor("antiquewhite");
      setDownClicked(true);
      setUpClicked(false);
      downVoteHandler(index);
    }
    else if (upClicked && !downClicked) {
      setDownColor("antiquewhite");
      setUpColor("aliceblue");
      setDownClicked(true);
      setUpClicked(false);
      downVoteHandler(index);
    }
  }

  const commentHandler = () =>{
    dispatch(setPostId(uniquePostId));
    setShowComments(!showComments);
  }

  return (
    <div className="post-container">
      <div className="post-bones">
        <section className="vote">
          <button
            className="up-vote"
            id={index}
            onClick={handleUpClick}
            style={{ backgroundColor: upColor }}
          ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" /> </svg>
          </button>
          <h3>{voteRatio}</h3>
          <button
            className="down-vote"
            id={index}
            onClick={handleDownClick}
            style={{ backgroundColor: downColor }}
          ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" /> </svg>
          </button>
        </section>
        <section className="post-content">
          <h2>{title}</h2>
          {description ? <p>{description}</p> : ''}
          {image ? <img src={image} alt="post" /> : ""}
        </section>
      </div>
      <section className="post-info">
        <h4 className="author">{author ? `@${author}` : "@abdullah_ayyash"}</h4>
        <div onClick={commentHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-icon">
            <path d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z" />
          </svg>
        </div>
        <h4 className="date">{publishDate}</h4>
      </section>

      {showComments && <Comments />}
    </div>
  )

}
