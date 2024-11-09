import axios from "axios";

type Post = {
  id: number;
  title: string;
  content: string;
  imgUrl: string;
  createdAt: string;
  userId: number;
}

const getPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get('/api/posts');
  return data.posts;
};


export {
  getPosts
}

export type {
  Post
}