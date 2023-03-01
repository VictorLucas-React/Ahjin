import Navbar from "../../components/Navbar";
import {useState} from 'react'

const Contact = () =>{
    const [data, setdata] = useState({})
    const submitFormData = (e) => {
        e.preventDefault()
        console.log (data)
    }

    return(
        <div>
            <Navbar />
            <h1>Contato</h1>
            <form onSubmit={submitFormData}>
                <input type='text' placeholder="Nome" onChange={e=> setdata({...data, nome: e.target.value})}/>
                <input type='text' placeholder="Email" onChange={e=> setdata({...data, email: e.target.value})}/>
                <input type='text' placeholder="Telefone" onChange={e=> setdata({...data, telefone: e.target.value})}/>
                <input type='submit' value="Cadastrar"/>
            </form>

        </div>
        

    )
}

export default Contact;