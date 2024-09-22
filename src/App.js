import './App.css';
import Logo from './componentes/Logo';
import OpcoesHeader from './componentes/Opcoes-Header';
import IconesHeader from './componentes/Icones-Header';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
      </header>
    </div>
  );
}

export default App;
