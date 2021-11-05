import './App.css';
import Game from './components/Game';
import GamerGust from './components/GamerGust';
import GamerHome from './components/GamerHome';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Jogo Pedra Papel Tesoura</h1>
        <div className="start-stop">
          <button className="btn-start">Começar</button>
          <button className="btn-stop">Terminar</button>
        </div>
      </header>
      <div className="corpo-do-jogo">
        <GamerHome />
        <Game />
        <GamerGust />
      </div>
    </div>
  );
}

export default App;
