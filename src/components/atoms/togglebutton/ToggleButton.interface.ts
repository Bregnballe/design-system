export interface ToggleButtonProps {
    handleClick?: (index?: number) => void;
    color: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    componentSize?: 'small' | 'medium' | 'large';
    fluid?: boolean;
    layout?: 'space-between' | 'center' ;
    children?: React.ReactNode;
    index?: number | undefined;
    selected: boolean;
} 