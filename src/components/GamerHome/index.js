import './styles.css';

export default function GamerHome() {

    return (
        <div className="gamer-home">
            <h2>Você</h2>
            <img src="assets/imgs/user.jfif" alt="gamer-home" />
            <div className="comandos">
                <img src="assets/imgs/pedra.png" alt="pedra" />
                <img src="assets/imgs/papel.png" alt="papel" />
                <img src="assets/imgs/tesoura.png" alt="tesoura" />
            </div>
        </div>
    );
} 
