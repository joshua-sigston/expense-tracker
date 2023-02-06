import { useState } from 'react';
import style from './monthlyBudget.module.css'

const MonthlyBudget = (props) => {
    const {budget, items, changeBudget } = props
    const [userInput, setUserInput] = useState('')

    // logic used to filter out the current month of the current year to track budget
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const thisMonth = month[new Date().getMonth()]
    const thisYear = new Date().getFullYear()
    const filterYear = items.filter((item) => {return item.date.toLocaleString('en-US', {year: 'numeric'}) === thisYear.toString()})
    const filterMonth = filterYear.filter((item) => {return item.date.toLocaleString('en-US', {month: 'long'}) === thisMonth})
    const amountArr = filterMonth.map((month) => {return month.amount})
    const sum = (accumulator, value) => {return accumulator + value}
    const monthTotal = amountArr.reduce(sum, 0 )

    const amountLeft = Math.round(budget - monthTotal)
    const alertColor = {color:  amountLeft < 0 ? 'red' : '#00ADB5'}
    const changeBudgetHandler = (e) => {
        setUserInput(e.target.value)
    }

    const changeBudgetSubmit = (e) => {
        e.preventDefault()
        changeBudget(userInput)
        setUserInput('')
    }

    return(
        <div className={style.budget_container}>
            <div className={style.current_budget}>
                <h3>Your Budget is currently at: $<span>{budget}</span></h3>
                <form className={style.change_budget__container} onSubmit={changeBudgetSubmit}>
                    <button>Change Budget</button>
                    <input type='number' placeholder='Amount' value={userInput} onChange={changeBudgetHandler}/>
                </form>
            </div>
            <div>
                <p>Your currently have <span style={alertColor}>${amountLeft}</span> left in your budget</p>
            </div>
        </div>
    )
}

export default MonthlyBudget