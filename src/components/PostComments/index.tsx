import { Comments } from "@/api/post";
import { formatDate } from "@/hook/date";
import { commentContent, commentDate, commentItem, commentSection } from "./index.css";

interface CommentsListProps {
  comments: Comments[] | undefined;
}

function PostComments({ comments }: CommentsListProps) {
  if (!comments || comments.length === 0) {
    return <p>댓글이 없습니다.</p>;
  }

  return (
    <section className={commentSection}>
      <h2>댓글 목록</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.commentId} className={commentItem}>
            <p className={commentDate}>{formatDate(comment.createdAt)}</p>
            <p className={commentContent}>{comment.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PostComments;
