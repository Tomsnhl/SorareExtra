import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ballon from "./assets/ballon.png";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={ballon} className="logo" alt="Vite logo" />
                </a>
            </div>
            <h1>Sorare Card Battle Royale</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Sorare Card Battle Royale : Dans ce mode de jeu, les utilisateurs s'affrontent dans des matchs de style "Battle Royale" où le dernier joueur restant gagne. Chaque utilisateur a un "deck" de cartes Sorare et utilise les attributs de ces cartes pour "combattre" les autres utilisateurs.
                </p>
            </div>
        </>
    );
}

export default App;
