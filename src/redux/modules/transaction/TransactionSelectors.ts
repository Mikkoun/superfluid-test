import {
  calculateBalancesAt,
  calculateFlowsAt,
} from "../../../utils/TransactionUtils"
import { StoreState } from "../../Store"

export function getBalance(state: StoreState) {
  return calculateBalancesAt(
    state.transactionStore.transactions,
    state.transactionStore.myWallet.id,
    new Date(state.appStore.date)
  )
}

export function getPositiveFlow(state: StoreState) {
  const { transactions, myWallet } = state.transactionStore

  return calculateFlowsAt(
    transactions.filter(t => t.to === myWallet.id),
    new Date(state.appStore.date)
  )
}

export function getNegativeFlow(state: StoreState) {
  const { transactions, myWallet } = state.transactionStore

  return calculateFlowsAt(
    transactions.filter(t => t.from === myWallet.id),
    new Date(state.appStore.date)
  )
}

export function transactionsByStart(state: StoreState) {
  return state.transactionStore.transactions
    .slice()
    .sort((a, b) => b.startDate.localeCompare(a.startDate))
}
