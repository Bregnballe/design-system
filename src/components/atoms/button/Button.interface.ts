export interface ButtonProps {
    color?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
    onMouseDown?: () => void;
} 