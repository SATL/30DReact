import React, {Component} from 'react';

class MouseMove extends Component {

    state = {
        x: 0,
        y: 0
    }

    render() {

        const divSyle = {
            'width': '10rem',
            'minHeight': '10rem',
            'border': '1px dashed #aaa',
            'verticalAlign': 'center'
        }

        return (
            <div
                onMouseMove={this
                .mouseMove
                .bind(this)}
                style={divSyle}>
                Move here<br/>

                position: {this.state.x}, {this.state.y}
            </div>
        )
    }

    mouseMove(evt) {
        this.setState({x: evt.screenX, y: evt.screenY})
    }
}

export default MouseMove;