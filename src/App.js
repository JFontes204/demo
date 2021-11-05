import { useState } from 'react';
import './App.css';
import Game from './components/Game';
import GamerGust from './components/GamerGust';
import GamerHome from './components/GamerHome';

export default function App() {
  const [itemGust, setItemGust] = useState(0);
  const [resultado, setResultado] = useState({});
  const resultados = [];
  

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
        <Game resultado={resultado} />
        
      {/*   {
          setInterval(() => resultado.length > 1 ? resultados.push(resultado) : null, 1000)
        }
        
        <div className="game">
            <h2>Partidas</h2>
            <div className="partidas">
                <ol>
                {                        
                    resultados.length > 0 ? 
                    resultados.map((res, index) => {
                        return (
                            <li key={index} className={res.status === 1 ? 'green' : 'red'}>{ res.msg }</li>
                        );
                    })
                    :
                    <p>Carregando...</p>
                }
                </ol>
            </div>
        </div> */}
    
        <GamerGust selectedItem={itemGust}/>
      </div>
    </div>
  );

  function selectedItem(itemHome) {
    setItemGust(jogadaDoGust())
    setResultado(jogada(itemHome, itemGust));
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
}


function jogadaDoGust() {
  return Math.floor(Math.random() * 3) + 1;
}