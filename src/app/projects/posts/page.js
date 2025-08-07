
'use client';
import { useEffect, useState } from 'react';
import '@/styles/posts.css';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="posts-page">
      <h1 className="posts-title">Posts</h1>
      <ul className="posts-list">
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
