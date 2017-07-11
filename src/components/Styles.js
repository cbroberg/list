import styled from 'styled-components'
import { List } from 'react-virtualized'

// const log = console.log


export const Row = styled.div`
    font-family: 'Source Sans Pro';
    font-size: 1.0em;
    font-weight: 300;
    padding-bottom: 2px;
    color: ${props => props.index%2? props => props.color : 'lightblue' || 'Darkred'};
    background: ${props => props.index%2? '#ddd' : '#fff' | 'Darkred'};    
`

export const MyList = styled(List)`
    color: ${props => props.color ||  'goldenrod'};
    font-size: 1.0em;
    margin: 15px;
    padding-bottom: 2px;
    overflow-y: hidden
`
export const Loading = styled.div`
    font-family: 'Source Sans Pro';
    font-size: 1.0em;
    font-weight: 300;
    padding-bottom: 2px;
    color: ${props => props.index%2? props => props.color : 'lightblue' || 'Darkred'};
    background: ${props => props.index%2? '#ddd' : '#fff' | 'Darkred'};    
`
