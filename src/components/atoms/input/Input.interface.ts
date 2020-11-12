export interface InputProps extends React.HTMLProps<HTMLInputElement>  {
    componentSize: 'small' | 'medium' | 'large'; //cannot be named size as property already exists in html props on input fields
    textPlaceholder?: string;
    // same goes for placeholder
    handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}    