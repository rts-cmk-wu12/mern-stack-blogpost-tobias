import Post from "../components/Post";

function Index() {
    return (
        <>
            <section className="blog">
                <h2 className="blog__title">Latest Blogs</h2>
                <Post />
            </section>
        </>
    );
}

export default Index;