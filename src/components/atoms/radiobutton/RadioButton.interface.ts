export interface RadioButtonProps {
    asButton?: boolean;
    checked: boolean;
    componentSize: 'small' | 'medium' | 'large';
    fluid?: boolean;
    groupName?: string;
    id?: string;
    layout?: 'space-between' | 'center' | 'flex-end' | 'flex-start';
    value?: string;
    handleChange?: (val:string) => void;
    handleClick?: () => void;
    handleMouseDown?: () => void;
} 