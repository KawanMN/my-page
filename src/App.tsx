import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './Rotas';
import Barra from './components/Menu';


function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
