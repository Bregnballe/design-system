export interface InputProps {
    size?: 'small' | 'medium' | 'large';
    placeholder: string;
    onChange?: () => void;
    onKeyDown?: () => void;
} 