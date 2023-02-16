import Navbar from '../../components/Navbar'
import { useState } from 'react';
import Loader from '../../components/Loader';

const Home = () =>{
    const[isLoard, setIsLoad] = useState(false);
    const hadleStateComponet = () => {
        setIsLoad (!isLoard)
    }

    return(
       <div className='Home'>
            <Navbar className='navegador' />
            <h1>Home</h1>        
            <Loader load={isLoard} />
            {isLoard ? (<p>Carregando...</p>): (<p></p>)}
                <button onClick={hadleStateComponet}>Mudar estado</button>
       </div>
       

    )
}

export default Home;