import React,{useState} from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpenseFilter";
import "./Expense.css";
import Card from "../UI/Card";

const Expense = (props) => {
  const [selectYear,setSelectYear] = useState('2020');

  const filterHandler = yearfilter => {
    setSelectYear(yearfilter);
  }

  const mydata = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectYear;
  });

  console.log(mydata);

  return (
    <div>
      <ExpensesFilter selected={selectYear} onChangeFilter = {filterHandler}  />
      <Card className="expenses">
        <ExpenseList items={mydata} />
      </Card>
    </div>
  );
};

export default Expense;
