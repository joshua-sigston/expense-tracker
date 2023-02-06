import style from './openForm.module.css'

const OpenForm = (props) => {
    
    const openForm = () => {
        props.formAccess()
    }

    return (
        <div>
            <button onClick={openForm} className={style.button}>Add New Expense</button>
        </div>
    )
}

export default OpenForm