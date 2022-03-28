import './App.css';
import { Display } from './components/Display';
import { Input } from './components/Input';
import { GlobalStyle } from './styles';

const App = () => {
  return (
    <div className="App">
      <Input />
      <Display />
      <GlobalStyle />
    </div>

  );
}

export default App;
