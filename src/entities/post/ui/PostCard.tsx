import type { FC } from "react"
import './PostCard.css'

interface PostCardProps {
  title: string;
  body: string;
}

export const PostCard: FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};