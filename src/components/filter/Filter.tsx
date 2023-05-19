import React, { useRef, useCallback } from 'react'
import styles from './filter.module.scss'
import { useAppDispatch } from '../../store/hooks'
import { selectFilter } from '../../store/filterSlice'

type FilterType = {
  name: string
  id: string
  active: boolean
}

function Filter({ name, id, active }: FilterType) {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFilterChange = () => {
    dispatch(selectFilter(id))
  }

  const handleLabelKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLLabelElement>) => {
      if (event.key === 'Enter') {
        handleFilterChange()
      }
    },
    [handleFilterChange],
  )

  const handleLabelClick = useCallback(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <>
      <input
        ref={inputRef}
        type='radio'
        name={'filter'}
        checked={active}
        id={id}
        tabIndex={-1}
        readOnly
        onChange={handleFilterChange}
      />
      <label
        htmlFor={id}
        className={styles.filter__label}
        tabIndex={0}
        onClick={handleLabelClick}
        onKeyDown={handleLabelKeyDown}
      >
        {name}
      </label>
    </>
  )
}

export default Filter
