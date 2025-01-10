import { useParams } from "react-router";

function EditPost() {

    const { id } = useParams()
    function SaveHandler(event) {
        event.preventDefault()

        const form = event.target;

        const formData = new FormData(form)
        const formDataObject = Object.fromEntries(formData.entries())

        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObject)
        }


        fetch(`/api/posts/${id}`, fetchOptions);
        console.log(formDataObject)

    }

    return (
        <form onSubmit={SaveHandler}>
            <input type="text" name="title" placeholder="Title..." />
            <textarea name="content" placeholder="Content...">

            </textarea>
            <input type="submit" value="Save" />
        </form>
    );
}

export default EditPost;