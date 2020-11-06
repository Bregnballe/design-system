export interface CheckboxProps {
    checked: boolean;
    componentSize: 'small' | 'medium' | 'large';
    handleClick?: () => void;
    handleMouseDown?: () => void;
    handleChange?: () => void;
} 