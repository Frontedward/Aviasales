interface Ticket {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
  ]
}

interface Checkbox {
  name: string
  id: string
  active: boolean
}

export default function sortTickets(
  tickets: Ticket[],
  checkboxes: Checkbox[],
  currentFilter: string,
  howManyToShow: number,
): Ticket[] {
  const activeStops = checkboxes
    .map((checkbox, index) => {
      if (checkbox.active) {
        return index - 1
      }
      return null
    })
    .filter((stop) => stop !== null)

  const filteredTickets = tickets.filter((ticket) =>
    activeStops.some((stopCount) =>
      ticket.segments.every((segment) => segment.stops.length === stopCount),
    ),
  )

  return filteredTickets
    .sort((a, b) => {
      switch (currentFilter) {
        case 'Самый дешёвый':
          return a.price - b.price
        case 'Самый быстрый':
          return (
            a.segments.reduce((acc, segment) => acc + segment.duration, 0) -
            b.segments.reduce((acc, segment) => acc + segment.duration, 0)
          )
        default:
          return (
            (a.price - b.price) / 2 +
            (a.segments.reduce((acc, segment) => acc + segment.duration, 0) -
              b.segments.reduce((acc, segment) => acc + segment.duration, 0)) /
              2
          )
      }
    })
    .slice(0, howManyToShow)
}
