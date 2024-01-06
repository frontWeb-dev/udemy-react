import React, { useState } from 'react';

const Form = () => {
  const [input, setInput] = useState({ current: '', yearly: '', interest: '', duration: '' });

  const changeHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    console.log(id);
    if (id === 'current-savings') setInput({ ...input, current: value });
    else if (id === 'yearly-contribution') setInput({ ...input, yearly: value });
    else if (id === 'expected-return') setInput({ ...input, interest: value });
    else setInput({ ...input, duration: value });
  };

  const CancelHandler = () => {
    console.log('cancel');
    setInput({ current: '', yearly: '', interest: '', duration: '' });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <form className='form'>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            onChange={changeHandler}
            value={input.current}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            onChange={changeHandler}
            value={input.yearly}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>Expected Interest (%, per year)</label>
          <input
            type='number'
            id='expected-return'
            onChange={changeHandler}
            value={input.interest}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input type='number' id='duration' onChange={changeHandler} value={input.duration} />
        </p>
      </div>
      <p className='actions'>
        <button type='reset' onClick={CancelHandler} className='buttonAlt'>
          Reset
        </button>
        <button type='submit' onClick={submitHandler} className='button'>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
