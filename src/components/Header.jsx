import logo from "../images/logo.png"
const Header = () => {

    return (
        <header className="header">
            <div >
         <img className="logo-img"
         alt="This is the travel logo"
         src={logo}
         width="150"
         height="150"
         />
         </div>
        <nav className ="nav">
            <ul className="nav-list">
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/">
                        Products
                    </a>
                </li>
                <li>
                    <a href="/">
                        Contact
                    </a>
                </li>
            </ul>
            </nav>
        </header>
    )

}
  export default Header;
  