import React, { Component } from 'react'

class AuthForm extends Component {
  constructor(props) {
    super(props)

    this.state = { email: '', password: '' }
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state) // eslint-disable-line react/destructuring-assignment, react/prop-types
  }

  render() {
    const { email, password, errors } = this.state
    return (
      <div className='row'>
        <form onSubmit={this.onSubmit.bind(this)} className='col s6'>
          <div className='input-field'>
            <input
              placeholder='Email'
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className='input-field'>
            <input
              placeholder='Password'
              type='password'
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div className='errors'>
            {errors && errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default AuthForm
