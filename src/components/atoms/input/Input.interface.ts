export interface InputProps {
    size?: 'small' | 'medium' | 'large';
    placeholder: string;
    handleChange?: () => void;
    handleKeyDown?: () => void;
} 