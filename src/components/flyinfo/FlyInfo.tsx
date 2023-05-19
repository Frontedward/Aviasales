import styles from './flyinfo.module.scss'
import { getHoursAndMinutes } from '../../utility/getHoursAndMinutes'
import formatStops from '../../utility/formatStops'

export interface FlyInfoType {
  origin: string
  destination: string
  date: string
  stops: string[]
  duration: number
}

function FlyInfo({ origin, date, duration, stops, destination }: FlyInfoType) {
  const time = new Date(date)
  const destinationTime = new Date(time.getTime() + duration * 60 * 1000)

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.header}>{`${origin} - ${destination}`}</div>
        <div
          className={styles.details}
        >{`${time.getHours()}:${time.getMinutes()} - ${destinationTime.getHours()}:${destinationTime
          .getMinutes()
          .toString()
          .padStart(2, '0')}`}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.header}>{'В пути'}</div>
        <div className={styles.details}>{getHoursAndMinutes(duration)}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.header}>{formatStops(stops.length)}</div>
        <div className={styles.details}>{stops.join(', ') || ''}</div>
      </div>
    </div>
  )
}

export default FlyInfo
