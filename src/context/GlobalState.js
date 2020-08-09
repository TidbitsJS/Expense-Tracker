import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from 'context/AppReducer'

const initialState = {
     transactions: []
}

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

     useEffect(() => {
         let transactions = window.localStorage.getItem('transactions')
         if (transactions) transactions = JSON.parse(transactions)
         if (!transactions) transactions = []
     }, [])

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