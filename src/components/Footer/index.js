import style from '../Footer/style.modules.css'

const Footer = ({footerText}) => {
  return(
    <>
      <footer className={style.footerbg}>
        <p>{footerText}</p>
      </footer>
    </>
  )
}

export default Footer