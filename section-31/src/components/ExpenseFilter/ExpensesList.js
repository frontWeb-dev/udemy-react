import React from 'react';
import ExpenseItem from './../Expenses/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expense.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} props={expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
