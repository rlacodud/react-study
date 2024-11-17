import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postContent, postDate, postContainer, postImg, postItem, postList, postTitle } from "@/pages/post/postList/index.css";
import { formatDate } from "@/hook/date";
import { useQuery } from "@tanstack/react-query";
import SelectBox from "@/components/form/SelectBox";
import { getFilteredPosts, getPosts } from "@/api/post";

function extractUsersFromPosts(posts: { userId: number }[]) {
  const uniqueUserIds = Array.from(new Set(posts.map((post) => post.userId)));
  return uniqueUserIds.map((id) => ({ id, name: `User ${id}` }));
}

function PostList() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  const { data: allPosts, isLoading, isError, error } = useQuery({
    queryKey: ["allPosts"],
    queryFn: getPosts,
  });

  const { data: filteredPosts } = useQuery({
    queryKey: ["posts", selectedUserId],
    queryFn: () => getFilteredPosts(selectedUserId),
    enabled: selectedUserId !== null,
  });

  useEffect(() => {
    if (allPosts) {
      const extractedUsers = extractUsersFromPosts(allPosts);
      setUsers(extractedUsers);
    }
  }, [allPosts]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <p>오류가 발생했습니다: {error.message}</p>;
  }

  const postsToDisplay = selectedUserId ? filteredPosts : allPosts;

  return (
    <div>
      {users.length > 0 && (
        <SelectBox
          users={users}
          value={selectedUserId}
          onChange={(userId) => setSelectedUserId(userId)}
        />
      )}
      <ul className={postList}>
        {(postsToDisplay || []).map((post) => (
          <li key={post.id} className={postItem}>
            <Link to={`/post/${post.id}`} className={postContainer}>
              <img
                width={150}
                height={150}
                className={postImg}
                src={post.imgUrl}
                alt={post.title}
              />
              <div>
                <h2 className={postTitle}>{post.title}</h2>
                <p className={postDate}>{formatDate(post.createdAt)}</p>
                <p className={postContent}>{post.content}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;