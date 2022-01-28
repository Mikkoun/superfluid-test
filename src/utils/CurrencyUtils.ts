const MAX_DECIMALS = 6
const POW = Math.pow(10, MAX_DECIMALS)

const twoDecimalFormatter = new Intl.NumberFormat("de-ID", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 6,
})

const sixDecimalFormatter = new Intl.NumberFormat("de-ID", {
  minimumFractionDigits: 6,
  maximumFractionDigits: 6,
})

export function formatCurrency(value: number, sixDecimals = false) {
  return sixDecimals
    ? sixDecimalFormatter.format(value)
    : twoDecimalFormatter.format(value)
}
