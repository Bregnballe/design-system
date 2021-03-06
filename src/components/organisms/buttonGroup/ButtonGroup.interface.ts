export interface ButtonGroupProps {
    children: React.ReactNode;
    color: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    componentSize: 'small' | 'medium' | 'large';
    direction?: 'horizontal' | 'vertical';
    fluid?: boolean;
    layout?: 'space-between' | 'center' | 'flex-end' | 'flex-start';
} 