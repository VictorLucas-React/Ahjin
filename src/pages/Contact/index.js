import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Form from '../../components/Form'

import { mainDefault } from '../../MOCK/main'

const Contact = () => {

  return(
    <>
      <Navbar  navItens={mainDefault}/>
      <div className='container'>
        <Form />
      </div>
      <Footer footerText="Todos os direitos reservados | Div Magalu" />
    </>
  )
}

export default Contact