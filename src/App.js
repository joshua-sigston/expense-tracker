import style from './App.module.css';

import expenses from './data';
import budgetHolder from './budget'
import {React, useEffect, useState} from 'react'

import ExpenseItem from './components/expenseItem/ExpenseItem';
import NewExpense from './components/newExpense/NewExpense';
import ExpensesFilter from './components/expenseFilter/ExpenseFilter';
import ExpensesChart from './components/ExpensesChart';
import MonthlyBudget from './components/budget/MonthlyBudget';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('employees')) || expenses)
  const [budget, setBudget] = useState(JSON.parse(localStorage.getItem('budget')) || budgetHolder)
  const [year, setYear] = useState('')
  const [form, setForm] = useState(false)

  useEffect( () => { 
    localStorage.setItem('expenses', JSON.stringify(items))
  }, [items])

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget))
  }, [budget])

  const addExpense = (expenseData) => {
    setItems( prevState => { return [...prevState, expenseData]})   
  }

  const handleYearChange = (value) => {
    setYear(value)
  }  

  const displayForm = () => {
    setForm(prevState => !prevState)
  }

  const changeBudget = (num) => {
    setBudget(num)
  }
  
  const filteredExpenses = items.filter((expense) => {return expense.date === year})

  return (
    <div className={style.App}>
      <MonthlyBudget budget={budget} items={items} changeBudget={changeBudget}/>
      <NewExpense items={items} onSave={addExpense} formAccess={displayForm} form={form} />
      <ExpensesFilter currentYear={year} onYearChange={handleYearChange}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseItem items={items} searchYear={year}/> 
    </div>
  );
}

export default App;
