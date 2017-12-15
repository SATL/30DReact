import React from 'react';

export default class Conditionals extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <button
                onClick={() => {
                this.setState({
                    count: this.state.count + 1
                })
            }}>Clap 

                <span>
                    {this.state.count === 0 ? <i>be the first </i> : <span>{this.state.count}</span>}
                </span>
            </button>
        )
    }
}