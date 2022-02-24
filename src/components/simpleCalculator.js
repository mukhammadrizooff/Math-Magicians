import React, { useState } from 'react';
import './simpleCalculator.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const stateObj = {
    total: 0,
    next: null,
    operation: null,
  };

  const [properties, setProperties] = useState(stateObj);

  const handleClick = (btn) => {
    const funcBtn = btn.target.textContent;
    const newProperties = { ...properties };
    setProperties(calculate(newProperties, funcBtn));
  };

    return (
      <>
        <div className="box-container">
          <div className="result-screen">
            { properties.total}
            { properties.operation }
            { properties.next }
        </div>
          <button type="button" onClick={handleClick} className="btn">AC</button>
          <button type="button" onClick={handleClick} className="btn">+/-</button>
          <button type="button" onClick={handleClick} className="btn">%</button>
          <button type="button" onClick={handleClick} className="btn hover-btn">÷</button>
          <button type="button" onClick={handleClick} className="btn">7</button>
          <button type="button" onClick={handleClick} className="btn">8</button>
          <button type="button" onClick={handleClick} className="btn">9</button>
          <button type="button" onClick={handleClick} className="btn hover-btn">x</button>
          <button type="button" onClick={handleClick} className="btn">4</button>
          <button type="button" onClick={handleClick} className="btn">5</button>
          <button type="button" onClick={handleClick} className="btn">6</button>
          <button type="button" onClick={handleClick} className="btn hover-btn">-</button>
          <button type="button" onClick={handleClick} className="btn">1</button>
          <button type="button" onClick={handleClick} className="btn">2</button>
          <button type="button" onClick={handleClick} className="btn">3</button>
          <button type="button" onClick={handleClick} className="btn hover-btn">+</button>
          <button type="button" onClick={handleClick} className="btn screen-num">0</button>
          <button type="button" onClick={handleClick} className="btn">.</button>
          <button type="button" onClick={handleClick} className="btn hover-btn">=</button>
        </div>
      </>
    );
  };

export default Calculator;
