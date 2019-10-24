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

  appendLeadingZeroes(n){
    if(n <= 9){
      return "0" + n;
    }
    return n
  }

  showTimeString() {
    const hours = this.appendLeadingZeroes(this.state.time.getHours());
    const minutes = this.appendLeadingZeroes(this.state.time.getMinutes());
    const seconds = this.appendLeadingZeroes(this.state.time.getSeconds());

    return `${hours}:${minutes}:${seconds}`
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