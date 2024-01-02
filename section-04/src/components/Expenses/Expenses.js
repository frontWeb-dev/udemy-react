import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const optionChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  return (
    <>
      <Card className='expenses'>
        <ExpenseFilter onChangeOption={optionChangeHandler} selectedYear={filterYear} />
        {props.items.map((item) => (
          <ExpenseItem props={item} />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
