import './portfolio.css'
import IMG1 from '../../assets/BookStore-buy-books-online.png'
import IMG2 from '../../assets/Goal-Setter.png'
import IMG3 from '../../assets/Memories_app_capture.png'
import IMG4 from '../../assets/Dashboard.png'
import IMG5 from '../../assets/Bloobloom_screenshot1.png'
import IMG6 from '../../assets/Webpack-App.png'


const Portfolio = () => {
  const data =[
    {
      id:1,
      image:IMG1,
      title:'BookStore',
      github:"https://github.com/YAHYAOUI-Nabil/bookStore",
      demo:"https://bookstorenabil.herokuapp.com/"
    },
    {
      id:2,
      image:IMG2,
      title:'Goal Setter',
      github:"https://github.com/YAHYAOUI-Nabil/Set-Goals-App---MERN-STACK",
      demo:"https://goalsetternabil.herokuapp.com/"
    },
    {
      id:3,
      image:IMG3,
      title:'Memories',
      github:"https://github.com/YAHYAOUI-Nabil/Memories",
      demo:"https://memoriesappnabil.herokuapp.com/"
    },
    {
      id:4,
      image:IMG4,
      title:'Dashboard',
      github:"https://github.com/YAHYAOUI-Nabil/dashboard",
      demo:"https://sage-bubblegum-7fa287.netlify.app/"
    },
    {
      id:5,
      image:IMG5,
      title:'Bloobloom',
      github:"https://github.com/YAHYAOUI-Nabil/bloobloom-test",
      demo:"https://dribbble.com/shots/18408307-Online-courses-dashboard"
    },
    {
      id:6,
      image:IMG6,
      title:'Webpack',
      github:"https://github.com/YAHYAOUI-Nabil/webpack",
      demo:"https://webpack.js.org/"
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