import React, { useState } from 'react';
import classes from './UserInput.module.css';

const initialData = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
};

const Form = (props) => {
  const [input, setInput] = useState(initialData);

  const changeHandler = (input, value) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  const resetHandler = () => {
    setInput(initialData);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onCalculate(input);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            onChange={(e) => changeHandler('current-savings', e.target.value)}
            value={input['current-savings']}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            onChange={(e) => changeHandler('yearly-contribution', e.target.value)}
            value={input['yearly-contribution']}
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor='expected-return'>Expected Interest (%, per year)</label>
          <input
            type='number'
            id='expected-return'
            onChange={(e) => changeHandler('expected-return', e.target.value)}
            value={input['expected-return']}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            onChange={(e) => changeHandler('duration', e.target.value)}
            value={input.duration}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type='reset' onClick={resetHandler} className={classes.buttonAlt}>
          Reset
        </button>
        <button type='submit' className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
