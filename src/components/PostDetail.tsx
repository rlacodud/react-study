import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post, getPosts } from '../api/post';

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await getPosts();
      const selectedPost = posts.find(p => p.id === Number(postId));
      setPost(selectedPost || null);
    };
    fetchPost();
  }, [postId]);

  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <img src={post.imgUrl} alt={post.title} />
    </div>
  );
};

export default PostDetail;
