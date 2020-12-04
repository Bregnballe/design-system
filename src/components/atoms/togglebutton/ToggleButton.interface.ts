export interface ToggleButtonProps {
    handleClick?: (index?: number) => void;
    color: 'primary' | 'secondary' | 'tertiary';
    componentSize?: 'small' | 'medium' | 'large';
    fluid?: boolean;
    children: React.ReactNode;
    index?: number | undefined;
    selected: boolean;
} 