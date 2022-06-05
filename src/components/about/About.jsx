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
            Nabil yahyaoui jhfsshf jsfh ksfhnsn jsfsjbn jslqdl jsfh 
            hksfh getz ppoiozr hjshgjfs hjsfjhsf gjfsjgsf gfs
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About