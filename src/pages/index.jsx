import Post from "../components/Post";
import { useEffect, useState } from "react"

function IndexPage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("/api/posts/latest")
            const data = await response.json()
            setPosts(data)
        }

        fetchPosts()
    }, [])

    return (
        <>
            <section className="blog">
                <h2 className="blog__title">Latest Blogs</h2>
                <Post posts={posts} />
            </section>
        </>
    );
}

export default IndexPage;