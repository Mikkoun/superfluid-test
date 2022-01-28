import { Typography } from "@mui/material"
import { format } from "date-fns"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAppDate } from "../redux/modules/app/AppStore"
import { StoreState } from "../redux/Store"

const DATE_CHANGE_INTERVAL = 200

const AppTime = () => {
  const dispatch = useDispatch()

  const { appDate, dateControlled } = useSelector((state: StoreState) => ({
    appDate: state.appStore.date,
    dateControlled: state.appStore.dateControlled,
  }))

  useEffect(() => {
    let countdownInterval: number | undefined

    const countdownIntervalCB = () => {
      dispatch(setAppDate(new Date().toISOString()))
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        window.clearInterval(countdownInterval)
      } else {
        countdownInterval = window.setInterval(
          countdownIntervalCB,
          DATE_CHANGE_INTERVAL
        )
      }
    }

    if (!dateControlled) {
      countdownInterval = window.setInterval(
        countdownIntervalCB,
        DATE_CHANGE_INTERVAL
      )
      document.addEventListener("visibilitychange", onVisibilityChange)
    } else if (countdownInterval) {
      window.clearInterval(countdownInterval)
    }

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange)
      if (countdownInterval) window.clearInterval(countdownInterval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateControlled])

  return (
    <Typography variant="subtitle1">
      {format(new Date(appDate), "d MMM yyyy HH:mm:ss")}
    </Typography>
  )
}

export default AppTime
