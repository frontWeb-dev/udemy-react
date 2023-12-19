import './ExpenseItem.css';

const ExpenseItem = ({ expense }) => {
  return (
    <div className='expense-item'>
      <div>{expense.date.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <div className='expense-item__price'>${expense.amout}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
