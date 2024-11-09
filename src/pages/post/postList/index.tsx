import { Post, getPosts } from "@/api/post";
import { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postContent, postDate, postContainer, postImg, postItem, postList, postTitle } from "@/pages/post/postList/index.css";

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
      {error && <p>{error}</p>}
      <ul className={postList}>
        {posts.map(post => (
          <li key={post.id} className={postItem}>
            <Link to={`/post/${post.id}`} className={postContainer}>
              <img className={postImg} src={post.imgUrl}/>
              <div>
                <h2 className={postTitle}>{post.title}</h2>
                <p className={postDate}>{post.createdAt}</p>
                <p className={postContent}>{post.content}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      </Suspense>
    </>
  )
}

export default PostList;