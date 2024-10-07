import './App.css';
import { Header } from './components/Header/Header';
import SubReddits from './features/SubReddits/SubReddits';

function App() {
  return (
    <main>
      <SubReddits />
      <Header />
    </main>
  );
}

export default App;
