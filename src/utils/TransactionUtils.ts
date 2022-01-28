import Transaction from "../core/models/Transaction"

export function calculateBalancesAt(
  transactions: Array<Transaction>,
  myWalletId: string,
  date: Date
) {
  return transactions.reduce(
    (balance, transaction) =>
      balance + calculateBalanceAt(transaction, myWalletId, date),
    0
  )
}

export function calculateBalanceAt(
  transaction: Transaction,
  myWalletId: string,
  date: Date
) {
  const transactionSeconds = getTransactionSecondsPassed(transaction, date)

  return (
    (Math.max(transactionSeconds, 0) / 1000) *
    transaction.perSec *
    (transaction.from === myWalletId ? -1 : 1)
  )
}

function getTransactionSecondsPassed(transaction: Transaction, date: Date) {
  const hasStarted = hasTransactionStarted(transaction, date)

  const { startDate, endDate } = transaction

  if (hasStarted) {
    const hasEnded = hasTransactionEnded(transaction, date)

    if (endDate && hasEnded) {
      return new Date(endDate).getTime() - new Date(startDate).getTime()
    } else {
      return date.getTime() - new Date(transaction.startDate).getTime()
    }
  }
  return 0
}

export function calculateFlowsAt(transactions: Array<Transaction>, date: Date) {
  return transactions.reduce(
    (balance, transaction) => balance + calculateFlowAt(transaction, date),
    0
  )
}

export function calculateFlowAt(transaction: Transaction, date: Date) {
  const hasStarted = hasTransactionStarted(transaction, date)
  const hasEnded = hasTransactionEnded(transaction, date)

  return hasStarted && !hasEnded ? transaction.perSec : 0
}

function hasTransactionStarted(transaction: Transaction, date: Date) {
  return date.toISOString().localeCompare(transaction.startDate) > 0
}

function hasTransactionEnded(transaction: Transaction, date: Date) {
  return (
    transaction.endDate &&
    date.toISOString().localeCompare(transaction.endDate) > 0
  )
}
