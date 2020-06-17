import React, { Component } from 'react';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      subject: '',
      email: '',
      message: '',
    };
  }
  onFirstNameChange(event) {
    this.setState({ fname: event.target.value });
  }
  onLastNameChange(event) {
    this.setState({ lname: event.target.value });
  }
  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

    fetch('https://smit36.github.io/omtimistic_backend/email', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'success') {
          alert('Message Sent.');
          this.resetForm();
        } else if (response.status === 'fail') {
          alert('Message failed to send.');
        }
      });
  }

  resetForm() {
    document.getElementsById('contact-form').reset();
  }
  render() {
    return (
      <div className='site-section darken-bg'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-10 col-md-8'>
              <h2 className='text-white mb-5 heading'  id='section-contact'>Contact</h2>
              <form id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
                <div className='row form-group'>
                  <div className='col-md-6 mb-3 mb-md-0'>
                    <label className='text-white' htmlFor='fname'>
                      First Name
                    </label>
                    <input
                      type='text'
                      id='fname'
                      className='form-control'
                      value={this.state.fname}
                      onChange={this.onFirstNameChange.bind(this)}
                    />
                  </div>
                  <div className='col-md-6'>
                    <label className='text-white' htmlFor='lname'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='lname'
                      className='form-control'
                      value={this.state.lname}
                      onChange={this.onLastNameChange.bind(this)}
                    />
                  </div>
                </div>

                <div className='row form-group'>
                  <div className='col-md-12'>
                    <label className='text-white' htmlFor='email'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='form-control'
                      value={this.state.email}
                      onChange={this.onEmailChange.bind(this)}
                    />
                  </div>
                </div>

                <div className='row form-group'>
                  <div className='col-md-12'>
                    <label className='text-white' htmlFor='subject'>
                      Subject
                    </label>
                    <input
                      type='subject'
                      id='subject'
                      className='form-control'
                      value={this.state.subject}
                      onChange={this.onSubjectChange.bind(this)}
                    />
                  </div>
                </div>

                <div className='row form-group mb-5'>
                  <div className='col-md-12'>
                    <label className='text-white' htmlFor='message'>
                      Message
                    </label>
                    <textarea
                      name='message'
                      value={this.state.message}
                      onChange={this.onMessageChange.bind(this)}
                      id='message'
                      cols='30'
                      rows='2'
                      className='form-control'
                      placeholder='Write your notes or questions here...'
                    ></textarea>
                  </div>
                </div>

                <div className='row form-group'>
                  <div className='col-md-12'>
                    <input
                      type='submit'
                      value='Send Message'
                      className='btn btn-primary btn-md text-white'
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
