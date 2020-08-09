import React, { createContext, useReducer } from 'react'
import AppReducer from 'context/AppReducer'

const initialState = {
     transactions: []
}

let transactions = window.localStorage.getItem('transactions')
if (transactions) initialState.transactions = JSON.parse(transactions)

console.log(initialState)

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
     const [state, dispatch] = useReducer(AppReducer, initialState)
     
     function deleteTransaction(id) {
         dispatch({
             type: 'DELETE_TRANSACTION',
             payload: id
         })
     }

     function addTransaction(transaction) {
         dispatch({
             type: 'ADD_TRANSACTION',
             payload: transaction
         })
     }

     return(
         <GlobalContext.Provider value={{
             transactions: state.transactions,
             deleteTransaction,
             addTransaction
         }}>
             {children}
         </GlobalContext.Provider>
     )
}