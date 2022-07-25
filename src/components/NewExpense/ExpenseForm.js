import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmout,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{  
        setEnteredTitle(event.target.value)
    };

    const amoutChangeHandler = (event) =>{  
        setEnteredAmount(event.target.value)
    };

    const dateChangeHandler = (event) =>{  
        setEnteredDate(event.target.value)
    };

    const submithandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmout,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    const cancelhandler = (event) => {
      props.hideformhandler(false);
    }
  

  return (
    <form className="frmAdd">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmout} onChange={amoutChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" value={enteredDate} onChange={dateChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <button type="reset" onClick={cancelhandler} >Cancel</button>
        </div>
        <div className="new-expense__control">
          <button type="submit" onClick={submithandler}>Add NEW</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
