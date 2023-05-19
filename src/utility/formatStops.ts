export default function formatStops(stops: number): string {
  switch (stops) {
    case 0:
      return 'Без пересадок'
    case 1:
      return '1 пересадка'
    case 5:
      return '5 пересадок'
    default:
      return `${stops} пересадки`
  }
}
