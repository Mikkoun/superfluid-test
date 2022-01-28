import { Card, CardContent, Typography } from "@mui/material"
import styled from "styled-components"

import { Spreader } from "./layout/Flexbox"

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: row;
  align-items: center;
`
interface DataCardProps {
  label: string
  value: any
  icon?: any
}

const DataCard: React.FC<DataCardProps> = ({ label, value, icon }) => {
  return (
    <Card>
      <StyledCardContent>
        <Spreader>
          <Typography variant="subtitle2">{label}</Typography>
          <Typography variant="h4">{value}</Typography>
        </Spreader>
        {icon}
      </StyledCardContent>
    </Card>
  )
}

export default DataCard
