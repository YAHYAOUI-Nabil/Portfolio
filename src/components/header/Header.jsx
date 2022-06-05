import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container container_header">
        <h5>Hello I'm</h5>
        <h1>Nabil Yahyaoui</h1>
        <h5 className="text-light">FULLSTACK DEVELOPER</h5>

        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
        <a href="#contact" className='scroll_down'>Scroll Down</a>
        
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header