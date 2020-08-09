import React from 'react'
import Header from 'components/Header'
import AddTransaction from 'components/AddTransaction'
import TransactionList from 'components/TransactionList'
import Balance from 'components/Balance'
import IncomeExpenses from 'components/IncomeExpenses'
import { GlobalProvider } from 'context/GlobalState'
import './App.css'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App
