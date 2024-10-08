import './App.css';
import Aside from './components/Aside/Aside';
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
    </div>
  );
}

export default App;
