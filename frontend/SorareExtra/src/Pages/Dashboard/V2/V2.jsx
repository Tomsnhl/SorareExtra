import "./v2.scss";

const V2 = () => {
    return (
        <>
            <div className="wrapper v2">
                <div className="card">
                    <div className="front">
                        <h2>Attaquant</h2>
                        <ul>
                            <li>Quelle carte tu vas recevoir ?</li>
                            <li>Quelle carte tu vas recevoir ?</li>
                            <li>Quelle carte tu vas recevoir ?</li>
                            <li>Quelle carte tu vas recevoir ?</li>
                            <li>Quelle carte tu vas recevoir ?</li>
                        </ul>
                    </div>
                    <div
                        className="right"
                        style={{
                            backgroundImage:
                                "url(https://assets.sorare.com/card/cf216293-5e68-4d54-bd69-787f268ab253/picture/tinified-0731e6513707d1fb8d009e6ed6acb47d.png)",
                            backgroundSize: "cover",
                        }}
                    >
                        {/* <button>Add to cart, yo</button> */}
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <h2>Mbappouille</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Neque ipsum veritatis id quia
                                cupiditate sed architecto aliquam nostrum unde
                                nam minima voluptas dicta, beatae sint
                                reprehenderit sit ducimus officiis ratione?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default V2;
