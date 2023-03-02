import Navbar from '../../components/Navbar'
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import axios from 'axios'
import '../Home/style.css'


const Home = () =>{
    const[isLoard, setIsLoad] = useState(false);
    const [ data, setData] = useState([])

    const hadleStateComponet = () => {
        setIsLoad (!isLoard)
    }

    useEffect(() => {
        setIsLoad(true)
        axios.get('https://rickandmortyapi.com/api/character').then(
            res => {
                setData(res.data.results)
            }
        ).catch( e => console.log("Erro",e))
        .finally(() => setIsLoad(false))
    }, [])

    return(
       <div className='Home'>
            <Navbar />
            <h1>Home</h1>
            {data.map((el, index) => (
                <div id='ficha' key={index}>
                    <h2>{el.name}</h2>
                    <img src={el.image} alt={el.name}/>
                    <p>{el.status}</p>
                    <p>{el.species}</p>
                    <p>{el.type}</p>
                    <p>{el.gender}</p>
                    <p>{el.origin?.name}</p>
                    <p>{el.location?.name}</p>
                    <p>Episódios{el.episode.length}</p>


                </div>
            ))}        
            <Loader load={isLoard} />
            {isLoard ? (<p>Carregando...</p>): (<p></p>)}
            {hadleStateComponet}
       </div>
       

    )
}

export default Home;