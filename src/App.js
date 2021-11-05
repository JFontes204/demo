import { useState } from 'react';
import './App.css';
import Game from './components/Game';
import GamerGust from './components/GamerGust';
import GamerHome from './components/GamerHome';

export default function App() {
  const [itemGust, setItemGust] = useState(0);

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
        <GamerHome selectedItem={selectedItem} />
        <Game />
        <GamerGust selectedItem={itemGust}/>
      </div>
    </div>
  );

  function selectedItem(item) {
    setItemGust(jogadaDoGust())
  }
}


function jogada(userHome){

}


function jogadaDoGust() {
  return Math.floor(Math.random() * 3) + 1;
}