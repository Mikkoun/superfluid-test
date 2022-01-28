import styled from "styled-components"

const StyledSlider = styled.input`
  margin: 0;
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  position: relative;
  z-index: 1;
  cursor: e-resize;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1px;
    height: 20px;
    background: ${({ theme }) => theme.primary};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 1;
    height: 20px;
    background: ${({ theme }) => theme.primary};
    cursor: pointer;
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;

    background: transparent;
    border-color: transparent;
    color: transparent;
  }
`

interface TimelineSliderProps {
  value: number
  max: number
  onChange: (newValue: number) => void
  onMouseUp: () => void
}

const TimelineSlider: React.FC<TimelineSliderProps> = ({
  onChange,
  ...props
}) => {
  const onSliderChange = (e: any) => onChange(Number(e.target.value))

  return (
    <StyledSlider type="range" min={0} onChange={onSliderChange} {...props} />
  )
}

export default TimelineSlider
