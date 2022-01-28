import { Button, Paper, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import Logo from "../assets/icons/logo.svg"
import { setDateControlled } from "../redux/modules/app/AppStore"
import { StoreState } from "../redux/Store"
import AppTime from "./AppTime"

const StyledHeader = styled(Paper)`
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 12px;
  z-index: 2;
  position: relative;
  border-radius: 0;
`

const Header = () => {
  const dispatch = useDispatch()

  const dateControlled = useSelector(
    (state: StoreState) => state.appStore.dateControlled
  )

  const clearControlledDate = () => {
    dispatch(setDateControlled(false))
  }

  return (
    <StyledHeader elevation={4}>
      <Logo />
      {dateControlled && (
        <Typography variant="subtitle1">Current date filter:</Typography>
      )}
      <AppTime />
      {dateControlled && (
        <Button variant="contained" size="small" onClick={clearControlledDate}>
          Switch to live
        </Button>
      )}
    </StyledHeader>
  )
}

export default Header
