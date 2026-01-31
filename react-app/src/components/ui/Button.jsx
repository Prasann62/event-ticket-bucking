import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
        primary: 'bg-gradient-to-r from-[#2E1065] via-[#1D4ED8] to-[#06B6D4] text-white shadow-[0_0_20px_rgba(29,78,216,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)]',
        secondary: 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20',
        outline: 'bg-transparent border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white',
        ghost: 'bg-transparent text-white hover:bg-white/10',
    };

    const sizes = {
        sm: 'px-4 py-1.5 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg',
    };

    return (
        <motion.button
            ref={ref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-brand-bg disabled:opacity-50 disabled:pointer-events-none overflow-hidden relative group',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {/* Premium Shine Overlay */}
            {variant === 'primary' && (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />
            )}
            <span className="relative z-10 flex items-center">{children}</span>
        </motion.button>
    );
});

Button.displayName = 'Button';

export { Button };
