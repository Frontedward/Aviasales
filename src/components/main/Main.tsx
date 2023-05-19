import FilterList from '../filterlist/FilterList'
import TicketList from '../ticketlist/TicketList'
import styles from './main.module.scss'
import { useAppSelector } from '../../store/hooks'
import ProgressBarWithValueLabel from '../progressbar/ProgressBar'

function Main() {
  const { loadingTickets } = useAppSelector((state) => state.ticket)

  return (
    <main className={styles.main}>
      <FilterList />
      {loadingTickets !== 'succeeded' ? <ProgressBarWithValueLabel /> : null}
      <TicketList />
    </main>
  )
}

export default Main
