import React from 'react'

import {Accordion} from './Accordion'
import {ToggleButton} from '../../atoms/togglebutton/ToggleButton'
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
        toggleIndex(index)
    }

    return (
        <Accordion direction="vertical" as="ul" componentSize="small" color="tertiary" fluid={true}>
        <Container layout="column" as="li">
            <ToggleButton
            color="quaternary"
            index={0}
            fluid={true}
            selected={selectedList[0]}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList[0] ? <Icon color="primary" componentSize="small" name="chevronDown" flip="vertical" /> : <Icon color="primary" componentSize="small" name="chevronDown" />}
            </ToggleButton>
            {selectedList[0] && <Container padding="small" >Hey again</Container>}
        </Container>
        <Container layout="column" as="li">
            <ToggleButton
            color="quaternary"
            index={1}
            fluid={true}
            selected={selectedList[1]}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList[1] ? <Icon color="primary" componentSize="small" name="chevronDown" flip="vertical" /> : <Icon color="primary" componentSize="small" name="chevronDown" />}
            </ToggleButton>
            {selectedList[1] && <Container padding="small" >Hey again</Container>}
        </Container>
        <Container layout="column" as="li">
            <ToggleButton
            color="quaternary"
            index={2}
            fluid={true}
            selected={selectedList[2]}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList[2] ? <Icon color="primary" componentSize="small" name="chevronDown" flip="vertical" /> : <Icon color="primary" componentSize="small" name="chevronDown" />}
            </ToggleButton>
            {selectedList[2] && <Container padding="small" >Hey again</Container>}
        </Container>
        </Accordion>
    )
}



export const AccordionColumn: React.FC<AccordionProps> = ({reducer = () => {}}) => {
    const {selectedList, toggleIndex} = useToggle({
    reducer: reducer,
    })

    const handleClick = (index:number|undefined) => {
        toggleIndex(index)
    }

    return (
        <Accordion direction="vertical" as="ul" componentSize="small" color="tertiary">
        <Container layout="row" as="li">
            <ToggleButton
            color="quaternary"
            index={0}
            selected={selectedList[0]}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList[0] ? <Icon color="primary" componentSize="small" name="chevronRight"  flip="horizontal" /> : <Icon color="primary" componentSize="small"  name="chevronRight" />}
            </ToggleButton>
            {selectedList[0] && <Container padding="small" >Hey again</Container>}
        </Container>
        <Container layout="row" as="li">
            <ToggleButton
            color="quaternary"
            index={1}
            selected={selectedList[1]}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList[1] ? <Icon color="primary" componentSize="small" name="chevronRight" flip="horizontal" /> : <Icon color="primary" componentSize="small" name="chevronRight" />}
            </ToggleButton>
            {selectedList[1] && <Container padding="small" >Hey again</Container>}
        </Container>
        <Container layout="row" as="li">
            <ToggleButton
            color="quaternary"
            index={2}
            selected={selectedList[2]}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList[2] ? <Icon color="primary" componentSize="small" name="chevronRight" flip="horizontal"   /> : <Icon color="primary" componentSize="small"   name="chevronRight" />}
            </ToggleButton>
            {selectedList[2] && <Container padding="small" >Hey again</Container>}
        </Container>
        </Accordion>
    )
}



export const AccordionTest: React.FC<AccordionProps> = ({reducer = () => {}}) => {
    const {selectedList, toggleIndex} = useToggle({
    reducer: reducer,
    })

    const handleClick = (index:number|undefined) => {
        toggleIndex(index)
    }

    return (
        <Accordion direction="horizontal" as="ul" componentSize="small" color="tertiary">
        <Container layout="column" as="li">
            <ToggleButton
            color="quaternary"
            index={0}
            selected={selectedList[0]}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList[0] ? <Icon color="primary" componentSize="small" name="chevronRight"  flip="horizontal" /> : <Icon color="primary" componentSize="small"  name="chevronRight" />}
                {selectedList[0] && <Container padding="small" >Hey again</Container>}
            </ToggleButton>
            
        </Container>
        <Container layout="column" as="li">
            <ToggleButton
            color="quaternary"
            index={1}
            selected={selectedList[1]}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList[1] ? <Icon color="primary" componentSize="small" name="chevronRight" flip="horizontal" /> : <Icon color="primary" componentSize="small" name="chevronRight" />}
                {selectedList[1] && <Container padding="small" >Hey again</Container>}
            </ToggleButton>
            
        </Container>
        <Container layout="column" as="li">
            <ToggleButton
            color="quaternary"
            index={2}
            selected={selectedList[2]}
            handleClick={handleClick}
            >
                <span>Hey</span>
                {selectedList[2] ? <Icon color="primary" componentSize="small" name="chevronRight" flip="horizontal"   /> : <Icon color="primary" componentSize="small"   name="chevronRight" />}
                {selectedList[2] && <Container padding="none" fluid={true} >Hey again</Container>}
            </ToggleButton>
        </Container>
        </Accordion>
    )
}
