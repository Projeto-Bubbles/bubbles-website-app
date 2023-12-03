import { UserProps } from './user';

export interface PostProps {
  id?: number;
  dateTime: Date;
  content: string;
  author: UserProps;
  bubble?: string;
  comments?: Comment[];
}

export interface CommentProps {
  id?: number;
  dateTime: Date;
  content: string;
  author: string;
}
