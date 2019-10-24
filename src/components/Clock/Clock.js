import React, { Component } from 'react'



class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  showTimeString() {
    return this.state.time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  render() {
    return (
      <p className="App-clock">
        The time is {this.showTimeString()}.
      </p>
    );
  }
}

export default Clock;