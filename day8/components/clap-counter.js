class ClapCounter extends React.Component {

    state = {
        claps: 0
    }

    render() {
        return (

            <button
                onClick={() => {
                this.setState({
                    claps: this.state.claps + 1
                })
            }}>
                <span>Click to clap
                </span>
                👏 {this.state.claps}
            </button>
        )
    }
}

ReactDOM.render(
    <ClapCounter/>, document.querySelector("#root"))