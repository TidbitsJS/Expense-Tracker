import React, { useState, useContext } from 'react'
import { GlobalContext } from 'context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const [shows, setShows] = useState(false)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000 ),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
    }

    const showTransaction = () => {
        setShows(!shows)
    }

    return (
        <div>
            <h3 onClick={showTransaction}
                className="shows">
                New Transaction
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </h3>

            {shows ? (
              <form onSubmit={onSubmit}>
                 <div className="form-control">
                   <label htmlFor="text">Text</label>
                      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text" />
                 </div>
                 <div className="form-control">
                   <label htmlFor="amount">
                      Amount 
                   </label>
                   <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount"></input>
                 </div>
                 <button className="btn">Add Transaction</button>
               </form>
            ) : null}

        </div>
    )
}

export default AddTransaction
