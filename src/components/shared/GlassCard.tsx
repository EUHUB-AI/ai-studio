import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    role?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', role }) => {
    return (
        <div role={role} className={`glass rounded-2xl p-6 transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] ${className}`}>
            {children}
        </div>
    );
};
