import './ExpenseItem.css';

const ExpenseItem = () => {
  const expenseDate = new Date(2023, 11, 19);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
