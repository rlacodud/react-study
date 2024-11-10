import { Comments, Post, getPostComments, getPostDetail } from "@/api/post";
import { useParams } from "react-router-dom";
import { postContent, postDate, postTitle, postHeader } from "@/pages/post/detail/index.css";
import { formatDate } from "@/hook/date";
import { useQuery } from "@tanstack/react-query";
import PostComments from "@/components/PostComments";

function PostDetail() {
  const { id } = useParams();

  const { data: post, isLoading: isPostLoading, isError: isPostError, error: postError } = useQuery<Post, Error>({
    queryKey: ["postDetail", id],
    queryFn: () => getPostDetail(id),
  });

  const { data: comments, isLoading: isCommentsLoading, isError: isCommentsError, error: commentsError } = useQuery<Comments[], Error>({
    queryKey: ["postDetailComments", id],
    queryFn: () => getPostComments(id),
  });

  if (isPostLoading || isCommentsLoading) {
    return <h2>Loading...</h2>;
  }

  if (isPostError) {
    return <p>게시물 로딩 오류: {postError.message}</p>;
  }

  if (isCommentsError) {
    return <p>댓글 로딩 오류: {commentsError.message}</p>;
  }

  return (
    <>
      <div className={postHeader}>
        <h2 className={postTitle}>{post.title}</h2>
        <p className={postDate}>{formatDate(post.createdAt)}</p>
      </div>
      <img src={post.imgUrl} alt={post.title} />
      <p className={postContent}>{post.content}</p>
      <PostComments comments={comments} />
    </>
  );
}

export default PostDetail;
