import { useState } from 'react';
import './App.css';
import Game from './components/Game';
import GamerGust from './components/GamerGust';
import GamerHome from './components/GamerHome';
import { useDispatch } from 'react-redux';

export default function App() {
  const [itemGust, setItemGust] = useState();
  
  const dispatch = useDispatch();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Jogo Pedra Papel Tesoura</h1>
        <div className="start-stop">
          <button className="btn-start" onClick={startMatch}>Começar</button>
          <button className="btn-stop" onClick={endMatch}>Terminar</button>
        </div>
      </header>
      <div className="corpo-do-jogo">
        <GamerHome selectedItem={selectedItem} />
        <Game />
        <GamerGust selectedItem={itemGust}/>
      </div>
    </div>
  );

  function selectedItem(itemHome) {
    const gust = jogadaDoGust();
    setItemGust(gust);
    dispatch({ type: 'ADD_MATCH', pontuacao: jogada(itemHome, gust), gameState: true });
  }
  function endMatch() {
    dispatch({ type: 'END_MATCH', pontuacao: {}, gameState: false });
  }
  function startMatch() {
    dispatch({ type: 'START_MATCH', pontuacao: {}, gameState: true });
  }
}


function jogada(userHome, userGust){
  if(userHome === userGust) {
    return { msg: 'Empate!', status: -1};
  }
  if(userHome === 1 && userGust === 2) {
    return { msg: 'Você perdeu!', status: 0};
  }
  if(userHome === 1 && userGust === 3) {
    return { msg: 'Você ganhou!', status: 1};
  }
  if(userHome === 2 && userGust === 1) {
    return { msg: 'Você ganhou!', status: 1};
  }
  if(userHome === 2 && userGust === 3) {
    return { msg: 'Você perdeu!', status: 0};
  }
  if(userHome === 3 && userGust === 1) {
    return { msg: 'Você perdeu!', status: 0};
  }
  if(userHome === 3 && userGust === 2) {
    return { msg: 'Você ganhou!', status: 1};
  }
  return { msg: 'Empate!', status: -1};
}


function jogadaDoGust() {
  return Math.floor(Math.random() * 3) + 1;
}

