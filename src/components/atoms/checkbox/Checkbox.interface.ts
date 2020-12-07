export interface CheckboxProps {
    asButton?: boolean;
    checked: boolean;
    componentSize: 'small' | 'medium' | 'large';
    handleClick?: () => void;
    handleMouseDown?: () => void;
    handleChange?: (val:boolean) => void;
} 