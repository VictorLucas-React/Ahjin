import RMLoader from '../../assents/gif/sung.gif'

const Loader = ({load}) => {

  return(
    <div>
      { load && (<img src={RMLoader} alt="Carregando" />)}
    </div>
  )
}

export default Loader