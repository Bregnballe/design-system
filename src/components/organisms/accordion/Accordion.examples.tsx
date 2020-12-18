import React from 'react'

import {Accordion} from './Accordion'
import {ToggleButton} from '../../atoms/toggleButton/ToggleButton'
import {Container} from '../../atoms/container/Container'
import {Icon} from '../../atoms/icon/Icon'

import {useToggle} from '../../../hooks/useToggle'


interface AccordionProps {
    reducer?: () => any[];
};


export const AccordionRow: React.FC<AccordionProps> = ({reducer = () => {}}) => {
    const {selectedList, toggleIndex} = useToggle({
    reducer: reducer,
    })

    const handleClick = (index:number|undefined) => {
        index !== undefined && toggleIndex(index)
    }

    return (
        <Accordion direction="vertical" as="ul" componentSize="small" color="tertiary" fluid={true}>
        <Container layout="column" as="li">
            <ToggleButton
            aria-expanded={selectedList.includes(0)}
            color="quaternary"
            index={0}
            fluid={true}
            selected={selectedList.includes(0)}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList.includes(0) ? <Icon color="primary" name="chevronDown" flip="vertical" /> : <Icon color="primary" name="chevronDown" />}
            </ToggleButton>
            {selectedList.includes(0) && <Container padding="small" >Hey again</Container>}
        </Container>
        <Container layout="column" as="li">
            <ToggleButton
            aria-expanded={selectedList.includes(1)}
            color="quaternary"
            index={1}
            fluid={true}
            selected={selectedList.includes(1)}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList.includes(1) ? <Icon color="primary"  name="chevronDown" flip="vertical" /> : <Icon color="primary" name="chevronDown" />}
            </ToggleButton>
            {selectedList.includes(1) && <Container padding="small" >Hey again</Container>}
        </Container>
        <Container layout="column" as="li">
            <ToggleButton
            aria-expanded={selectedList.includes(2)}
            color="quaternary"
            index={2}
            fluid={true}
            selected={selectedList.includes(2)}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList.includes(2) ? <Icon color="primary" name="chevronDown" flip="vertical" /> : <Icon color="primary" name="chevronDown" />}
            </ToggleButton>
            {selectedList.includes(2) && <Container padding="small" >Hey again</Container>}
        </Container>
        </Accordion>
    )
}



export const AccordionColumn: React.FC<AccordionProps> = ({reducer = () => {}}) => {
    const {selectedList, toggleIndex} = useToggle({
    reducer: reducer,
    })

    const handleClick = (index:number|undefined) => {
        index !== undefined && toggleIndex(index)
    }

    return (
        <Accordion direction="vertical" as="ul" componentSize="small" color="tertiary">
        <Container layout="row" as="li">
            <ToggleButton
            aria-expanded={selectedList.includes(0)}
            color="quaternary"
            index={0}
            selected={selectedList.includes(0)}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList.includes(0) ? <Icon color="primary" name="chevronRight"  flip="horizontal" /> : <Icon color="primary"  name="chevronRight" />}
            </ToggleButton>
            {selectedList.includes(0) && <Container padding="small" >Hey again</Container>}
        </Container>
        <Container layout="row" as="li">
            <ToggleButton
            aria-expanded={selectedList.includes(1)}
            color="quaternary"
            index={1}
            selected={selectedList.includes(1)}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList.includes(1) ? <Icon color="primary"  name="chevronRight" flip="horizontal" /> : <Icon color="primary"  name="chevronRight" />}
            </ToggleButton>
            {selectedList.includes(1) && <Container padding="small" >Hey again</Container>}
        </Container>
        <Container layout="row" as="li">
            <ToggleButton
            aria-expanded={selectedList.includes(2)}
            color="quaternary"
            index={2}
            selected={selectedList.includes(2)}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList.includes(2) ? <Icon color="primary"  name="chevronRight" flip="horizontal"   /> : <Icon color="primary"    name="chevronRight" />}
            </ToggleButton>
            {selectedList.includes(2) && <Container padding="small" >Hey again</Container>}
        </Container>
        </Accordion>
    )
}



export const AccordionTest: React.FC<AccordionProps> = ({reducer = () => {}}) => {
    const {selectedList, toggleIndex} = useToggle({
    reducer: reducer,
    })

    const handleClick = (index:number|undefined) => {
        index !== undefined && toggleIndex(index)
    }

    return (
        <Accordion direction="horizontal" as="ul" componentSize="small" color="tertiary">
        <Container layout="column" as="li">
            <ToggleButton
            aria-expanded={selectedList.includes(0)}
            color="quaternary"
            index={0}
            selected={selectedList.includes(0)}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList.includes(0) ? <Icon color="primary" name="chevronRight"  flip="horizontal" /> : <Icon color="primary"  name="chevronRight" />}
                {selectedList.includes(0) && <Container padding="small" >Hey again</Container>}
            </ToggleButton>
            
        </Container>
        <Container layout="column" as="li">
            <ToggleButton
            aria-expanded={selectedList.includes(1)}
            color="quaternary"
            index={1}
            selected={selectedList.includes(1)}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList.includes(1) ? <Icon color="primary" name="chevronRight" flip="horizontal" /> : <Icon color="primary" name="chevronRight" />}
                {selectedList.includes(1) && <Container padding="small" >Hey again</Container>}
            </ToggleButton>
            
        </Container>
        <Container layout="column" as="li">
            <ToggleButton
            aria-expanded={selectedList.includes(2)}
            color="quaternary"
            index={2}
            selected={selectedList.includes(2)}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList.includes(2) ? <Icon color="primary"  name="chevronRight" flip="horizontal"   /> : <Icon color="primary"  name="chevronRight" />}
                {selectedList.includes(2) && <Container padding="none" fluid={true} >Hey again</Container>}
            </ToggleButton>
        </Container>
        </Accordion>
    )
}
