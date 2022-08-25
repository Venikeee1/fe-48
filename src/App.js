import { Title } from './UI/Title/Title';
import './App.css';
import { News } from './components/News/News';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Title>News portal</Title>
        <News />
      </div>
    </div>
  );
}

export default App;
