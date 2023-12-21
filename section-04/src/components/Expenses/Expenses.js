import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = ({ items }) => {
  return (
    <Card className='expenses'>
      {items.map((item) => (
        <ExpenseItem props={item} />
      ))}
    </Card>
  );
};

export default Expenses;