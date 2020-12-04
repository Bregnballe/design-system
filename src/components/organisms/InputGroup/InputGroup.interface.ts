export interface InputGroupProps {
    componentSize: 'small' | 'medium' | 'large';
    color: 'primary' | 'secondary';
    textPlaceholder?: string;
    label: string;
    children: React.ReactNode;
} 