export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    children: React.ReactNode;
    color: 'primary' | 'secondary' | 'tertiary';
    componentSize?: 'small' | 'medium' | 'large';
    fluid?: boolean;
    layout?: 'space-between' | 'center' ;
    handleClick?: () => void;
    handleMouseDown?: () => void;
} 