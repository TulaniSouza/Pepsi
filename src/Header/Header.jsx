import logo from "../assets/logo.png"
import s from "./Header.module.scss"


const Header = () =>{
    return(
        <header className={s.container}>
            <img className= {s.image}src={logo} alt="logo da Pepsi"/>
            <nav className={s.box}>
                <ul className={s.menu}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>What´s New</li>
                    <li>Newsletter</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;