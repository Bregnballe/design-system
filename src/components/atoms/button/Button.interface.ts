export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    ariaLabel?: string;
    children: React.ReactNode;
    color: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    componentSize?: 'small' | 'medium' | 'large';
    fluid?: boolean;
    layout?: 'space-between' | 'center' | 'flex-start' | 'flex-end';
    handleClick?: () => void;
    handleMouseDown?: () => void;
} 