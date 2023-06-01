
export const formateData = (data) => {
    const posts = data.data.children.slice(0, 20).map(child => {
        const { title, selftext, ups, downs, upvote_ratio, author } = child.data;
        let { url } = child.data;

        const check = url.match("i.redd.it");
        if (!check) {
            url = '';
        }

        return {
            title,
            description: selftext,
            image: url,
            upvotes: ups,
            downvotes: downs,
            voteRatio: upvote_ratio,
            author: author
        };
    });
    return posts;
}