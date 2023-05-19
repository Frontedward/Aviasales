import globalClassNames from '..../style.d'
declare const classNames: typeof globalClassNames & {
  readonly text: 'text'
  readonly btn: 'btn'
}
export = classNames
