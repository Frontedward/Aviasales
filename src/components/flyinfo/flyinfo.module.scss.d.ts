import globalClassNames from '..../style.d'
declare const classNames: typeof globalClassNames & {
  readonly header: 'header'
  readonly details: 'details'
  readonly info: 'info'
  readonly wrapper: 'wrapper'
}
export = classNames
