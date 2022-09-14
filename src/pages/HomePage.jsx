import Post from '../components/Post';
import Header from '../components/Header';

import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setPosts(response.data))
    }, []);

    return (
        <main className='pageWrapper'>
            <Header />
            <ul className='postsWrapper'>
                {posts && posts.map((post, index) => 
                    <Post key={index} title={post.title} id={post.id} post={post}/>
                )}
            </ul>
        </main>
    )
}

export default HomePage;