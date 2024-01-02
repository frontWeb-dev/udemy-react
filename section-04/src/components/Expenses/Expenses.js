import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  let filterInfoText = '2019, 2021 & 2022';

  if (filterYear === '2019') filterInfoText = '2020, 2021 & 2022';
  else if (filterYear === '2021') filterInfoText = '2019, 2020 & 2022';
  else filterInfoText = '2019, 2020 & 2021';

  const optionChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <>
      <Card className='expenses'>
        <ExpenseFilter onChangeOption={optionChangeHandler} selectedYear={filterYear} />
        <p>Data for years {filterInfoText} is hidden.</p>
        {props.items.map((item) => (
          <ExpenseItem props={item} />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
