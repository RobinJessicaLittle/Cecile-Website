import React from 'react'
import styled from 'styled-components';
import "../style/Carousel.css"
import {useState} from "react";
import Slider from "react-slick";
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.jpg";
import slider4 from "./images/slider4.jpg";
import slider5 from "./images/slider5.jpg";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";

const images = [slider1, slider2, slider3, slider4, slider5]

const Container = styled.div`
`
const Wrapper = styled.div`
    border: 1px solid  #ff0000;
    position: absolute;
    top: 250px;
    right: 40px;
    width: 1300px;
    height: 500px;

    display: flex;
`

const Carousel = () => {

    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    };

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }
    const [imageIndex, setImageIndex] = useState(0)

    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) =>setImageIndex(next)
    };

  return (
    <Container>
        <Wrapper>
            <div className= "Carousel">
            <Slider {...settings}>
                {images.map((img, idx) =>
                <div className= {idx == imageIndex ? "slide activeSlide" : "slide"}>
                    <img src={img} alt={img} />
                </div>)}
            </Slider>
            </div>
        </Wrapper>
    </Container>
  )
}

export default Carousel