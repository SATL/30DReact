import React, {Component} from 'react'

class ClapCounter extends Component {

    constructor(){
        super();
        this.state ={
            clapCount:0
        }
    }

    render() {
        return (
            <div>
                <button
                    type="text"
                    onClick={() => this.setState(previousState => ({
                    clapCount: previousState.clapCount + 1
                }))}>
                    {this.state.clapCount}
                    {' '}👏
                </button>
                <i>
                    be the first to clap</i>
            </div>
        )
    }
}

export default ClapCounter;