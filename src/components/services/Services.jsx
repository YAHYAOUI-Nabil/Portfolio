import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {/*************** UI/UX Design *****************/}
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
          </ul>
        </article>
        {/*************** Web Development *****************/}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
          </ul>
        </article>
        {/*************** Content Creation *****************/}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>to set later</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services