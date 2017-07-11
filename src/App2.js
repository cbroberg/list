import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import { List } from 'react-virtualized'
import styled,{css} from 'styled-components'
// List data as an array of strings
const list = [
    'Brian Vaughn',
    'Christian Broberg',
    'Mette Bugge',
    'Mathilde Porsmose',
    'Max Porsmose',
    'Amalie Hayes'
    
  // And so on...
]
const Row = styled.div`
/*Procedural programming ftw
index%2 => is index divisible by 2?
*/
background: ${props => props.index%2? '#ddd':'#fff'}
/*${props => props.index %2 && css`
background:#000;
color:#FFF;
`}*/
`
function rowRenderer ({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style        // Style object to be applied to row (to position it)
    }) {
    return (
        <Row key={key} index={index} style={style}>
            {list[index]}
        </Row>
    )
}

class App extends Component {
    render() {
        return (
        <div>
            <List
                width={300}
                height={300}
                rowCount={list.length}
                rowHeight={20}
                rowRenderer={rowRenderer}
            />
        </div>
        )
    }
}

export default App
