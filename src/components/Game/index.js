import './styles.css';

export default function Game() {

    return (
        <div className="game">
            <h2>Partidas</h2>
            <div className="partidas">
                <ol>
                    <li className={true ? 'green' : 'red'}>Você { 'ganhou' }</li>
                    <li className={false ? 'green' : 'red'}>Você { 'perdeu' }</li>
                    <li className={true ? 'green' : 'red'}>Você { 'ganhou' }</li>
                    <li className={true ? 'green' : 'red'}>Você { 'ganhou' }</li>
                    <li className={false ? 'green' : 'red'}>Você { 'perdeu' }</li>
                </ol>
            </div>
        </div>
    );
} 
