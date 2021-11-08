import React from 'react';
import './styles.css';
import { useSelector } from 'react-redux';

function Game() {
    let gameState;
    const jogadas = useSelector(state => {
        gameState = state.gameState;
        return state.data
    });

    return (
        <div className="game">
            <h2>Partidas</h2>
            <div className="partidas">
                <ol>
                {
                    jogadas.length ? 
                    jogadas.map((res, index) => {
                        return (
                            <li key={index} 
                                className={res.status === 1 ? 'green' : res.status === 0 ? 'red' : 'soft-black'}>
                                { res.msg }
                            </li>
                        );
                    })
                    : gameState ?
                    <p>Sem jogadas para mostarar!</p>
                    : 
                    <p>Jogo ainda não começou!</p>
                }
                </ol>
            </div>
        </div>
    );
} 

export default Game;