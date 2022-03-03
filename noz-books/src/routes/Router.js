import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";

const Router = () => {
    const rootElement = document.getElementById("root")
    render(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/home" element={<Home />} />

            </Routes>
        </BrowserRouter>,
        rootElement
    )
}

export default Router