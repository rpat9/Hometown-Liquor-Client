import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";

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
                <main className="pt-20 min-h-screen">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                        <h1 className="text-4xl font-bold text-gradient mb-8">Welcome to Hometown Liquor</h1>
                        <p className="text-[var(--color-text-secondary)] text-lg">
                            Your trusted source for premium spirits and wines.
                        </p>
                    </div>
                </main>
            </Router>
        </>
    )
}