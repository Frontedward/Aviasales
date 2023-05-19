export function getHoursAndMinutes(time: number) {
  const hours = Math.trunc(time / 60)
  const minutes = time - hours * 60

  return `${hours.toString().padStart(2, '0')}ч ${minutes.toString().padStart(2, '0')}м`
}
