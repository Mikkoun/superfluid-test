import { useSelector } from "react-redux"
import styled from "styled-components"

import Configuration from "../core/Configuration"
import { StoreState } from "../redux/Store"
import { getDailyBalances } from "../utils/ChartUtils"
import { getDayLabelsBetween } from "../utils/DateUtils"
import LineChart from "./charts/LineChart"

const ChartWrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 8px;
    left: calc(50% - 1px);
    width: 2px;
    height: calc(100% - 8px);
    background: black;
  }
`

const BalanceChart: React.FC = () => {
  const { startDate, endDate, transactions, myWalletId } = useSelector(
    (state: StoreState) => ({
      startDate: new Date(state.appStore.timeSpanFilter.startDate),
      endDate: new Date(state.appStore.timeSpanFilter.endDate),
      transactions: state.transactionStore.transactions,
      myWalletId: state.transactionStore.myWallet.id,
    })
  )

  const balanceChartData = {
    labels: getDayLabelsBetween(startDate, endDate),
    datasets: [
      {
        data: getDailyBalances(transactions, myWalletId, startDate, endDate),
        ...Configuration.chart.dataset,
      },
    ],
  }

  return (
    <ChartWrapper>
      <LineChart
        options={Configuration.chart.options}
        data={balanceChartData}
      />
    </ChartWrapper>
  )
}

export default BalanceChart
