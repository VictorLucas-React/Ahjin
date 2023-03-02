import { Link } from "react-router-dom";
import '../Navbar/style.css'

const Navbar = () => {
    return(
        <div id="nav">
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
        </div>
        
    )
}

export default Navbar;