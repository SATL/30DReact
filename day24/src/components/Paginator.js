import React, {Component} from 'react';

export class Paginator extends React.Component {
    state = {
        id: 1
    }

    render() {
        return this.props.render(this.state.id, {
            increment: () =>
              this.setState(({ id }) => ({ id: id + 1 })),
            decrement: () =>
              this.setState(({ id }) => ({ id: id - 1 }))
          });
    }

    paginate(number, e) {
        var newId = this.state.id + number;
        e.preventDefault();
        this.setState({id: newId})
    }
}