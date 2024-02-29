import React, { Component } from 'react';
import img1 from "../../src/images/img1.jpg";
import img2 from "../../src/images/img2.jpg";
import img3 from "../../src/images/img3.jpg";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      autoPlayInterval: null,
    };
  }

  nextSlide = () => {
    const { currentSlide } = this.state;
    const totalSlides = 3; // Number of slides in the carousel
    const nextSlide = (currentSlide + 1) % totalSlides;
    this.setState({ currentSlide: nextSlide });
  };

  prevSlide = () => {
    const { currentSlide } = this.state;
    const totalSlides = 3; // Number of slides in the carousel
    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    this.setState({ currentSlide: prevSlide });
  };

  startAutoPlay = () => {
    const autoPlayInterval = setInterval(this.nextSlide, 2000); // Change slide every 2 seconds
    this.setState({ autoPlayInterval });
  };

  stopAutoPlay = () => {
    const { autoPlayInterval } = this.state;
    clearInterval(autoPlayInterval);
    this.setState({ autoPlayInterval: null });
  };

  render() {
    const { currentSlide } = this.state;

    return (
      <>
        <div id="carouselExample" className="carousel slide text-center w-25 mx-auto">
          <div className="carousel-inner">
            <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''}`}>
              <img src={img1} className="d-block w-100" alt="Avatar"/>
            </div>
            <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`}>
              <img src={img2} className="d-block w-100" alt="Profile"/>
            </div>
            <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''}`}>
              <img src={img3} className="d-block w-100" alt="Cat"/>
            </div>
          </div>
          <button className="btn btn-primary me-2 mt-3" type="button" onClick={this.prevSlide}>
            Previous
          </button>
          <button className="btn btn-primary me-2 mt-3" type="button" onClick={this.nextSlide}>
          next
          </button>
          <button className="btn btn-primary me-2 mt-3" onClick={this.startAutoPlay}>Auto</button>
          <button className="btn btn btn-primary me-2 mt-3" onClick={this.stopAutoPlay}>Stop</button>
        </div>
      </>
    );
  }
}
