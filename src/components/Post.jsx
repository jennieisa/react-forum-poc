import { Link } from 'react-router-dom';

const Post = ({title, id, post}) => {

    return (
            <li className='noListStyle postListItem'>
                <Link to={`/post/${id}`} state={post} className='noLinkStyle' >
                    <section className='topOfPost'>
                        <p>2022-01-03</p>
                        <img className='homePageImg' src='https://i0.wp.com/stickoutmedia.se/wp-content/uploads/2021/01/placeholder-4.png?ssl=1' alt="placeholder image" />
                    </section>
                    <h2 className="postTitle">{title}</h2>
                </Link>
            </li> 
    )
}

export default Post;