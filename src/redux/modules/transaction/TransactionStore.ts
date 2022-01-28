import { createSlice, nanoid } from "@reduxjs/toolkit"
import Transaction from "../../../core/models/Transaction"
import Wallet from "../../../core/models/Wallet"

const MY_WALLET = {
  id: "0xE0537ea8F1d5A304635ce05D6F6b0D71fCfAB3a1",
}

const DEFAULT_TRANSACTIONS = [
  {
    id: nanoid(),
    perSec: 0.008,
    from: MY_WALLET.id,
    to: "0xE0537ea8F1d5A304635ce05D6F6b0D71fCfAB3a2",
    startDate: "2022-01-24T14:38:42.052Z",
    endDate: "2022-01-28T14:38:42.052Z",
  },
  {
    id: nanoid(),
    perSec: 0.006,
    from: MY_WALLET.id,
    to: "0xE0537ea8F1d5A304635ce05D6F6b0D71fCfAB3a2",
    startDate: "2022-01-30T14:38:42.052Z",
    endDate: "2022-02-01T14:38:42.052Z",
  },
  {
    id: nanoid(),
    perSec: 0.001,
    from: "0xE0537ea8F1d5A304635ce05D6F6b0D71fCfAB3a2",
    to: MY_WALLET.id,
    startDate: "2022-01-01T14:38:42.052Z",
  },
  {
    id: nanoid(),
    perSec: 0.0012,
    from: "0xE0537ea8F1d5A304635ce05D6F6b0D71fCfAB3a2",
    to: MY_WALLET.id,
    startDate: "2022-01-19T14:38:42.052Z",
  },
  {
    id: nanoid(),
    perSec: 0.0006,
    from: "0xE0537ea8F1d5A304635ce05D6F6b0D71fCfAB3a2",
    to: MY_WALLET.id,
    startDate: "2022-01-10T14:38:42.052Z",
    endDate: "2022-01-20T14:38:42.052Z",
  },
  {
    id: nanoid(),
    perSec: 0.0003,
    from: "0xE0537ea8F1d5A304635ce05D6F6b0D71fCfAB3a2",
    to: MY_WALLET.id,
    startDate: "2022-02-01T14:38:42.052Z",
    endDate: "2022-03-01T14:38:42.052Z",
  },
] as Array<Transaction>

export interface TransactionStore {
  myWallet: Wallet
  transactions: Array<Transaction>
}

const initialState = {
  myWallet: MY_WALLET,
  transactions: DEFAULT_TRANSACTIONS,
} as TransactionStore

const transactionStoreSlice = createSlice({
  name: "TransactionStore",
  initialState,
  reducers: {},
})

export default transactionStoreSlice.reducer
