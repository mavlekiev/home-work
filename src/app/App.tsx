import { MainLayouts } from '../shared/layouts/MainLayouts';
import { PostList } from '../widgets/PostList/PostList';
import './App.css'

export function App() {
  return (
    <MainLayouts>
      <PostList />
    </MainLayouts>
  )
}
