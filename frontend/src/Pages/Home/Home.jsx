const Home = () => {
    return (
        <>
            <h1>Sorare Card Battle Royale</h1>
            <div className="card">
                <hr />
                <h2>Arborescence</h2>
                <ol
                    className="demo"
                    style={{ textAlign: "left", fontSize: 25 }}
                >
                    <li>
                        <strong>Home page public</strong>
                        <br></br>
                        <em>Objectifs :</em>
                        <ol>
                            <li>Présenter le jeu</li>
                            <li>Se connecter à Sorare pour jouer</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Vestaire : Dashbord des compétitions</strong>
                        <br></br>
                        <em>Objectifs :</em>
                        <ol>
                            <li>
                                S'inscrire et consulter les compétitions en
                                cours et passées
                            </li>
                            <li>Configurer les options de l'utlisateurs</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Draft : L'entrée sur le terrain</strong>
                        <br></br>
                        <em>Objectifs :</em>
                        <ol>
                            <li>Drafter son équipe de X joueurs</li>
                            <li>Drafter les objets et points de compétences</li>
                            <li>Expliquer les régles</li>
                            <li>Appliquer les bonus et compétences</li>
                        </ol>
                    </li>
                </ol>

                <hr />
                <h2>Règles du jeu</h2>
                <p>
                    Sorare Card Battle Royale : Dans ce mode de jeu, les
                    utilisateurs s'affrontent dans des matchs de style "Battle
                    Royale" où le dernier joueur restant gagne. Chaque
                    utilisateur a un "deck" de cartes Sorare et utilise les
                    attributs de ces cartes pour "combattre" les autres
                    utilisateurs.
                </p>
                <p>
                    Une compétition avec des cartes de 5 joueurs en draft comme
                    dans Fifa , l'user appuie sur le + pour ajouter un joueur
                    une pop-up s'affiche avec une animation 3D de 4 joueur a
                    choisir pour inclure son joueur de son choix, une fois
                    l'equipe en place l'user soumet l'equipe pour la gameweek
                    pour la quelle il a opté , le classement ce fait sur les
                    stats des joueurs en live fourni par l'api de sorare !
                </p>
                <p>
                    Une home page avec un bouton connexion qui renvoie sur le
                    dashboard pour s'inscrire a la competition une fois connecté
                    , une navbar avec la competiton le classement en live et la
                    boutique , il faut aussi une navigation sur les gameweek
                    suivante et précédente !
                </p>
            </div>
        </>
    );
};
export default Home;
