class ClapCounter extends React.Component {

    render() {
        return (

            <button onClick={() => {
                alert("Clap calp")
            }}>
                <span>Click to clap
                </span>
                👏
            </button>
        )
    }
}

ReactDOM.render(
    <ClapCounter/>, document.querySelector("#root"))