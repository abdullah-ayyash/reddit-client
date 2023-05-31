import { useState } from "react"

export default function PostContainer({ index,upVoteHandler,upvotes,downvotes,voteRatio,title,description,image }) {

  const [upClicked, setUpClicked] = useState(false)
  const [downClicked, setDownClicked] = useState(false)
  const [upColor, setUpColor] = useState("aliceblue")
  const [downColor, setDownColor] = useState("aliceblue")
  const handleUpClick = (e) =>{
    let index = Number(e.target.id);
    if(!upClicked && !downClicked){
      setUpColor("aquamarine");
      setUpClicked(true);
      setDownClicked(false);
      upVoteHandler(index);
    }
    else if(!upClicked && downClicked){
      setUpColor("aquamarine");
      setDownColor("aliceblue");
      setUpClicked(true);
      setDownClicked(false);
      upVoteHandler(index);
    }
  }

  const handleDownClick = (e) =>{
    let index = Number(e.target.id);
    if(!upClicked && !downClicked){
      setDownColor("antiquewhite");
      setDownClicked(true);
      setUpClicked(false);
    }
    else if(upClicked && !downClicked){
      setDownColor("antiquewhite");
      setUpColor("aliceblue");
      setDownClicked(true);
      setUpClicked(false);
    }
  }

  return (
    <div className="post-container">
      <section className="vote">
        <button
          className="up-vote"
          id={index}
          onClick={handleUpClick}
          style={{backgroundColor: upColor}}
        ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/> </svg>
        </button>
        <h3>{voteRatio}</h3>
        <button
          className="down-vote"
          id={index}
          onClick={handleDownClick}
          style={{backgroundColor: downColor}}
        ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/> </svg>
        </button>
      </section>
      <section className="post-info">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : ''}
        {image ? <img src={image} alt="post" /> : ""}
      </section>
    </div>
  )

}
