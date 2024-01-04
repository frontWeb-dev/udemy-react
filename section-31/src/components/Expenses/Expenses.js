import './Expenses.css';

import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';
import ExpensesList from '../ExpenseFilter/ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  let filterInfoText = '2019, 2021 & 2022';

  if (filterYear === '2019') filterInfoText = '2020, 2021 & 2022';
  else if (filterYear === '2021') filterInfoText = '2019, 2020 & 2022';
  else filterInfoText = '2019, 2020 & 2021';

  const optionChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <>
      <Card className='expenses'>
        <ExpenseFilter onChangeOption={optionChangeHandler} selectedYear={filterYear} />
        <ExpensesChart expense={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
