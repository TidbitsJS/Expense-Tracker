export default (state,action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            let newTransactions = JSON.parse(JSON.stringify(state.transactions))
            newTransactions.splice(action.payload, 1)
            window.localStorage.setItem('transactions', JSON.stringify(newTransactions))
            return {
                ...state,
                transactions: newTransactions
            }

        case 'ADD_TRANSACTION':
            let transactions = [action.payload, ...state.transactions]
            window.localStorage.setItem('transactions', JSON.stringify(transactions))
            return {
                ...state,
                transactions: transactions
            }
        default:
            return state
    }
}