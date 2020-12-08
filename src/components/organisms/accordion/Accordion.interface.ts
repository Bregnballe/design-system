export interface AccordionProps {
    componentSize: 'small' | 'medium' | 'large';
    color: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    direction?: 'horizontal' | 'vertical';
    layout?: 'space-between' | 'center' ;
    fluid?: boolean;
    children: React.ReactNode;
    as?: any;
} 