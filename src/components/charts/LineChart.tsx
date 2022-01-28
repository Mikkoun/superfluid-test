import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface LineChartProps {
  options: ChartOptions<"line">
  data: ChartData<"line">
}

const LineChart: React.FC<LineChartProps> = ({ options, data }) => (
  <div>
    <Line options={options} data={data} />
  </div>
)

export default LineChart
