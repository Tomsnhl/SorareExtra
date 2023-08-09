import styled from "styled-components";

const V3 = () => {
    return (
        <>
            <Container>
                <div className="container">
                    <div className="wrapper">
                        <div className="banner-image"> </div>
                        <h1>LEO MESSI</h1>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="button-wrapper">
                        <button className="btn outline">DETAILS</button>
                        <button className="btn fill">CHOISIR</button>
                    </div>
                </div>
            </Container>
        </>
    );
};

const Container = styled.div`
    background: rgb(0, 212, 255);
    background: linear-gradient(
        45deg,
        rgba(0, 212, 255, 1) 0%,
        rgba(11, 3, 45, 1) 100%
    );

    background-image: url(https://images.unsplash.com/photo-1619204715997-1367fe5812f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80);
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;

    .container {
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(17, 25, 40, 0.25);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125);
        padding: 38px;
        filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 25%;
        animation: 10s ease-in-out infinite bannerInfinite;
        background-size: contain;
    }
    .wrapper {
        width: 100%;
        height: 100%;
    }

    .banner-image {
        background-image: url(https://assets.sorare.com/card/5dea9adc-3c36-427b-a1b9-40faa2e2aa65/picture/tinified-26bc7da5775a41e09111c875d6849102.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        height: 400px;
        width: 100%;
        border-radius: 12px;
        margin-bottom: 20px;
    }

    h1 {
        font-family: "Righteous", sans-serif;
        color: rgba(255, 255, 255, 0.98);
        text-transform: uppercase;
        font-size: 2.4rem;
    }

    p {
        color: #fff;
        font-family: "Lato", sans-serif;
        text-align: center;
        font-size: 0.8rem;
        line-height: 150%;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .button-wrapper {
        margin-top: 18px;
    }

    .btn {
        border: none;
        padding: 12px 24px;
        border-radius: 24px;
        font-size: 12px;
        font-size: 0.8rem;
        letter-spacing: 2px;
        cursor: pointer;
    }

    .btn + .btn {
        margin-left: 10px;
    }

    .outline {
        background: transparent;
        color: rgba(0, 212, 255, 0.9);
        border: 1px solid rgba(0, 212, 255, 0.6);
        transition: all 0.3s ease;
    }

    .outline:hover {
        transform: scale(1.125);
        color: rgba(255, 255, 255, 0.9);
        border-color: rgba(255, 255, 255, 0.9);
        transition: all 0.3s ease;
    }

    .fill {
        background: rgba(0, 212, 255, 0.9);
        color: rgba(255, 255, 255, 0.95);
        filter: drop-shadow(0);
        font-weight: bold;
        transition: all 0.3s ease;
    }

    .fill:hover {
        transform: scale(1.125);
        border-color: rgba(255, 255, 255, 0.9);
        filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
        transition: all 0.3s ease;
    }
`;

export default V3;
