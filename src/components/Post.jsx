import { Link } from "react-router";


function Post({ posts }) {


    async function handleDelete(id) {
        const response = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
        if (response.ok) {
            console.log(`Post with id ${id} deleted`);
        } else {
            console.error(`Failed to delete post with id ${id}`);
        }
    }

    return (
        <>
            {posts.map(({ _id, title, content }) => (
                <article key={_id} className="blog__post">
                    <h3 className="blog__post-title">{title}</h3>
                    {/* <p className="blog__post-meta">
                    by <span className="blog__post-author">{post.author}</span>
                    </p> */}
                    {content.length > 120
                        ? <p className="blog__post-content">{content.substring(0, 120)}...</p>
                        : <p className="blog__post-content">{content}</p>
                    }

                    <Link to={`/details/${_id}`}>Read More</Link>
                    <button onClick={() => handleDelete(_id)}>delete</button>
                </article>
            ))}
        </>
    );
}

export default Post;