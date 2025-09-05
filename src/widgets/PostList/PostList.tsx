import type { FC } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import { posts } from "../../shared/mocks/posts";

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