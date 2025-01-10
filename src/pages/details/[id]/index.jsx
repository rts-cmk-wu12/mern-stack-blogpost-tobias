import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"

function DetailsPage() {

    const { id } = useParams()
    const [details, setDetails] = useState(null)

    useEffect(() => {
        async function getDetails() {
            const response = await fetch(`/api/posts/${id}`)
            const data = await response.json()
            setDetails(data)
        }

        getDetails()
    }, [])

    return (
        <>
            <section className="blog">
                {!details ? (<p>Loading...</p>

                ) : (
                    <>
                        <Link to={`/details/${id}/edit`}>Edit Post</Link>
                        <h2 className="blog__title">{details.title}</h2>
                        <p className="blog__content">{details.content}</p>
                    </>
                )}
            </section>
        </>
    )
}

export default DetailsPage