import './portfolio.css'
import IMG1 from '../../assets/portfolio1.webp'

const Portfolio = () => {
  const data =[
    {
      id:1,
      image:IMG1,
      title:'my demo',
      github:"https://github.com",
      demo:"https://dribbble.com/shots/18408307-Online-courses-dashboard"
    },
    {
      id:2,
      image:IMG1,
      title:'my demo',
      github:"https://github.com",
      demo:"https://dribbble.com/shots/18408307-Online-courses-dashboard"
    },
    {
      id:3,
      image:IMG1,
      title:'my demo',
      github:"https://github.com",
      demo:"https://dribbble.com/shots/18408307-Online-courses-dashboard"
    },
    {
      id:4,
      image:IMG1,
      title:'my demo',
      github:"https://github.com",
      demo:"https://dribbble.com/shots/18408307-Online-courses-dashboard"
    },
    {
      id:5,
      image:IMG1,
      title:'my demo',
      github:"https://github.com",
      demo:"https://dribbble.com/shots/18408307-Online-courses-dashboard"
    },
    {
      id:6,
      image:IMG1,
      title:'my demo',
      github:"https://github.com",
      demo:"https://dribbble.com/shots/18408307-Online-courses-dashboard"
    }
  ]
  
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio