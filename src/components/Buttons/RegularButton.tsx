import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { type ReactNode } from 'react';

interface RegularButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
    variant?: 'primary' | 'secondary';
    icon?: ReactNode;
}

const RegularButton: React.FC<RegularButtonProps> = ({ text, href, onClick, type = 'button', variant = 'primary', icon }) => {
    const [isHovered, setIsHovered] = useState(false);

    const isPrimary = variant === 'primary';

    const buttonContent = (
        <motion.div
            className="inline-flex items-center justify-center px-4 py-2 rounded-full font-medium relative overflow-hidden"
            style={{
                backgroundColor: isPrimary ? 'var(--btn-bg-color)' : 'var(--btn-secondary-bg)',
                color: isPrimary ? 'var(--btn-text-color)' : 'var(--btn-secondary-text)',
                borderRadius: '25px',
                textDecoration: 'none',
                fontFamily: '"Inter", sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
        >
            <div className="relative h-6 flex items-center justify-center" style={{ minWidth: 'max-content' }}>
                    
                <motion.div
                    className="flex items-center gap-2 whitespace-nowrap"
                    animate={{
                        y: isHovered ? -32 : 0,
                        opacity: isHovered ? 0 : 1,
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                    {icon && <span className="flex-shrink-0">{icon}</span>}
                    <span>{text}</span>
                </motion.div>

                <motion.div
                    className="absolute inset-0 flex items-center gap-2 whitespace-nowrap"
                    animate={{
                        y: isHovered ? 0 : 32,
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                    {icon && <span className="flex-shrink-0">{icon}</span>}
                    <span>{text}</span>
                </motion.div>
                
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <Link to={href} className="inline-block">
                {buttonContent}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className="inline-block border-none bg-transparent p-0 cursor-pointer">
            {buttonContent}
        </button>
    );
};

export default RegularButton;