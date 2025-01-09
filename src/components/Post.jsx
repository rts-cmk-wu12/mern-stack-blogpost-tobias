function Post() {
    return (
        <article className="blog__post">

            <h3 className="blog__post-title">Exploring the Wonders of Roskilde</h3>
            <p className="blog__post-meta">
                by <span className="blog__post-author">Jane Doe</span>
                <time className="blog__post-date" dateTime="2025-01-08">08-01-2025</time>
            </p>
            <p className="blog__post-content">Roskilde is a city rich in history and culture...</p>
        </article>
    );
}

export default Post;