import React, { Component } from 'react';
import './simpleCalculator.css';
import calculate from './logic/calculate.js';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btn) {
    const funcBtn = btn.target.textContent;
    this.setState((e) => calculate(e, funcBtn));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="box-container">
        <div className="result-screen">
          { total }
          { operation }
          { next }
        </div>
        <button type="button" onClick={this.handleClick} className="btn">AC</button>
        <button type="button" onClick={this.handleClick} className="btn">+/-</button>
        <button type="button" onClick={this.handleClick} className="btn">%</button>
        <button type="button" onClick={this.handleClick} className="btn hover-btn">÷</button>
        <button type="button" onClick={this.handleClick} className="btn">7</button>
        <button type="button" onClick={this.handleClick} className="btn">8</button>
        <button type="button" onClick={this.handleClick} className="btn">9</button>
        <button type="button" onClick={this.handleClick} className="btn hover-btn">x</button>
        <button type="button" onClick={this.handleClick} className="btn">4</button>
        <button type="button" onClick={this.handleClick} className="btn">5</button>
        <button type="button" onClick={this.handleClick} className="btn">6</button>
        <button type="button" onClick={this.handleClick} className="btn hover-btn">-</button>
        <button type="button" onClick={this.handleClick} className="btn">1</button>
        <button type="button" onClick={this.handleClick} className="btn">2</button>
        <button type="button" onClick={this.handleClick} className="btn">3</button>
        <button type="button" onClick={this.handleClick} className="btn hover-btn">+</button>
        <button type="button" onClick={this.handleClick} className="btn screen-num">0</button>
        <button type="button" onClick={this.handleClick} className="btn">.</button>
        <button type="button" onClick={this.handleClick} className="btn hover-btn">=</button>
      </div>
    );
  }
}

export default Calculator;
