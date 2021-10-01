import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
const INITIAL_EXPENSES = [{id: Math.random().toString(), title: 'Car Insurance', amount: '245.65',date: new Date(2021, 2, 28)},
                    {id: Math.random().toString(), title: 'Car Insurance', amount: '245.65',date: new Date(2022, 7, 28)},
                    {id: Math.random().toString(), title: 'Car Insurance', amount: '245.65',date: new Date(2019, 9, 28)}];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const addExpenseHandler = (expense) => {
      setExpenses((prevState) => {return [expense, ...prevState]});
  }
  return (
    <div>
       <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
