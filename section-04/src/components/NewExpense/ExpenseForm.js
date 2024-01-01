import React, { useEffect, useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  // const [input, setInput] = useState({ title: '', amount: '', date: '' });
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    // setInput({...input, title: e.target.value})
    // setInput((prev) => {
    //   return { ...prev, title: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    // setInput({...input, amount: e.target.value})
    // setInput((prev) => {
    //   return { ...prev, amount: e.target.value };
    // });
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    // setInput({...input, date: e.target.value})
    // setInput((prev) => {
    //   return { ...prev, date: e.target.value };
    // });
  };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
      setTitle(value);
    } else if (identifier === 'amount') {
      setAmount(value);
    } else {
      setDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title,
      amount,
      date: new Date(date),
    };

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={title}
            onChange={(event) => inputChangeHandler('title', event.target.value)}
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={(event) => inputChangeHandler('amount', event.target.value)}
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2023-01-01'
            max='2024-12-31'
            value={date}
            onChange={(event) => inputChangeHandler('date', event.target.value)}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
