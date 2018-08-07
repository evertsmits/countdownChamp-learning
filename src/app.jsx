import React, { Component } from 'react';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import { Form, FormControl, Button } from 'react-bootstrap';
import './app.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            stopWatchTime: 0,
            newStopWatchTime: 0,
            deadline: 'April 27, 2019',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline})
    }

    changeStopWatchTime() {
        this.setState({stopWatchTime: this.state.newStopWatchTime});
    }

    render() {
        return (
            <div className='app'>
                <div className='app-title'>Countdown to {this.state.deadline}</div>
                <Clock
                    deadline={this.state.deadline}
                />
                <Form inline>
                    <FormControl
                        className='Deadline-input'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                        placeholder='new date'
                    />
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
                <div className='app-title'>Stopwatch for {this.state.stopWatchTime} seconds</div>
                <Stopwatch
                    time={this.state.stopWatchTime}
                />
                <Form inline>
                    <FormControl
                        className='Deadline-input'
                        onChange={event => this.setState({newStopWatchTime: parseInt(event.target.value)})}
                        placeholder='new stopwatch time'
                    />
                    <Button onClick={() => this.changeStopWatchTime()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;