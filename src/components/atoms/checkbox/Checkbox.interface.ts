export interface CheckboxProps {
    asButton?: boolean;
    checked: boolean;
    componentSize: 'small' | 'medium' | 'large';
    id?: string;
    handleClick?: () => void;
    handleMouseDown?: () => void;
    handleChange?: (val:boolean) => void;
} 