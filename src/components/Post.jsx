import { Link } from 'react-router-dom';

const Post = ({title, id, post}) => {

    return (
            <li className='noListStyle postListItem'>
                <Link to={`/post/${id}`} state={post} className='noLinkStyle' >
                    <p></p>
                    <h2 className="postTitle">{title}</h2>
                </Link>
            </li> 
    )
}

export default Post;