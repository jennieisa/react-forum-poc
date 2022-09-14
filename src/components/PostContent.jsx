const PostContent = ({title, body}) => {
    return (
        <article>
            <section className='postContent'>
                <h2>{title}</h2>
                <p>{body}</p>
                <img className='postImage' src='https://i0.wp.com/stickoutmedia.se/wp-content/uploads/2021/01/placeholder-4.png?ssl=1' alt="placeholder image" />
            </section>
        </article>
    )
}

export default PostContent;