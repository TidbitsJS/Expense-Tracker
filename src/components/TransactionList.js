import React, { useContext } from 'react'
import { GlobalContext } from 'context/GlobalState'
import Transaction from 'components/Transaction'

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext) 

    return(
        <>
          <h3>History</h3>
          <ul id="list" className="list">
              {transactions.map((transaction,index) => (
                <Transaction key={transaction.id} transaction={transaction} index={index}/>
              ))}
          </ul>
        </>
    )
}

export default TransactionList