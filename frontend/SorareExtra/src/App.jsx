import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Thomas from "./Pages/Thomas/Thomas";
import V1 from "./Pages/Dashboard/V1/V1";
import V2 from "./Pages/Dashboard/V2/V2";
import V3 from "./Pages/Dashboard/V3/V3";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vestiaire" element={<Dashboard />}>
                        <Route path="/vestiaire/V1" element={<V1 />} />
                        <Route path="/vestiaire/V2" element={<V2 />} />
                        <Route path="/vestiaire/V3" element={<V3 />} />
                    </Route>
                    <Route path="/thomas" element={<Thomas />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
