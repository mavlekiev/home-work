import type { FC } from "react"

interface PostCardProps {
  title: string;
  body: string;
}

export const PostCard: FC<PostCardProps> = ({ title, body }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};