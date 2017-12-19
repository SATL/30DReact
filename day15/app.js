class App extends React.Component {
    render() {
        return (
            <div className="notificationsFrame">
                <div className="panel">
                   <Pokemon id={1} />
                </div>
            </div>
        )
    }
}
var mount = document.querySelector('#app');
ReactDOM.render(
    <App/>, mount);