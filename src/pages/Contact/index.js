import Navbar from "../../components/Navbar";
import {useState} from 'react'
import axios from "axios"
import '../Contact/style.css'


const Contact = () =>{
    const [data, setdata] = useState({})
    const submitFormData = (e) => {
        e.preventDefault()       
        axios.post('https://webhook.site/0e88e581-83ce-4ada-b379-55b7d4fbc8b3', data)
        .then(res => {
            alert(res.status)
        }).catch (()=> alert('Ops, algo deu errado!'))
    }

    return(
        <div >
            <Navbar />
            <div id="contato">
            <h1>Contato</h1>
            <form onSubmit={submitFormData}>
                <input type='text' placeholder="Nome" onChange={e=> setdata({...data, nome: e.target.value})}/>
                <input type='text' placeholder="Email" onChange={e=> setdata({...data, email: e.target.value})}/>
                <input type='text' placeholder="Telefone" onChange={e=> setdata({...data, telefone: e.target.value})}/>
                <input type='submit' value="Cadastrar"/>
            </form>
            </div>

        </div>
        

    )
}

export default Contact;