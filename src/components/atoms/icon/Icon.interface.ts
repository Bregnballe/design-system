export interface IconProps {
    name: string,
    color: 'primary' | 'secondary' | 'tertiary';
    componentSize: 'small' | 'medium' | 'large';
    flip?: 'horizontal' | 'vertical';
    rotate?: '90' | '180' | '270';
} 