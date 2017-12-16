class Content extends React.Component{
    render(){

        var divStyle ={
            width:'40rem',
            marginLeft:'auto',
            marginRight:'auto'
        }

        return(
            <div style={divStyle}>
            <h3>Nain</h3>
            {this.props.children}
            <hr />
            </div>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    <Content>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor vitae odio accumsan mollis. Curabitur sit amet lorem vel augue euismod fermentum ut nec nulla. Phasellus vitae sapien eu libero auctor hendrerit. Suspendisse vitae est vitae lectus rutrum porttitor et ac lacus.
                            </p>
                    </Content>
                </div>
            </div>
        )
    }
}
var mount = document.querySelector('#app');
ReactDOM.render(
    <App/>, mount);