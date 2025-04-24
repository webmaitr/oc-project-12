import Logo from './../assets/logo.svg'
import './../styles/navbar.css'

function Navbar () {
  return (
    <header className="topPage">

        <img className="logo" src={Logo} alt="Logo SportSee" />


      <ul className="topnav">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </header>
  )
}

export default Navbar