import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Thomas from "./Pages/Thomas/Thomas";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vestiaire" element={<Dashboard />} />
                    <Route path="/thomas" element={<Thomas />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
