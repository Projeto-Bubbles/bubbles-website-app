export interface PostProps {
  id: number;
  dateTime: Date;
  content: string;
  author: string;
  bubble: string;
  comments: Comment[];
}

export interface CommentProps {
  id: number;
  dateTime: Date;
  content: string;
  author: string;
}
