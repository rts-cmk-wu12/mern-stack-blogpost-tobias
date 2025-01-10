function NewPage() {

    function submitHandler(event) {
        event.preventDefault()

        const form = event.target;

        const formData = new FormData(form)
        const formDataObject = Object.fromEntries(formData.entries())

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObject)
        }


        fetch('/api/posts', fetchOptions)
        console.log(formDataObject)

    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="title" placeholder="Title..." />
            <textarea name="content" placeholder="Content...">

            </textarea>
            <input type="submit" value="Send" />
        </form>
    );
}

export default NewPage;