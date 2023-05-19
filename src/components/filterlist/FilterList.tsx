import Filter from '../filter/Filter'
import styles from './filterlist.module.scss'
import { useAppSelector } from '../../store/hooks'
function FilterList() {
  const filters = useAppSelector((state) => state.filters)
  return (
    <div className={styles.filter}>
      {filters.map((filter) => {
        return <Filter name={filter.name} key={filter.id} id={filter.id} active={filter.active} />
      })}
    </div>
  )
}

export default FilterList
