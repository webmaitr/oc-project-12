import iconBike from './../assets/iconBike.svg'
import iconPush from './../assets/iconPush.svg'
import iconSwim from './../assets/iconSwim.svg'
import iconYoga from './../assets/iconYoga.svg'
import './../styles/sideMenu.css'

function SideMenu () {

  return (
    <aside className="vertical-navigation">
      
      <nav className="sidenav">
        <img className="navIcon" src={iconYoga} alt="Yoga" />
        <img className="navIcon" src={iconSwim} alt="Swim" />
        <img className="navIcon" src={iconBike} alt="Bike" />
        <img className="navIcon" src={iconPush} alt="Push" />
      </nav>
      <p className="copyright">Copyright, SportSee 2020</p>
    </aside>
  )
}

export default SideMenu