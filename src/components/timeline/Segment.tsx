import { Typography } from "@mui/material"
import styled, { css } from "styled-components"

const StyledSegment = styled.div<{ large?: boolean; active?: boolean }>`
  width: 1px;
  height: ${({ large, active }) => (active ? "20px" : large ? "16px" : "8px")};

  position: relative;
  background: ${({ large, active }) =>
    active ? "#000" : large ? "#999" : "#ccc"};

  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
    `}
`

const SegmentLabel = styled(Typography)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`

interface SegmentProps {
  label: string
  large?: boolean
  active?: boolean
}

const Segment: React.FC<SegmentProps> = ({ label, large, active }) => {
  return (
    <StyledSegment large={large} active={active}>
      <SegmentLabel variant="caption" fontWeight={active ? 600 : 400}>
        {label}
      </SegmentLabel>
    </StyledSegment>
  )
}

export default Segment
