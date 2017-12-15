import React from 'react';

const Hour = (props) => {
    let {hours} = props;
    if (hours === 0) {
        hours = 12;
    }
    if (props.twelveHours) {
        hours -= 12;
    }
    return (
        <span>{hours}</span>
    )
}

const Minute = ({minutes}) => (
    <span>{minutes < 10 && '0'}{minutes}</span>
)
const Second = ({seconds}) => (
    <span>{seconds < 10 && '0'}{seconds}</span>
)
const Separator = ({separator}) => (
    <span>{separator || ':'}</span>
)
const Ampm = ({hours}) => (
    <span>{hours >= 12
            ? 'pm'
            : 'am'}</span>
)

const Formatter = (props) => {
    let children = props
        .format
        .split('')
        .map((e, idx) => {
            if (e === 'h') {
                return <Hour key={idx} {...props}/>
            } else if (e === 'm') {
                return <Minute key={idx} {...props}/>
            } else if (e === 's') {
                return <Second key={idx} {...props}/>
            } else if (e === 'p') {
                return <Ampm key={idx} {...props}/>
            } else if (e === ' ') {
                return <span key={idx}></span>;
            } else {
                return <Separator key={idx} {...props}/>
            }
        });

    return <span>{children}</span>;
}

class Clocks extends React.Component {
    state = {
        currentTime: new Date()
    }
    componentDidMount() {
        this.setState({
            currentTime: new Date()
        }, this.updateTime);
    }
    componentWillUnmount() {
        if (this.timerId) {
            clearTimeout(this.timerId)
        }
    }

    updateTime(e) {
        this.timerId = setTimeout(() => {
            this.setState({
                currentTime: new Date()
            }, this.updateTime);
        })
    }

    render() {
        const {currentTime} = this.state
        const hour = currentTime.getHours();
        const minute = currentTime.getMinutes();
        const second = currentTime.getSeconds();

        return (
            <div className='clock'>
                <Formatter
                    {...this.props}
                    state={this.state}
                    hours={hour}
                    minutes={minute}
                    seconds={second}/>
            </div>
        )
    }
}

export default Clocks;