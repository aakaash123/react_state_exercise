import React, { Component } from 'react';
import './Lottery.css';
import Ball from './Ball';

class Lottery extends Component {
  state = {
    ar: this.randomNum()
  }

  regenerate = () => {
    this.setState({ar:this.randomNum()})
  }

  render() {
    const arr = this.state.ar.map(function(element) {
      return (
        <Ball num={element} />
      );
    });

    return (
      <div className="lottery">
        <div>
          size: {this.state.ar.length}
        </div>
        <div className='lottery-balls'>
          {arr}
        </div>
        <div>
          <button onClick={this.regenerate}>re-generate</button>
        </div>
      </div>
    );
  }

  randomNum() {
    let ar = [];
    for (let a = 0; a < this.props.len; a++) {
      ar.push(Math.floor(Math.random() * this.props.max));
    }
    return ar;
  }
}

export default Lottery;
