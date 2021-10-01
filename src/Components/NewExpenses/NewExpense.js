import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowForm(false);
    }
    const cancelFormHandler = () => {
        setShowForm(false);
    }
    return (
        <div className="new-expense">
            {!showForm ? <button onClick={()=>{setShowForm(true);}}>Add New Expense</button> :
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={cancelFormHandler}></ExpenseForm>
            }
        </div>
    );
};
export default NewExpense;