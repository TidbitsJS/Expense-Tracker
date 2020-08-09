import React, { useContext, useState } from 'react'
import { GlobalContext } from 'context/GlobalState'
import Transaction from 'components/Transaction'


const TransactionList = () => {
    const { transactions } = useContext(GlobalContext) 
    const [show, setshow] = useState(false)

    const showInfo = () => {
      setshow(!show)
      console.log(show);
    }

    return(
        <>
          <h3 
            onClick={showInfo}
            className="shows">
              History
              <i className="fa fa-history" aria-hidden="true"></i>
          </h3>
          { show ? (
            <ul id="list" className="list">
               {transactions.map((transaction,index) => (
                 <Transaction key={transaction.id} transaction={transaction} index={index}/>
               ))}
           </ul>
        ) : null}
        </>
    )
}

export default TransactionList