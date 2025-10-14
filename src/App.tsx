import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";

export default function App() {
    const API_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const getHealthStatus = async () => {
            const response = await axios.get(`${API_URL}/health`)
            const health: string = response.data.status;
            console.log(health)
        }

        getHealthStatus();
    }, [])

    return (
        <>
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                
                <Footer />
            </Router>
        </>
    )
}