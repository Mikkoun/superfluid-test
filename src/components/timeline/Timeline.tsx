import { add, format, isSameDay, sub } from "date-fns"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import {
  setAppDate,
  setDateControlled,
  setTimeSpanFilter,
} from "../../redux/modules/app/AppStore"
import { StoreState } from "../../redux/Store"
import { getDatesBetween } from "../../utils/DateUtils"
import Segment from "./Segment"
import TimelineSlider from "./TimelineSlider"

const TimelineWrapper = styled.div`
  position: relative;
  padding: 12px 24px 16px;
  margin-bottom: 32px;
  background: ${({ theme }) => theme.background};
`

const TimelineGrid = styled.div<{ items?: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  left: 24px;
  right: 24px;
  top: 12px;
  height: 20px;
  pointer-events: none;
`

const Timeline = () => {
  const dispatch = useDispatch()

  const { date, startDate, endDate } = useSelector(
    ({ appStore }: StoreState) => ({
      date: new Date(appStore.date),
      startDate: new Date(appStore.timeSpanFilter.startDate),
      endDate: new Date(appStore.timeSpanFilter.endDate),
    })
  )

  const timelineDates = getDatesBetween(startDate, endDate)

  const [activeDateIndex, setActiveDateIndex] = useState(
    Math.floor(timelineDates.length / 2)
  )

  const onSliderChange = (newIndex: number) => {
    setActiveDateIndex(newIndex)
  }

  const broadcastSliderChange = () => {
    const newActiveDate = timelineDates[activeDateIndex]
    dispatch(setDateControlled(true))
    dispatch(setAppDate(newActiveDate.toISOString()))

    dispatch(
      setTimeSpanFilter({
        startDate: sub(newActiveDate, { days: 10 }).toISOString(),
        endDate: add(newActiveDate, { days: 10 }).toISOString(),
      })
    )

    setActiveDateIndex(Math.floor(timelineDates.length / 2))
  }

  return (
    <TimelineWrapper>
      <TimelineGrid items={timelineDates.length}>
        {timelineDates.map((d, index) => (
          <Segment
            key={index}
            large={d.getDay() === 1}
            active={isSameDay(d, date)}
            label={format(d, "d")}
          />
        ))}
      </TimelineGrid>
      <TimelineSlider
        max={timelineDates.length - 1}
        value={activeDateIndex}
        onChange={onSliderChange}
        onMouseUp={broadcastSliderChange}
      />
    </TimelineWrapper>
  )
}

export default Timeline
