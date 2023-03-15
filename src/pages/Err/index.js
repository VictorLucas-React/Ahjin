import { Link } from 'react-router-dom'

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import styles from './style.module.css'

import { mainDefault } from '../../MOCK/main'

const Err = () => {
  return(
    <>
      <Navbar navItens={mainDefault} />
      <div className="container">
        <div className={styles.contain} >
          <h1 className={styles.title}>Oops, está página não existe</h1>
          <Link className={styles.link}>Retornar para home</Link>
        </div>
      </div>
      <Footer footerText="Todos os direitos reservados | Div Magalu"/>
    </>
  )
}

export default Err