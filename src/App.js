import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import { List } from 'react-virtualized'

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

function rowRenderer ({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style        // Style object to be applied to row (to position it)
    }) {
    return (
        <div key={key} style={style}>
            {list[index]}
        </div>
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
