import React, { Component } from 'react';
import signature from '../images/sign.JPG';
export class Home extends Component {
  render() {
    return (
      <div
        className='site-section-hero bg-image'
        style={{ backgroundImage: `url(${signature})`}}
        data-stellar-background-ratio='0.5'
        id='section-home'
      >
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-7 text-center'>
            <h1 className='text-white heading text-uppercase' data-aos='fade-up'>
              Inking Ideas
            </h1>
            <p className='lead text-white mb-5' data-aos='fade-up' data-aos-delay='100'>
              Art and creativity have always gone hand in hand. Scott Adams rightly says,
              "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep".
              Creativity starts with an idea. With the tools we have today, we don't really need ink
              for inking ideas. The digital era has provided artists with immense opportunities to
              realize their thoughts, and mould their ideas into arbitrarily brilliant shapes and
              colours. Inking ideas is a huge collection of such thoughts and creative ideas that I
              have poured over screen, canvas or even paper. Here at inking ideas, I also accept
              orders for commissioned artworks. The creations will be posted only with your consent.
              Anything and everything is welcome, be it a picture with your family, you hiking the
              mountains, surfing the oceans, caressing your pets, memorable moments with your loved
              ones, or selfies with your favourite superstars. Inking ideas, together!              
            </p>
            <p data-aos='fade-up' data-aos-delay='100'>
                <a href='#section-contact' className='btn btn-primary btn-md smoothscroll'>
                  Contact Me
                </a>
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
