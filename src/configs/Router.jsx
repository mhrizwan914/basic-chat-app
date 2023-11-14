// React Router DOM
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;