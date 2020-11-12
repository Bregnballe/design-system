export interface RadioButtonProps {
    checked: boolean;
    componentSize: 'small' | 'medium' | 'large';
    label?: string;
    hasLabel: boolean;
    asButton?: boolean;
    handleClick?: () => void;
    handleMouseDown?: () => void;
    handleChange?: () => void;
} 