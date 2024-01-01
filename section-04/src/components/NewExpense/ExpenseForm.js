import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [input, setInput] = useState({ title: '', amount: '', date: '' });

  const changeHandler = (e) => {
    const type = e.target.type;

    if (type === 'text')
      setInput((prev) => {
        return { ...prev, title: e.target.value };
      });
    else if (type === 'number')
      setInput((prev) => {
        return { ...prev, amount: e.target.value };
      });
    else if (type === 'date')
      setInput((prev) => {
        return { ...prev, date: e.target.value };
      });
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={changeHandler} />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={changeHandler} />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2023-01-01' max='2024-12-31' onChange={changeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
