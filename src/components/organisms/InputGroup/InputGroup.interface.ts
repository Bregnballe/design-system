export interface InputGroupProps {
    children?: React.ReactNode;
    color: 'primary' | 'secondary';
    componentSize: 'small' | 'medium' | 'large';
    fluid?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    textPlaceholder?: string;
} 