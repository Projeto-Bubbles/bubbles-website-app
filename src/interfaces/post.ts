import { User } from './user';

export interface PostProps {
  id?: number;
  dateTime: Date;
  content: string;
  author: User;
  bubble?: string;
  comments?: Comment[];
}

export interface CommentProps {
  id?: number;
  dateTime: Date;
  content: string;
  author: string;
}
