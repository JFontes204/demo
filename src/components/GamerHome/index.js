import { useState } from 'react';
import './styles.css';

export default function GamerHome({ selectedItem }) {
    const [item, setItem] = useState(null);
    return (
        <div className="gamer-home">
            <h2>Você</h2>
            <img src="assets/imgs/user.jfif" alt="gamer-home" />
            <div className="comandos">
                <img src="assets/imgs/pedra.png" alt="pedra"
                    onClick={() => {
                        setItem(1);
                        selectedItem(1)
                    }}
                    className={ item === 1 ? 'selected': ''}
                />
                <img src="assets/imgs/papel.png" alt="papel"
                    onClick={() => {
                        setItem(2);
                        selectedItem(2)
                    }}
                    className={ item === 2 ? 'selected': ''}
                />
                <img src="assets/imgs/tesoura.png" alt="tesoura"
                    onClick={() => {
                        setItem(3);
                        selectedItem(3)
                    }}
                    className={ item === 3 ? 'selected': ''}
                />
            </div>
        </div>
    );
} 
