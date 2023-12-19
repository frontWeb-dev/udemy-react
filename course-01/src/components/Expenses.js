import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = ({ items }) => {
  return (
    <div className='expenses'>
      {items.map((item) => (
        <ExpenseItem props={item} />
      ))}
    </div>
  );
};

export default Expenses;
