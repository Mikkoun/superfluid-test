import styled from "styled-components"

interface GridProps {
  columns?: string
  align?: string
  justify?: string
  gap?: string
  colGap?: string
  rowGap?: string
}

const Grid = styled.div<GridProps>`
  width: 100%;
  display: grid;
  ${({ columns }) => columns && `grid-template-columns: ${columns};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ gap }) => gap && `grid-gap: ${gap};`}
  ${({ colGap }) => colGap && `column-gap: ${colGap};`}
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap};`}
`

export default Grid
