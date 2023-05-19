import globalClassNames from '..../style.d'
declare const classNames: typeof globalClassNames & {
  readonly ticket: 'ticket'
  readonly header: 'header'
  readonly header__price: 'header__price'
  readonly info: 'info'
}
export = classNames
