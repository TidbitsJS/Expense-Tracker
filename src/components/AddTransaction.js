/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react'
import { GlobalContext } from 'context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

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


    return (
        <div>
            <input type="checkbox" id="click" style={{display:'none'}}/>
            <label className="button" htmlFor="click">
                <h3 className="shows modalh3">
                   New Transaction
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
               </h3>
            </label>
        <div className="modal">

            <div className="content">
                 <>
                  <label htmlFor="click" className="button">
                      <a className="button-theme">
                          Close 
                          <i style={{marginLeft:'0.6rem', color:'red'}} 
                             className="fa fa-times"></i>
                      </a>
                  </label>
                  <form onSubmit={onSubmit}>
                     <div className="form-control">
                       <label htmlFor="text">Text</label>
                          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text" />
                     </div>
                     <div className="form-control">
                       <label htmlFor="amount">
                          Amount (negative - expense, positive - income)
                       </label>
                       <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount"></input>
                     </div>
                     <button className="btn">Add Transaction</button>
                   </form>
                 </>
            </div>

        </div>
        </div>
    )
}

export default AddTransaction
