import React, { KeyboardEvent } from 'react'
import styles from './sidebar.module.scss'
import { CheckboxType, toggleCheckbox } from '../../store/checkboxesSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

function Sidebar() {
  const checkboxes = useAppSelector((state) => state.checkboxes.checkboxes)
  const dispatch = useAppDispatch()

  const handleLabelClick = (e: React.MouseEvent<HTMLLabelElement>, checkbox: CheckboxType) => {
    e.preventDefault()
    dispatch(toggleCheckbox(checkbox))
  }

  const handleLabelKeyDown = (e: KeyboardEvent<HTMLLabelElement>, checkbox: CheckboxType) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      dispatch(toggleCheckbox(checkbox))
    }
  }

  return (
    <aside className={styles.checkboxes}>
      <h3 className={styles['checkboxes__header']}>Количество пересадок</h3>
      {checkboxes.map((el: CheckboxType, index: number) => {
        const checkboxId = `checkbox-${el.id}`
        return (
          <label
            key={el.id}
            htmlFor={checkboxId}
            tabIndex={index + 1}
            className={styles['checkboxes__label']}
            onClick={(e) => handleLabelClick(e, el)}
            onKeyDown={(e) => handleLabelKeyDown(e, el)}
          >
            <input
              type='checkbox'
              id={checkboxId}
              className={styles.checkbox}
              checked={el.active}
              readOnly
              onFocus={(e) => e.target.blur()}
              tabIndex={-1}
            />
            {el.name}
            <span className={styles.checkmark}></span>
          </label>
        )
      })}
    </aside>
  )
}

export default Sidebar
