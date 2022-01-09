import {useState} from 'react'
import Head from 'next/head';
const Form = () => {
    const [expense, setExpense] = useState({
        title:"",
        amount:"",
        date:""
    })
    const [data, setData] = useState([])
    const handleInput=(e)=>{
        setExpense({...expense,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(expense.amount&&expense.date&&expense.title){
            const newRecord={...expense,id: new Date().getTime().toString()}
            setData([...data,newRecord])
            setExpense({
                title:"",
                amount:"",
                date:""
            })
        }else{
            alert("please fill up all the inputs!!!")
        }
    }
    return (
        <>
          <Head>
            <title>Expense tracker</title>
          </Head>
          <div className='expenseForm'>
            <h1>Type your Expense</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="up">
                  <input type="text" name="title" value={expense.title}  onChange={handleInput} placeholder='Expense Item'/>
                  <input type="number" name="amount" value={expense.amount} onChange={handleInput} placeholder='Amount'/>
                </div>
                <div className="down">
                  <input type="date" name="date" value={expense.date} onChange={handleInput} />
                  <button type="submit">Add</button>
                </div>
            </form>
          </div>
            <div>
                {
                    data.map((e)=>{
                        return(
                            <div key={e.id} className='expenses'>
                              <div className="expense">
                                <div className="calender">
                                  <h2>{new Date(e.date).toLocaleString('en-US', {day: '2-digit'})}</h2>
                                  <h2>{new Date(e.date).toLocaleString('en-US', {month: 'long'})}</h2>
                                  <h2>{new Date(e.date).getFullYear()}</h2>
                                </div>
                                  <div className="details">
                                    <h2>{e.title} -</h2>
                                    <h2>{e.amount}$</h2>
                                  </div>
                              </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Form