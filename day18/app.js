class App extends React.Component {
    render() {
        return (
            <div className="uk-container uk-dark uk-align-center">
                <div className="panel">
                   <Paginator component ={Pokemon}/>
                </div>
            </div>
        )
    }
}
var mount = document.querySelector('#app');
ReactDOM.render(
    <App/>, mount);