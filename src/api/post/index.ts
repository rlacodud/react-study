import axios from "axios";

type Post = {
  id: number;
  title: string;
  content: string;
  imgUrl: string;
  createdAt: string;
  userId: number;
}

type Comments = {
  id: number;
  commentId: number;
  content: string;
  createdAt: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get('/api/posts');
  return data.posts;
};

export const getPostDetail = async (id: string): Promise<Post> => {
  const { data } = await axios.get(`/api/posts/${id}`);
  return data.post;
};

export const getPostComments = async (id: string): Promise<Comments[]> => {
  const { data } = await axios.get(`/api/posts/${id}/comments`);
  return data.comments;
};

export const getFilteredPosts = async (userId: number | null): Promise<Post[]> => {
  const { data } = await axios.get(`/api/posts?userId=${userId}`);
  return data.posts;
};

export type {
  Post,
  Comments
}