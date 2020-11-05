export interface CheckboxProps {
    size?: 'small' | 'medium' | 'large';
    checked: boolean;
    handleClick?: () => void;
    handleMouseDown?: () => void;
    handleChange?: () => void;
} 