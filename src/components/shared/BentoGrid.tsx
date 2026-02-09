import React from 'react';

interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)] ${className}`}>
            {children}
        </div>
    );
};

interface BentoItemProps {
    children: React.ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
}

export const BentoItem: React.FC<BentoItemProps> = ({
    children,
    className = '',
    colSpan = 1,
    rowSpan = 1
}) => {
    const colClass = colSpan === 2 ? 'md:col-span-2' : colSpan === 3 ? 'md:col-span-3' : 'md:col-span-1';
    const rowClass = rowSpan === 2 ? 'md:row-span-2' : 'md:row-span-1';

    return (
        <div className={`${colClass} ${rowClass} ${className}`}>
            {children}
        </div>
    );
};
