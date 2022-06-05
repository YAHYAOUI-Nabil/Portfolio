import './testimonials.css'
import AVTR1 from '../../assets/about_me.jpg'

import  {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonials = () => {
  const data = [
    {
      avatar : AVTR1,
      name : 'Nabil Yahyaoui',
      review: 'thank you nabil yahyaoui i realy appreciate your job and i am looking for further cooperations with you.'
    },
    {
      avatar : AVTR1,
      name : 'mido Yahyaoui',
      review: 'thank you nabil yahyaoui i realy appreciate your job and i am looking for further cooperations with you.'
    },
    {
      avatar : AVTR1,
      name : 'yassine Yahyaoui',
      review: 'thank you nabil yahyaoui i realy appreciate your job and i am looking for further cooperations with you.'
    },
    {
      avatar : AVTR1,
      name : 'saif Yahyaoui',
      review: 'thank you nabil yahyaoui i realy appreciate your job and i am looking for further cooperations with you.'
    }
  ]
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials