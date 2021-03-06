import { Card, CardContent, CardHeader, List } from "@mui/material"
import Head from "next/head"
import { useSelector } from "react-redux"

import BalanceChart from "../src/components/BalanceChart"
import DataCard from "../src/components/DataCard"
import { ContentWrapper } from "../src/components/layout/Content"
import { FlexCol } from "../src/components/layout/Flexbox"
import Grid from "../src/components/layout/Grid"
import Layout from "../src/components/layout/Layout"
import TransactionListItem from "../src/components/list/TransactionListItem"
import ProgressWithLabel from "../src/components/ProgressWithLabel"
import Timeline from "../src/components/timeline/Timeline"
import {
  getBalance,
  getNegativeFlow,
  getPositiveFlow,
  transactionsByStart,
} from "../src/redux/modules/transaction/TransactionSelectors"
import { StoreState } from "../src/redux/Store"
import { formatCurrency } from "../src/utils/CurrencyUtils"

import type { NextPage } from "next"

const Home: NextPage = () => {
  const { transactions, balance, positiveFlow, negativeFlow } = useSelector(
    (state: StoreState) => ({
      date: new Date(state.appStore.date),
      transactions: transactionsByStart(state),
      myWalletId: state.transactionStore.myWallet.id,
      balance: getBalance(state),
      positiveFlow: getPositiveFlow(state),
      negativeFlow: getNegativeFlow(state),
    })
  )

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Timeline />

      <ContentWrapper>
        <FlexCol rowGap="32px">
          <Grid columns="repeat(4, 1fr)" colGap="32px">
            <DataCard label="Balance" value={formatCurrency(balance)} />
            <DataCard
              label="Current flow (per sec)"
              value={formatCurrency(positiveFlow - negativeFlow)}
            />
            <DataCard
              label="Positive flow (per sec)"
              value={formatCurrency(positiveFlow)}
              icon={
                <ProgressWithLabel
                  color={"success"}
                  value={positiveFlow}
                  max={positiveFlow + negativeFlow}
                />
              }
            />
            <DataCard
              label="Negative flow (per sec)"
              value={formatCurrency(negativeFlow)}
              icon={
                <ProgressWithLabel
                  color={"warning"}
                  value={negativeFlow}
                  max={positiveFlow + negativeFlow}
                />
              }
            />
          </Grid>

          <Grid columns="1fr 1fr" colGap="32px">
            <Card>
              <CardHeader title="Balance estimation" />
              <CardContent>
                <BalanceChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader
                title="Transactions"
                subheader="Incoming and outgoing transactions"
              />
              <List>
                {transactions.map(transaction => (
                  <TransactionListItem
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
              </List>
            </Card>
          </Grid>
        </FlexCol>
      </ContentWrapper>
    </Layout>
  )
}

export default Home
