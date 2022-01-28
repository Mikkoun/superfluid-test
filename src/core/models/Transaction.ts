export default interface Transaction {
  id: string
  perSec: number
  from: string
  to: string
  startDate: string
  endDate?: string
}
