import globalClassNames from './style.d'
declare const classNames: typeof globalClassNames & {
  readonly app: 'app'
  readonly logo: 'logo'
  readonly content: 'content'
}
export = classNames
