import { Title } from './UI/Title/Title';
import { LanguageCard } from './components/LanguageCard/LanguageCard';
import './App.css';
import { LanguageFilter } from './components/LanguageFilter/LanguageFilter';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Title>Event delegation</Title>
        {/* <LanguageCard /> */}
        <LanguageFilter />
      </div>
    </div>
  );
}

export default App;
