
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
export default function Swiperr(){
    let [image]=useState([
        {id:1,images:"./7e8be03b-4868-43a1-a63b-3803aa332e3b.jpg",title:"لا يكفي أن تعمل خيراً، بل يجب أن تُحسن عمل الخير"},
        {id:2,images:"./group.jpg",title:"امنح وقتك، وستحصد السعادة لمن حولك"},
        {id:3,images:"./f3c10a0f-2941-47df-936d-1cbe302379b9.jpg",title:"التطوع عمل الخير الذي لا يضيع أجره"},
        {id:4,images:"./childreen.jpg",title:"العمل التطوعي يزرع الحب ويجمع القلوب"},
        {id:5,images:"./group3.jpg",title:"امنح وقتك، وستحصد السعادة لمن حولك"},
    ])
    return(
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {
        image.map((e)=>{
            return(
                   <SwiperSlide>
                        <div className='image-container'>
                              <img loading='lazy' src={e.images}></img>

                              <div className='overlay'></div>

                              <div className='text-context'>
                                {/* <h3>{e.header}</h3>*/}
                                <h1>{e.title}</h1> 
                              
                              </div>
                              
                        </div>
                      </SwiperSlide>
            );
        })
       }
                      
        
      </Swiper>
    );
}