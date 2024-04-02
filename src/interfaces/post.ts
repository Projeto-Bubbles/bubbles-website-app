import { UserProps } from './user';

export interface PostProps {
  idPost?: number;
  moment: Date;
  contents: string;
  author: UserProps;
  bubble?: string;
  comments?: Comment[];
}

export interface CommentProps {
  id?: number;
  moment: Date;
  contents: string;
  author: UserProps;
}
