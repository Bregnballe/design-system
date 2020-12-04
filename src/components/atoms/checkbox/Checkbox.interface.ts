export interface CheckboxProps {
    asButton?: boolean;
    checked: boolean;
    componentSize: 'small' | 'medium' | 'large';
    hasLabel: boolean;
    label?: string;
    labelPosition: 'left' | 'right';
    handleClick?: () => void;
    handleMouseDown?: () => void;
    handleChange?: () => void;
} 