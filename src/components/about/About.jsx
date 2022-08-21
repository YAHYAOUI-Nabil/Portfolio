import './about.css'
import ME from '../../assets/about_me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="AboutImage"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>6+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>4 clients</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <p>
          I'm a web developer who's passionate about finding quick solutions to problems. 
          I work well in team settings, and I have a history of being able to troubleshoot 
          programming challenges easily in collaborative work. Using programs like HTML, CSS, 
          Javascript and Node.js I have build projects that app services and desktop sites still use today. 
          I meet continuous high standards for web design and development, and hope to continue doing so 
          in a full stack developer position.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About