import React,{useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";



const NewExpense = (props) => {

    const [showAdd, setShowAdd] = useState(false);

    const saveExpenseDataHandler = (enterExpenseData) => {
        const exprensedata = {
            ...enterExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(exprensedata);
        
    }

    const showFormhandler = (event) => {
        setShowAdd(true);
    }

    const hideformhandler = (evemnt) => {
        setShowAdd(false);
    }

    console.log(showAdd);

    if(!showAdd){
        return (<div className="new-expense">
        <button onClick={showFormhandler}>Add New Expense</button>
    </div>
    )
    }else{
        return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} hideformhandler = {hideformhandler}  />
    </div>
    )
    }

    
}

export default NewExpense;