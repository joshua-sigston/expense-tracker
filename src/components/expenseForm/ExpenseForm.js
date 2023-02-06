import { useState } from 'react'
import style from './expenseForm.module.css'

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const titleChangeHandler = (e) => {
        setUserInput(prevState => {return {...prevState, title: e.target.value}})
    }

    const amountChangeHandler = (e) => {
        setUserInput(prevState => {return {...prevState, amount: +e.target.value}})
    }

    const dateChangeHandler = (e) => {
        setUserInput(prevState => {return {...prevState, date: new Date(e.target.value)}})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const newItem = userInput
        props.onSaveData(newItem)
        props.formAccess()
        setUserInput({title: '', amount: '', date: ''})
    }

    const closeForm = () => {
        props.formAccess()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={style.new_expense__controls}>
                <div>
                    <input  type='text' 
                            placeholder='Title' 
                            value={userInput.title} 
                            className={style.input}
                            onChange={titleChangeHandler}/>
                </div>
                <div>
                    <input  type='number' 
                            placeholder='Amount' 
                            min='0.01' step='0.01' 
                            className={style.input}
                            value={userInput.amount} 
                            onChange={amountChangeHandler}/>
                </div>
                <div>
                    <input  type='date' 
                            placeholder='Date' 
                            min='2022-01-01' max='2023-12-31'
                            className={style.input}
                            value={userInput.date} 
                            onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className={style.button_container}>
                <button onClick={closeForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm