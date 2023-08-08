import { useState } from "react";
import ballon from "./assets/ballon.png";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="#" target="_blank">
                    <img src={ballon} className="logo" />
                </a>
            </div>
            <h1>Sorare Card Battle Royale</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Sorare Card Battle Royale : Dans ce mode de jeu, les
                    utilisateurs s'affrontent dans des matchs de style "Battle
                    Royale" où le dernier joueur restant gagne. Chaque
                    utilisateur a un "deck" de cartes Sorare et utilise les
                    attributs de ces cartes pour "combattre" les autres
                    utilisateurs.
                </p>
            </div>
        </>
    );
}

export default App;
