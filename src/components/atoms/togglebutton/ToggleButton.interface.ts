export interface ToggleButtonProps {
    children?: React.ReactNode;
    color: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    componentSize?: 'small' | 'medium' | 'large';
    fluid?: boolean;
    index?: number | undefined;
    layout?: 'space-between' | 'center' | 'flex-end' | 'flex-start';
    selected: boolean;
    handleClick?: (index?: number) => void;
} 