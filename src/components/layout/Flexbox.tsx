import React from "react"
import styled from "styled-components"

const Positioning = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  between: "space-between",
}

type AlignAndJustifyType = "start" | "end" | "center" | "stretch" | "between"
type DirectionType = "row" | "column"

interface DirectionalFlexProps {
  align?: AlignAndJustifyType
  justify?: AlignAndJustifyType
  gap?: string
  columnGap?: string
  rowGap?: string
  [any: string]: any
}

interface StyledFlexProps extends DirectionalFlexProps {
  direction?: DirectionType
}

const Flex = styled.div<StyledFlexProps>(
  ({ direction, align, justify, gap, columnGap, rowGap }) => ({
    display: "flex",
    ...(direction ? { flexDirection: direction } : {}),
    ...(align ? { alignItems: Positioning[align] } : {}),
    ...(justify ? { justifyContent: Positioning[justify] } : {}),
    ...(gap ? { gap } : {}),
    ...(columnGap ? { columnGap } : {}),
    ...(rowGap ? { rowGap } : {}),
  })
)

export const FlexCol: React.FC<DirectionalFlexProps> = ({
  children,
  ...props
}) => (
  <Flex direction="column" {...props}>
    {children}
  </Flex>
)

export const FlexRow: React.FC<DirectionalFlexProps> = ({
  children,
  ...props
}) => (
  <Flex direction="row" {...props}>
    {children}
  </Flex>
)

export const Spreader = styled.div`
  flex: 1;
`
