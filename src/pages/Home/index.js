import Navbar from "../../components/Navbar"
import Loader from '../../components/Loader'
import { useState, useEffect } from 'react'
import axios from 'axios';

import { mainDefault } from '../../MOCK/main'

import Footer from "../../components/Footer";
import Card from "../../components/Card";

import styles from './style.module.css'

const Home = () => {
  const [ isLoad, setIsLoad ] = useState(false);
  const [ data, setData ] = useState([]);

  useEffect( () => {
    setIsLoad(true)
    axios.get('https://rickandmortyapi.com/api/character')
    .then(
      res => {
        setData(res.data.results)
      }
    )
    .catch( e => console.log("Erro", e))
    .finally(() => setIsLoad(false))
  }, [])

  return(
    <div>
      <Navbar navItens={mainDefault} />
      <div className="container">
        <div className={styles.content}>
          {data.map( (el, index) => (
            <Card 
              key={index} 
              name={el.name} 
              image={el.image} 
              gender={el.gender} 
              origin={el.origin} 
              episode={el.episode}
            />
          ))}
        </div>
        <Loader load={isLoad} />
      </div>
      <Footer footerText="Todos os direitos reservados | Div Magalu" />
    </div>
  )
}

export default Home