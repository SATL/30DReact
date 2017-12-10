const activities = [
    {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
            id: 1,
            name: 'Nate',
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [
            {
                from: 'Ari',
                text: 'Me too!'
            }
        ]
    }, {
        timestamp: new Date().getTime(),
        text: "Woke up early for a beautiful run",
        user: {
            id: 2,
            name: 'Ari',
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [
            {
                from: 'Nate',
                text: 'I am so jealous'
            }
        ]
    }
];
class App extends React.Component {
    render() {
        return (
            <div className="notificationsFrame">
                <Header title="Nain"/>
                <div className="panel">
                    <Content activities={activities}/>
                </div>
            </div>
        )
    }
}
var mount = document.querySelector('#app');
ReactDOM.render(
    <App/>, mount);