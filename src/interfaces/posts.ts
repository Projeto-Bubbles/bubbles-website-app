interface Post {
  id: number;
  dateTime: Date;
  content: string;
  author: string;
  bubble: string;
  comments: Comment[];
}

interface Comment {
  id: number;
  dateTime: Date;
  content: string;
  author: string;
}

export default Post;
