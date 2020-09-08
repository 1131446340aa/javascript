import React, { Component } from 'react'
class Name extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props);

    }
    render() {
        let {age} = this.props
        return (
            <div>{age}</div>
        )
    }
}
export default Name