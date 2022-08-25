import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

export default function SliderHome(){
    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
    }
    return(
        <Rolling {...settings}>
           <Wrapers>
                <img src='/images/slider-badag.jpg'/>
           </Wrapers>
           <Wrapers>
           <img src='/images/slider-badging.jpg'/>
           </Wrapers>
           <Wrapers>
           <img src='/images/slider-scale.jpg'/>
           </Wrapers>
           <Wrapers>
           <img src='/images/slider-scales.jpg'/>
           </Wrapers>
        </Rolling>
    )
}

const Rolling = styled(Slider)`    
    padding-top: 25px;
    .slick-list{
        overflow: visible;
    }
    li.slick-active button::before{
        color: white;        
    }
    button{
        z-index: 1;
    }
`
const Wrapers=styled.div`
    cursor: pointer;
    img{
        height: 100%;
        width: 100%;
        border-radius: 10px;
        &:hover{
            border: 2px solid #f9f3f3ef;
        }
    }
`