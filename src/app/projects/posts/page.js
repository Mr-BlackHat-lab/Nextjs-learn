
'use client';
import { useEffect, useState } from 'react';
import '@/styles/posts.css';
import { setConfig } from 'next/config';

export default function PostsPage() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);

  return (
    <div className="posts-page">
      <h1 className="posts-title">Posts</h1>
      {posts ?
      <ul className="posts-list">
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      :Array(5).fill(0).map((_,i) =>(
        <div key={i} className='skeleton'>
          <div className='skeleton-item'>
            <div className='skeleton-titel'></div>
            <div className='skeleton-body'></div>
          </div>
        </div>
      ))}
    </div>
  );
}
