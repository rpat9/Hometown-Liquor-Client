import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

export default function App() {
    const API_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const getHealthStatus = async () => {
            try {
                const response = await axios.get(`${API_URL}/health`);
                const health: string = response.data.status;
                console.log(health);
            } catch (error) {
                console.error("Health check failed:", error);
            }
        };

        getHealthStatus();
    }, []);

    return (
        <>
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/verify-email" element={<VerifyEmail />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
                
                <Footer />
            </Router>
        </>
    )
}