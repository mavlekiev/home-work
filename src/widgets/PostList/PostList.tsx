import type { FC } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import './PostList.css'

const posts = [
  { id: 1, title: 'Первый пост', body: 'Это содержимое первого поста.' },
  { id: 2, title: 'Второй пост', body: 'Это содержимое второго поста.' },
  { id: 3, title: 'Третий пост', body: 'Это содержимое третьего поста.' },
];

export const PostList: FC = () => {
  return (
    <div>
      <h2>Список постов</h2>
      {posts.map(post => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}