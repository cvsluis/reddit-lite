import './App.css';
import Aside from './components/Aside/Aside';
import Comments from './features/Comments/Comments';
import { Header } from './components/Header/Header';
import Posts from './features/Posts/Posts';

function App() {
  return (
    <div className='body'>
      <Aside />
      <main>
        <div className='background'></div>
        <Header />
        <Posts />
      </main>
      <Comments />
    </div>
  );
}

export default App;
