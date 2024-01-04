import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);

  const saveDataHandler = (data) => {
    const expenseData = {
      id: Math.random().toString(),
      ...data,
    };

    props.onAddExpense(expenseData);
  };

  const clickHandler = () => {
    setAddExpense(true);
  };

  return (
    <div className='new-expense'>
      {addExpense ? (
        <ExpenseForm onSaveData={saveDataHandler} setAddExpense={setAddExpense} />
      ) : (
        <div>
          <button type='button' onClick={clickHandler}>
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
