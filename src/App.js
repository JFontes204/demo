import './App.css';

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
        <div className="gamer-home">Você</div>
        <div className="game">Ganhou</div>
        <div className="gamer-gust">PC</div>
      </div>
    </div>
  );
}

export default App;
