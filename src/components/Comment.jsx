const Comment = ({name, email, comment}) => {

    return (
        <section className="commentWrapper">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Comment: {comment}</p>
        </section>
    )
}

export default Comment;