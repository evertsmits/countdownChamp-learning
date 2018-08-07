import React, {Component} from 'react';
import './app.css';

class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            stopWatchTime: null,
            timeLeft: 0
        }
    }

    componentWillMount() {
        this.setSeconds(this.props.time)
    }

    componentDidMount() {
        setInterval(() => {this.subtractSecond(this.props.time)}, 1000);
    }

    setSeconds(val) {
        this.setState({stopWatchTime: val})
    }


    subtractSecond(val) {
        if(val !== this.state.stopWatchTime && this.state.timeLeft !== 0){
            let sec = this.state.stopWatchTime;
            let newSec = sec + 1;
            this.setState({stopWatchTime: newSec});
            this.setState({timeLeft: val - newSec})
        } else {
            this.setState({timeLeft: 'no'});
        }
    }

    render() {
        return (
            <div>
                <div>There are {this.state.timeLeft} seconds left</div>
            </div>
        )
    }
}

export default Stopwatch;