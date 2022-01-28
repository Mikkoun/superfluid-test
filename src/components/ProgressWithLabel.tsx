import { CircularProgress, Typography } from "@mui/material"
import styled from "styled-components"

const ProgressWrapper = styled.div`
  display: inline-block;
  position: relative;

  > .MuiTypography-root {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

interface ProgressWithLabelProps {
  value: number
  max: number
  color?: "success" | "warning"
}

const ProgressWithLabel: React.FC<ProgressWithLabelProps> = ({
  color,
  value,
  max,
}) => {
  const percentage = Math.round((value / max) * 100)

  return (
    <ProgressWrapper>
      <CircularProgress
        variant="determinate"
        value={percentage}
        color={color}
      />
      <Typography variant="caption" component="div" color="text.secondary">
        {`${percentage}%`}
      </Typography>
    </ProgressWrapper>
  )
}

export default ProgressWithLabel
