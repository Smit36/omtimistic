import React, { Component } from 'react';

export class Content extends Component {
  state = {
    images: [
      { id: 1, url: 'images/srk.JPG' },
      { id: 2, url: 'images/amitabh.JPG' },
      { id: 3, url:  'images/cr7.JPG'},
      { id: 4, url: 'images/sachin.JPG' },
      { id: 5, url: 'images/saif.JPG' },
      { id: 6, url: 'images/joker.JPG' },
      { id: 7, url: 'images/shiv.JPG' },
      { id: 8, url: 'images/bachchan.JPG' },
      { id: 9, url: 'images/Irfaan.JPG' },
      { id: 10, url: 'images/Welcome.JPG' },
      { id: 11, url: 'images/Ayushmaan.JPG' },
      { id: 12, url: 'images/angelina.JPG' },
      { id: 13, url: 'images/angira.JPG' },
      { id: 14, url: 'images/disney.JPG' },
      { id: 15, url: 'images/ark.JPG' },
      { id: 16, url: 'images/cb.JPG' },
      { id: 17, url: 'images/don2.JPG' },
      { id: 18, url: 'images/fnf.JPG' },
      { id: 19, url: 'images/hawkeye.JPG' },
      { id: 20, url: 'images/herapheri.JPG' },
      { id: 21, url: 'images/hritik.JPG' },
      { id: 22, url: 'images/ironsrk.JPG' },
      { id: 23, url: 'images/modi.JPG' },
      { id: 24, url: 'images/kb.JPG' },
      { id: 25, url: 'images/maa.JPG' },
      { id: 26, url: 'images/panida.JPG' },
      { id: 27, url: 'images/rk.JPG' },
      { id: 28, url: 'images/ramospique.JPG' },
      { id: 29, url: 'images/sholay.JPG' },
      { id: 30, url: 'images/Shraddha.JPG' },
      { id: 31, url: 'images/smit.JPG' },
      { id: 32, url: 'images/thehangover.JPG' },
      { id: 33, url: 'images/witcher.JPG' },
      { id: 34, url: 'images/3idiots.JPG' },
      { id: 35, url: 'images/a1.JPG' },
      { id: 36, url: 'images/a2.JPG' },
      { id: 37, url: 'images/a3.JPG' },
      { id: 38, url: 'images/a4.JPG' },
      { id: 39, url: 'images/a5.JPG' },
      { id: 40, url: 'images/a6.JPG' },
      { id: 41, url: 'images/a7.JPG' },
      { id: 42, url: 'images/a8.JPG' },
      { id: 43, url: 'images/a9.JPG' },
      { id: 44, url: 'images/a10.JPG' },
      { id: 45, url: 'images/a11.JPG' },
      { id: 46, url: 'images/a12.JPG' },
      { id: 47, url: 'images/a13.JPG' },
      { id: 48, url: 'images/a14.JPG' },
      { id: 49, url: 'images/a15.JPG' },
      { id: 50, url: 'images/a16.JPG' },
      { id: 52, url: 'images/a18.JPG' },
      { id: 53, url: 'images/a19.JPG' },
      { id: 54, url: 'images/a20.JPG' },
      { id: 55, url: 'images/a21.JPG' },
      { id: 56, url: 'images/a22.JPG' },
      { id: 57, url: 'images/a23.JPG' },
      { id: 58, url: 'images/a24.JPG' },
      { id: 59, url: 'images/a25.JPG' },
      { id: 60, url: 'images/a26.JPG' },
      { id: 61, url: 'images/a27.JPG' },
      { id: 62, url: 'images/a28.JPG' },
      { id: 63, url: 'images/a29.JPG' },
     
      





      
      
    ],
  };
  render() {
    return (
      <section className='row align-items-stretch photos' id='section-photos'>
        <div className='col-12'>
          <div className='row align-items-stretch'>
            {this.state.images.map((image) => (
              <div  className='col-12 col-md-6 col-lg-4' data-aos='fade-up' data-aos-delay='100'>
                <a href={image.url} key={image.id} className='d-block photo-item' data-fancybox='gallery'>
                  <img src={image.url} key={image.id} alt='Image' className='img-fluid' />
                  <div className='photo-text-more'>
                    <span className='icon icon-search'></span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
