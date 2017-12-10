class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
    }

    render() {
        const {activities} = this.props;

        return (
            <div className="content">
                <div className="line"></div>
                {activities.map((activity) => {
                    return (<ActivityItem activity={activity}/>)
                })}
            </div>
        )
    }
}