import logo2 from "../images/logo2.jpg"
import "./Header.css"
const Header = () => {

    return (
        <header className="header">
            <a  className = "header-link" href="/">
         <img className="logo-img"
         alt="This is the travel logo"
         src={logo2}
        
         />
         </a>
        <nav className ="nav">
            <ul className="nav-list">
                <li>
                    <a className="nav-list-link" href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a className="nav-list-link" href="/">
                        Products
                    </a>
                </li>
                <li>
                    <a className="nav-list-link" href="/">
                        Contact
                    </a>
                </li>
            </ul>
            </nav>
        </header>
    )

}
  export default Header;
  