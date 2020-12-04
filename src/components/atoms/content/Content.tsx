import React, { useState} from 'react';

import { useAccordionGroupContext } from '../../organisms/accordionGroup/hooks/useAccordionGroupContext';

//import { AccordionGroupStyled } from './AccordionGroup.styles';
import { ContentProps } from './Content.interface';

export const Content: React.FC<ContentProps> = ({
    element: Component = 'div',
    eventKey,
    children, 
}) => {

    const { activeEventKey } = useAccordionGroupContext()

    return activeEventKey === eventKey ? (
        <Component>{children}</Component>
    ) : null;
    //if keys match render component
};

