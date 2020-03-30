import React,{Component} from 'react'

class Welcome extends Component{
    render() {
        return <h1>How are you, {this.props.name}? Are you {this.props.heroName}?</h1>
    }
}

export default Welcome