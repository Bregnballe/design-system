import { ButtonProps } from '../../atoms/button/Button.interface'

export interface ButtonGroupProps {
    componentSize: 'small' | 'medium' | 'large';
    color: 'primary' | 'secondary';
    direction?: 'horizontal' | 'vertical';
    children: React.ReactNode;
} 