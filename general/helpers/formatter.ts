export function currency(amount: number) {
  return `$${amount.toFixed(2)}`;
}

export function fullDate(date: Date) {
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
}
