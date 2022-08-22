import { Title } from './UI/Title/Title';
import { LanguageCard } from './components/LanguageCard/LanguageCard';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Title>Event delegation</Title>
        <LanguageCard />
      </div>
    </div>
  );
}

export default App;
