class App extends React.Component {
    render() {
        return (
            <div className="notificationsFrame">
                <div className="panel">
                   <Pokemon id={1} />
                   <hr />
                   <List items = {[12,4,6,1,2]}/>
                   <hr />
                   <List2 items = {[9,4,6,1,2]}/>
                </div>
            </div>
        )
    }
}
var mount = document.querySelector('#app');
ReactDOM.render(
    <App/>, mount);