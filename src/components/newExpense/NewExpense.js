import style from './newExpense.module.css'

import ExpenseForm from '../expenseForm/ExpenseForm'
import OpenForm from '../openForm/OpenForm'

const NewExpense = (props) => {

    const addExpenseHandler = (data) => {
        const expenseData = {...data, id: Math.random().toString()}
        props.onSave(expenseData)
    }
    
    const formAccess = () => {
        props.formAccess()
    }

    return (
        <div className={style.new_expense}>
            {
            props.form 
            ? <ExpenseForm items={props.items} onSaveData={addExpenseHandler} formAccess={formAccess}/> 
            : <OpenForm formAccess={formAccess}/>
            }
        </div>
    )
}

export default NewExpense