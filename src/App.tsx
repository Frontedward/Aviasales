import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import styles from './App.module.scss'
import logo from './assets/images/Logo.svg'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' />
      </div>
      <div className={styles.content}>
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App
