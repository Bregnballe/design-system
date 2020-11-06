export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    color: 'primary' | 'secondary' | 'tertiary';
    componentSize: 'small' | 'medium' | 'large';
    label: string;
    handleClick?: () => void;
    handleMouseDown?: () => void;
} 