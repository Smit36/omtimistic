import React, { Component } from 'react';

export class Software extends Component {
  render() {
    return (
      <section className='site-section' id='section-testimonial'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-10 col-md-8 text-center'>
              <h2 className='heading text-uppercase text-white'>Creating Software</h2>

              <div className='row justify-content-center'>
                <div className='col-md-12'>
                  <div className='owl-carousel slide-one-item home-slider'>
                    <div className='testimony text-center px-md-4'>
                      <figure className='mx-auto d-inline-block'>
                        <img
                          src='images/person_2.jpg'
                          alt='Image'
                          className='mx-auto img-fluid w-25 rounded-circle'
                        />
                      </figure>
                      <p className='text-white'>
                        <strong>Jean Smith</strong>
                      </p>
                      <blockquote>
                        <p>
                          &ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                          tenetur quis facilis quam optio voluptate totam placeat, doloremque. Sit
                          repellat ipsum dolor fugit similique itaque maxime saepe ipsam. Velit,
                          harum!&rdquo;
                        </p>
                      </blockquote>
                    </div>

                    <div className='testimony text-center px-md-4'>
                      <figure className='mx-auto d-inline-block'>
                        <img
                          src='images/person_3.jpg'
                          alt='Image'
                          className='mx-auto img-fluid w-25 rounded-circle'
                        />
                      </figure>
                      <p className='text-white'>
                        <strong>Jean Smith</strong>
                      </p>
                      <blockquote>
                        <p>
                          &ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                          tenetur quis facilis quam optio voluptate totam placeat, doloremque. Sit
                          repellat ipsum dolor fugit similique itaque maxime saepe ipsam. Velit,
                          harum!&rdquo;
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Software;
