import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown"
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp"
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { useSelector } from "react-redux"
import Configuration from "../../core/Configuration"

import Transaction from "../../core/models/Transaction"
import { StoreState } from "../../redux/Store"
import { formatCurrency } from "../../utils/CurrencyUtils"
import { calculateBalanceAt } from "../../utils/TransactionUtils"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

interface TransactionListItemProps {
  transaction: Transaction
}

const TransactionListItem: React.FC<TransactionListItemProps> = ({
  transaction,
}) => {
  const { incoming, myWalletId, date } = useSelector((state: StoreState) => ({
    date: new Date(state.appStore.date),
    incoming: state.transactionStore.myWallet.id === transaction.to,
    myWalletId: state.transactionStore.myWallet.id,
  }))

  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: incoming
              ? Configuration.style.success
              : Configuration.style.alert,
          }}
        >
          {incoming ? <ArrowBackIcon /> : <ArrowForwardIcon />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${formatCurrency(
          calculateBalanceAt(transaction, myWalletId, date),
          true
        )} (${transaction.perSec})`}
        secondary={incoming ? transaction.from : transaction.to}
      />
    </ListItem>
  )
}

export default TransactionListItem
