export interface LinkProps {
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
    onMouseDown?: () => void;
} 