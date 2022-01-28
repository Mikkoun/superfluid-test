import { configureStore } from "@reduxjs/toolkit"
import appStoreReducer, { AppStore } from "./modules/app/AppStore"

import transactionStoreReducer, {
  TransactionStore,
} from "./modules/transaction/TransactionStore"

export interface StoreState {
  appStore: AppStore
  transactionStore: TransactionStore
}

export default configureStore({
  reducer: {
    appStore: appStoreReducer,
    transactionStore: transactionStoreReducer,
  },
})
