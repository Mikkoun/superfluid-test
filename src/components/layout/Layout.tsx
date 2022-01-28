import React, { ComponentType } from "react"
import Header from "../Header"
import styled from "styled-components"

const StyledLayout = styled.div`
  max-width: 100vw;
`

const Layout: ComponentType = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  )
}

export default Layout
