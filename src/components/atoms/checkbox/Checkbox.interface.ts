export interface CheckboxProps {
    asButton?: boolean;
    checked: boolean;
    componentSize: 'small' | 'medium' | 'large';
    fluid?: boolean;
    id?: string;
    index?: number | undefined;
    layout?: 'space-between' | 'center' | 'flex-end' | 'flex-start';
    handleChange?: (arg?: number | boolean | undefined) => void;
    handleClick?: () => void;
    handleMouseDown?: () => void;
} 