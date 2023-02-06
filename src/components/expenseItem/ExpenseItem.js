import style from './expenseItem.module.css'

import ExpenseDate from '../expenseDate/ExpenseDate'

const ExpenseItem = (props) => {
    
    const expenseItem = props.items.filter(item => 
            { return props.searchYear === '' 
                ? item
                : item.date.toLocaleString('en-US', {year: 'numeric'}) === props.searchYear
            }).map( (item) => 
                <div className={style.expense_item__container} key={item.id}>
                    <ExpenseDate    date={item.date}/>
                    <div className={style.expense_item__info}>
                        <h2 className={style.expense_item__title}>{item.title}</h2>
                        <div className={style.expense_amount__container}>
                            <span>$</span>
                            <p className={style.expense_item__amount}>{item.amount}</p>
                        </div>
                    </div>
                </div>
    ) 

    return (
        <div>
            {expenseItem}
        </div>
    )
}

export default ExpenseItem