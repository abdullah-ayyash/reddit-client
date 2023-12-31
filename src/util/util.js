
export const formateData = (data) => {
    const posts = data.data.children.slice(0, 20).map(child => {
        const { title, selftext, ups, downs, upvote_ratio, author,created, id } = child.data;
        let { url } = child.data;

        const check = url.match("i.redd.it");
        if (!check) {
            url = '';
        }
        let publishDate = formatTimestamp(created);

        return {
            title,
            description: selftext,
            image: url,
            upvotes: ups,
            downvotes: downs,
            voteRatio: upvote_ratio,
            author: author,
            publishDate: publishDate,
            id: id
        };
    });
    return posts;
}


const formatTimestamp = (timestamp) => {
    const currentTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
    const diffInSeconds = currentTimestamp - timestamp; // Difference in seconds
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  }

  export const formateComments = (json) =>{
    const comments = json[1].data.children.slice(0, 10).map((comment) => {
      // Access the comment data and format it accordingly
      const commentData = comment.data;
      const formattedComment = {
        id: commentData.id,
        text: commentData.body,
        author: commentData.author,
        createdAt: formatTimestamp(commentData.created_utc),
      };

      // Return the formatted comment
      return formattedComment;
    });
    return comments;
  }

