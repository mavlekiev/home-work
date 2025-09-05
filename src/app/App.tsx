import { MainLayouts } from '../shared/layouts/MainLayouts';
import ErrorBoundary from '../shared/ui/ErrorBoundary/ErrorBoundary';
import { PostList } from '../widgets/PostList/PostList';
import './App.css'

export function App() {
  return (
    <ErrorBoundary>
      <MainLayouts>
        <PostList />
      </MainLayouts>
    </ErrorBoundary>
  )
}
