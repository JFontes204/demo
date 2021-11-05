import './styles.css';

export default function GamerGust({ selectedItem }) {
    return (
        <div className="gamer-gust">
            <h2>PC</h2>
            <img src="assets/imgs/pc.png" alt="gamer-gust" />
            <div className="comandos img-gust">
                <img src="assets/imgs/pedra.png" alt="pedra"
                    className={ selectedItem === 1 ? 'selected': ''}
                />
                <img src="assets/imgs/papel.png" alt="papel"
                    className={ selectedItem === 2 ? 'selected': ''}
                />
                <img src="assets/imgs/tesoura.png" alt="tesoura"
                    className={ selectedItem === 3 ? 'selected': ''}
                />
            </div>
        </div>
    );
} 
