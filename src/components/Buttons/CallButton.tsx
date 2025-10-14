import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { useState } from 'react';

interface CallButtonProps {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
}

const CallButton: React.FC<CallButtonProps> = ({ text, href, variant = 'primary' }) => {
    const [isHovered, setIsHovered] = useState(false);

    const isPrimary = variant === 'primary';

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener"
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
                    <span>{text}</span>
                    <span className="bg-primary p-1 rounded-xl">
                        <FiArrowUpRight size={18} className="text-primary" />
                    </span>
                
                </motion.div>

                <motion.div
                    className="absolute inset-0 flex items-center gap-2 whitespace-nowrap"
                    animate={{
                        y: isHovered ? 0 : 32,
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                    <span>{text}</span>
                    <span className="bg-primary p-1 rounded-xl">
                        <FiArrowUpRight size={18} className="text-primary" />
                    </span>
                </motion.div>
                
            </div>

        </motion.a>
    );
};

export default CallButton;