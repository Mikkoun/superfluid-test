import { createSlice } from "@reduxjs/toolkit"
import { add, sub } from "date-fns"
import TimeSpan from "../../../core/models/TimeSpan"

export interface AppStore {
  date: string
  timeSpanFilter: TimeSpan
  dateControlled: boolean
}

const currentDate = new Date()

const initialState = {
  date: currentDate.toISOString(),
  timeSpanFilter: {
    startDate: sub(currentDate, { days: 10 }).toISOString(),
    endDate: add(currentDate, { days: 10 }).toISOString(),
  },
  dateControlled: false,
} as AppStore

const appStoreSlice = createSlice({
  name: "AppStore",
  initialState,
  reducers: {
    setAppDate(store: AppStore, action: any) {
      store.date = action.payload
    },
    setTimeSpanFilter(store: AppStore, action: any) {
      store.timeSpanFilter = action.payload
    },
    setDateControlled(store: AppStore, action: any) {
      if (!action.payload) {
        const liveDate = new Date()

        store.date = liveDate.toISOString()
        store.timeSpanFilter = {
          startDate: sub(liveDate, { days: 10 }).toISOString(),
          endDate: add(liveDate, { days: 10 }).toISOString(),
        }
      }

      store.dateControlled = action.payload
    },
  },
})

export const { setAppDate, setTimeSpanFilter, setDateControlled } =
  appStoreSlice.actions

export default appStoreSlice.reducer
