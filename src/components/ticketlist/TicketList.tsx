import Ticket from '../ticket/ticket'
import styles from './ticketList.module.scss'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchAllTickets, increaseAmountToShow } from '../../store/ticketSlice'
import sortTickets from '../../utility/sortTickets'

function TicketList() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllTickets())
  }, [dispatch])

  const handleShowMore = () => {
    dispatch(increaseAmountToShow())
  }

  const { tickets, loadingTickets } = useAppSelector((state) => state.ticket)

  const checkboxes = useAppSelector((state) => state.checkboxes.checkboxes)

  const filters = useAppSelector((state) => state.filters)

  const howManyToShow = useAppSelector((state) => state.ticket.ticketsToShow)
  const activeFilter = filters.filter((el) => el.active)

  const sortedTickets = sortTickets(tickets, checkboxes, activeFilter[0].name, howManyToShow)

  return (
    <>
      {!sortedTickets.length && loadingTickets === 'succeeded' ? (
        <div className={styles.text}>Рейсов, подходящих под заданные фильтры, не найдено</div>
      ) : null}
      {sortedTickets.map((ticket, index) => {
        return (
          <Ticket
            key={index}
            carrier={ticket.carrier}
            price={ticket.price}
            segments={ticket.segments}
          />
        )
      })}
      <button className={styles.btn} onClick={handleShowMore}>
        Показать еще 5 билетов
      </button>
    </>
  )
}

export default TicketList
