const PostContent = ({title, body}) => {
    return (
        <article className='postContentWrapper'>
            <section className='postContent'>
                <h2>{title}</h2>
                <p>{body}</p>
            </section>
        </article>
    )
}

export default PostContent;