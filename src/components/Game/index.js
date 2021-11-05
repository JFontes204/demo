import React from 'react';
import './styles.css';

function Game({ resultado }) {
    const resultados = [];
    console.log(resultado)
    if(resultado !== undefined || resultado?.length > 1) {
        resultados.push(resultado);
        console.log(resultado, resultados)
    }
    return (
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
        </div>
    );
} 

export default React.memo(Game)