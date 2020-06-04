import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <section className='site-section darken-bg' id='section-bio'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-10 col-md-8'>
              <h2 className='heading text-uppercase text-white'>About Myself</h2>
              <figure className='mb-5' data-aos='fade-up'>
                <img src='images/person_3.jpg' alt='Image' className='img-fluid w-50 rounded' />
              </figure>
              <div data-aos='fade-up' data-aos-delay='100'>
                <h2 className='text-white'>Hi I'm Om</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aperiam a velit.
                  Harum eligendi quod reiciendis quos ullam libero est dolor,
                  <a href='#'>corporis dolores assumenda</a>, delectus, quidem voluptatibus dolorum
                  temporibus enim!
                </p>
                <p>
                  Neque facilis soluta, accusantium quaerat, adipisci porro animi, hic fugiat id
                  vero placeat dolorem accusamus sapiente odio consequatur debitis beatae eius quos
                  alias. In recusandae magnam quis ipsum, asperiores mollitia!
                </p>
                <h3 className='text-white mt-5'>Photographer for 10 years</h3>
                <p>
                  Tempore repudiandae <a href='#'>rerum numquam iste</a>, quibusdam omnis voluptates
                  quaerat veniam neque odit sit vel dolores. Optio eveniet ex laborum similique
                  inventore sapiente tenetur. Ipsam aliquam esse voluptate qui reiciendis. Harum.
                </p>
                <div className='d-block d-md-flex mt-5'>
                  <div className='mr-md-auto mr-2'>
                    <ul className='ul-check list-unstyled success'>
                      <li>Optio eveniet ex laborum</li>
                      <li>Inventore sapiente tenetur</li>
                      <li>Ipsam aliquam esse</li>
                    </ul>
                  </div>
                  <div className='mr-md-auto'>
                    <ul className='ul-check list-unstyled success'>
                      <li>Optio eveniet ex laborum</li>
                      <li>Inventore sapiente tenetur</li>
                      <li>Ipsam aliquam esse</li>
                    </ul>
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

export default About;
