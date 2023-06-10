

export default function Comment({ author, text, createdAt }) {
    return (
        <>
            <div className="comment-box">
                <section className="comment-left">
                    <h4 className="comment-author">{author}</h4>
                    <h4 className="comment-text">{text}</h4>
                </section>
                <h4 className="comment-date">{createdAt}</h4>
            </div>
            <hr></hr>
        </>
    )
}
