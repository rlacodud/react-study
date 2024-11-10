import { Post, getPosts } from "@/api/post";
import { Link } from "react-router-dom";
import { postContent, postDate, postContainer, postImg, postItem, postList, postTitle } from "@/pages/post/postList/index.css";
import { formatDate } from "@/hook/date";
import { useQuery } from "@tanstack/react-query";

function PostList() {
  const { data: posts, isLoading, isError, error } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <p>오류가 발생했습니다: {error.message}</p>;
  }

  return (
    <ul className={postList}>
      {posts?.map(post => (
        <li key={post.id} className={postItem}>
          <Link to={`/post/${post.id}`} className={postContainer}>
            <img width={150} height={150} className={postImg} src={post.imgUrl} alt={post.title} />
            <div>
              <h2 className={postTitle}>{post.title}</h2>
              <p className={postDate}>{formatDate(post.createdAt)}</p>
              <p className={postContent}>{post.content}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;