import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className='row justify-content-center'>
        <div className='col-11 col-md-12 text-center py-5'>
          <p>
            Copyright &copy; <span style={{color:'#df0e62'}}>Omtimistic</span> {new Date().getFullYear()} All rights reserved | Designed By <span style={{color:'#df0e62'}}>Smit D Gor</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
