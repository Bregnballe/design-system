import { ButtonProps } from '../../atoms/button/Button.interface'

export interface ButtonGroupProps {
    componentSize: 'small' | 'medium' | 'large';
    color: 'primary' | 'secondary';
    direction?: 'horizontal' | 'vertical';
    fluid?: boolean;
    children: React.ReactNode;
} 