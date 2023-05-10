import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Posts, PostsDet } from "../../pages";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar"

import { useNavigate } from "react-router-dom";


const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Protected><Posts /></Protected>} />
                <Route path="/posts/:id" element={<Protected><PostsDet /></Protected>} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </Router>
    )
}

const Protected = ({ children }) => {
    const [token] = useState(localStorage.getItem("token"))
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) return navigate("/");
    }, []);

    return children;
};

export default App;