import FlyInfo from '../flyinfo/FlyInfo'
import styles from './ticket.module.scss'

export interface TicketType {
  carrier: string
  price: number
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

function Ticket({ carrier, price, segments }: TicketType) {
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.header__price}>{price} ₽</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={`${carrier}`} />
      </div>
      <div className={styles.info}>
        {segments.map((segment, index) => {
          return (
            <FlyInfo
              key={index}
              origin={segment.origin}
              destination={segment.destination}
              date={segment.date}
              stops={segment.stops}
              duration={segment.duration}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Ticket
