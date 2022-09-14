import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams, useLocation} from 'react-router-dom';

import PostContent from '../components/PostContent';
import Comment from '../components/Comment';
import Header from '../components/Header';

const PostPage = () => {
    const [post, setPost] = useState();
    const [comments, setComments] = useState();

    const location = useLocation();
    console.log(location)

    let { id } = useParams()
    console.log(id)

    const getComments = () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
            .then(response => setComments(response.data))
    }

    useEffect(() => {
        const getPost = () => {
            if (location.state) {
                setPost(location.state)
            }
            else {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then(response => setPost(response.data))
            }
    
            getComments();
        }

        getPost();

    }, []);

    return (
        <>
            <header>
                <Header />
            </header>
            <main className='postPageWrapper'>
                <section className='buttonSection'>
                    <Link to={"/"}>
                        <button>To homepage</button>
                    </Link>
                </section>
                <section className='postContentWrapper'>
                    {post && comments &&
                        <>
                            <PostContent title={post.title} body={post.body}/>
                            <h2 className='commentsHeading'>Comments</h2>
                            {comments.map((comment, index) => 
                                <Comment key={index} name={comment.name} email={comment.email} comment={comment.body}/>
                            )}
                        </>
                    }
                </section>
            </main>
        </>
    )

}

export default PostPage;