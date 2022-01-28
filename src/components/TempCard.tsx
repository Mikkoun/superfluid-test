import styled, { css } from "styled-components"

interface CardProps {
  compact?: boolean
}

export const CardStyle = css<CardProps>`
  border-radius: 8px;
  padding: ${({ compact }) => (compact ? "16px" : "24px")};
  box-shadow: rgb(0 0 0 / 4%) 0px 24px 32px, rgb(0 0 0 / 4%) 0px 16px 24px,
    rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 0px 1px;
`

const Card = styled.div<CardProps>`
  ${CardStyle}
`

export default Card
