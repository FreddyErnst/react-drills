import React, {Component} from 'react'


class Img extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render () {
        return (
            <div>
                <img src = {this.props.img} />
            </div>
        )
    }
    
}

export default Img;