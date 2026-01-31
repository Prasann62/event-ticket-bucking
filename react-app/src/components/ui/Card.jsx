import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

const Card = React.forwardRef(({ className, children, hoverEffect = true, ...props }, ref) => {
    return (
        <motion.div
            ref={ref}
            whileHover={hoverEffect ? { y: -10, transition: { duration: 0.3 } } : {}}
            className={cn(
                'glass rounded-3xl overflow-hidden transition-all duration-300 hover:border-brand-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
});

Card.displayName = 'Card';

const CardContent = ({ className, children, ...props }) => (
    <div className={cn('p-6', className)} {...props}>
        {children}
    </div>
);

export { Card, CardContent };
