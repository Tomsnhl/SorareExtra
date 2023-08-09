import "./v2.scss";

const V2 = () => {
    return (
        <>
            <div className="wrapper v2">
                <div className="card">
                    <div
                        className="front"
                        style={{
                            backgroundImage:
                                "url(https://assets.sorare.com/card/cf216293-5e68-4d54-bd69-787f268ab253/picture/tinified-0731e6513707d1fb8d009e6ed6acb47d.png)",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <div className="right">
                        <h2>Signature</h2>
                        <ul>
                            <li>Width 7.7</li>
                            <li>Length 31.75</li>
                            <li>Wheelbase 14</li>
                            <li>Nose 6.875</li>
                            <li>Tail 6.25</li>
                        </ul>
                        <button>Add to cart, yo</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default V2;
