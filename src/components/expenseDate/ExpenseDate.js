import style from './expenseDate.module.css'

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.toLocaleString('en-US', {year: 'numeric'})

    return (
        <div className={style.expense_date__container}>
            <p className={style.date_type}>{month}</p>
            <p className={style.date_type}>{day}</p>
            <p className={style.date_type}>{year}</p>
        </div> 
    )
}

export default ExpenseDate