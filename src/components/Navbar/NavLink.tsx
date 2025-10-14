import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href = '#', onClick }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Check if the current route matches the href
        if (window.location.pathname === href) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [href]);

    return (
        <Link
            to={href}
            onClick={onClick}
            className={`relative px-4 py-2 text-base font-semibold transition-colors duration-200 ${
                isActive ? 'text-[var(--color-primary)]' : 'text-primary'
            }`}
            data-active={isActive}
            data-href={href}
        >
            <span className="relative z-10">{children}</span>
        </Link>
    );
};

export default NavLink;