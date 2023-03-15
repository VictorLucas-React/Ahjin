import axios from 'axios'

import { useState } from 'react'
import styles from './style.module.css'

const Form = () => {
  const [ data, setData ] = useState({})
  const submitFormData = (e) => {
    e.preventDefault()
    axios.post('https://webhook.site/cab6161f-7afb-4276-92c2-477efbc87819', data)
      .then( res => {
        alert(res.status)
      }).catch( () => alert('Ops, algo deu errado!'))
  }

  return(
    <div className={styles.card}>
      <h1 className={styles.title}>Contato</h1>
      <form onSubmit={submitFormData} className={styles.form}>
        <input 
          type='text'
          className={styles.inputs}
          placeholder='Nome'
          onChange={ e => setData({...data, nome: e.target.value})}
        />
        <input 
          type='text' 
          className={styles.inputs}
          placeholder='Email'
          onChange={ e => setData({...data, email: e.target.value})}
        />
        <input 
          type='text' 
          className={styles.inputs}
          placeholder='Telefone'
          onChange={ e => setData({...data, telefone: e.target.value})}
        />
        <input 
          type='submit' 
          className={styles.submit}
          value='Cadastrar'
        />
      </form>
    </div>
  )
}

export default Form