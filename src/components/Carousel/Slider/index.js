import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  & .slick-slider {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & .slick-list {
    flex-grow: 1;
  }

  & .slick-prev,
  & .slick-next {
    position: relative;
    left: 0;
    width: auto;
    height: auto;
    top: auto;
    transform: none;
    font-size: 0px;
  }

  & .slick-prev:before,
  & .slick-next:before {
    margin: 0.5em;
    font-family: FontAwesome;
    color: var(--primary);
    opacity: .9;
    font-size: xx-large;
  }

  & .slick-prev:before {
    content: '\f053';

  }

  & .slick-next:before {
    content: '\f054';
  }

  & .slick-prev {
    margin-right: 1em;
  }

  & .slick-next {
    margin-left: 1em;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container className="p-0">
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 