export interface ButtonProps {
    color?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    label: string;
    handleClick?: () => void;
    handleMouseDown?: () => void;
} 