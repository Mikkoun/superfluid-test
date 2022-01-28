import Transaction from "../core/models/Transaction"
import { getDatesBetween } from "./DateUtils"
import { calculateBalancesAt } from "./TransactionUtils"

export function getDailyBalances(
  transactions: Array<Transaction>,
  myWalletId: string,
  startDate: Date,
  endDate: Date
): Array<number> {
  return getDatesBetween(startDate, endDate).map(date =>
    calculateBalancesAt(transactions, myWalletId, date)
  )
}
