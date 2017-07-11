import React from 'react'
import * as Icons from 'react-icons/lib/md'

var type = 'Md'

export function getIconComponent(name, size) {

    var MyComponent = Icons.type + "Component"
    return React.createElement(MyComponent, {})

}    
    

// const components = {
//   photo: PhotoStory,
//   video: VideoStory
// }

const components = Icons

export function Story(props) {
  // Correct! JSX type can be a capitalized variable.
  const SpecificStory = components.props.storyType
  return <SpecificStory story={props.story} />
}


/*

 case iconname.ICON_MENU: return <Icons.MdMenu size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} style={this.props.style || this.defaultProps.style} />    

 switch (name) {    
    
    default: return <Icons.MdInfo size={this.defaultProps.size} color={this.defaultProps.color} style={this.props.style || this.defaultProps.style} />
}


*/

export class Icon extends React.Component {

constructor(props) {
    super(props)
    this.defaultProps = {
        name: 'info',
        size: 75,
        color: 'Darkred',
        active: false,
        style: {
            verticalAlign: '-5px',           
            paddingRight: '8px',
        }
    }    
  }

setColor(active) {
    if(active === true)
        {return(this.props.color)}
    else
        {return(this.defaultProps.color)}
}

    render() {
        return (
            getIconComponent(this.props.icon, this.props.size)
        )        
    }
}
