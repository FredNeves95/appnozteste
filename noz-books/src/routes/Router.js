import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="home" element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router