import React,{useState} from 'react';

import './ExpenseItem.css'
import ExpenseItemDate from './ExpenseItemDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title);

const clickHandler = () => {
  setTitle("Update!!");
  console.log(title);
}
  return (
    <Card className='expense-item'>
      <ExpenseItemDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
