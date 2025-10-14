import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import CallButton from "../Buttons/CallButton";
import NavLink from "./NavLink";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeHref, setActiveHref] = useState<string>('/');
    const [hoveredHref, setHoveredHref] = useState<string | null>(null);
    const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
    const navContainerRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Set active href based on current path
    useEffect(() => {
        setActiveHref(location.pathname);
    }, [location.pathname]);

    // Calculate highlight position
    useEffect(() => {
        const targetHref = hoveredHref || activeHref;
        const navContainer = navContainerRef.current;
        
        if (!navContainer) return;

        const targetLink = navContainer.querySelector(`[data-href="${targetHref}"]`) as HTMLElement;
        
        if (targetLink) {
            const containerRect = navContainer.getBoundingClientRect();
            const linkRect = targetLink.getBoundingClientRect();
            
            setHighlightStyle({
                left: linkRect.left - containerRect.left,
                width: linkRect.width,
            });
        }
    }, [hoveredHref, activeHref]);

    const handleLinkHover = (href: string) => {
        setHoveredHref(href);
    };

    const handleLinkHoverEnd = () => {
        setHoveredHref(null);
    };

    return (
        <>
            <nav 
                className="w-full px-6 lg:px-8 flex items-center justify-between bg-primary border-b border-[var(--color-border)]"
                style={{ height: '72px' }}
            >
                <motion.a 
                    href="/" 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                        <img src="/apple-touch-icon.png" alt="Hometown-Liquor Logo" />
                    </div>
                    <h1 className="text-primary text-xl sm:text-2xl font-bold hover:scale-104 transition-transform duration-200">
                        Hometown Liquor
                    </h1>
                </motion.a>

                <div 
                    ref={navContainerRef}
                    className="hidden lg:flex items-center gap-1 bg-secondary rounded-full px-2 py-2 relative"
                    onMouseLeave={handleLinkHoverEnd}
                >
                    <motion.div
                        className="absolute rounded-lg bg-primary"
                        style={{
                            height: 'calc(100% - 8px)',
                            top: '4px',
                        }}
                        animate={{
                            left: highlightStyle.left,
                            width: highlightStyle.width,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                        }}
                    />
                    
                    <div onMouseEnter={() => handleLinkHover('/')}>
                        <NavLink href="/">Home</NavLink>
                    </div>
                    <div onMouseEnter={() => handleLinkHover('/products')}>
                        <NavLink href="/products">Products</NavLink>
                    </div>
                    <div onMouseEnter={() => handleLinkHover('/dashboard')}>
                        <NavLink href="/dashboard">Dashboard</NavLink>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    <motion.button 
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-secondary cursor-pointer text-primary"
                        title="Toggle theme"
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div
                            animate={{ rotate: isDarkMode ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.div>
                    </motion.button>
                    
                    <CallButton text="Login" href="/login" variant="primary" />
                    <CallButton text="Sign up" href="/signup" variant="primary" />
                </div>

                <div className="flex lg:hidden items-center gap-3">
                    <motion.button 
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-secondary cursor-pointer text-primary"
                        title="Toggle theme"
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div
                            animate={{ rotate: isDarkMode ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.div>
                    </motion.button>

                    <motion.button
                        onClick={toggleMenu}
                        className="p-2 rounded-lg bg-secondary text-primary"
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-primary border-b border-[var(--color-border)] overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/products">Products</NavLink>
                                <NavLink href="/dashboard">Dashboard</NavLink>
                            </div>

                            <div className="flex flex-col gap-3 pt-4 border-t border-[var(--color-border)]">
                                <CallButton text="Login" href="/login" variant="primary" />
                                <CallButton text="Sign up" href="/signup" variant="primary" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}