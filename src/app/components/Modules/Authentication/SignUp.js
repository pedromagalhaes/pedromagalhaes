import { Mutation, withApollo } from 'react-apollo'
import { Button, Container, Form, Grid, Message, Segment } from 'semantic-ui-react'
import nanoid from 'nanoid'

import mutation from '@mutations/Signup'

const { useState } = React

const RegisterBox = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onInputChange = (e) => {
    e.target.name === 'email' && setEmail(e.target.value)
    e.target.name === 'password' && setPassword(e.target.value)
    e.target.name === 'firstName' && setFirstName(e.target.value)
    e.target.name === 'lastName' && setLastName(e.target.value)
    e.target.name === 'confirmPassword' && setConfirmPassword(e.target.value)
  }

  const validateForm = () => firstName && lastName && email && password === confirmPassword

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setConfirmPassword('')
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <Container>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Mutation
              mutation={mutation}
              onCompleted={(data) => {
                console.log(data)
              }}
              onError={(error) => {
                console.log(error.graphQLErrors)
              }}
            >
              {(create, { loading, error }) => (
                <Form
                  size='large'
                  onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    if (validateForm()) {
                      create({ variables: { firstName, lastName, email, password } })
                      resetForm()
                    }
                  }}
                >
                  <Segment stacked>
                    {loading && <p>Loading...</p>}
                    {error && (
                      <Message>
                        Bad:{' '}
                        {error.graphQLErrors.map(({ message }) => (
                          <span key={nanoid()}>{message}</span>
                        ))}
                      </Message>
                    )}

                    <Form.Input
                      fluid
                      icon='user'
                      iconPosition='left'
                      placeholder='First name'
                      name='firstName'
                      id='firstName'
                      value={firstName}
                      onChange={onInputChange}
                    />
                    <Form.Input
                      fluid
                      icon='user'
                      iconPosition='left'
                      placeholder='Last name'
                      name='lastName'
                      id='lastName'
                      value={lastName}
                      onChange={onInputChange}
                    />
                    <Form.Input
                      fluid
                      icon='user'
                      iconPosition='left'
                      placeholder='E-mail address'
                      name='email'
                      id='email'
                      value={email}
                      onChange={onInputChange}
                    />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      name='password'
                      placeholder='Password'
                      id='password'
                      type='password'
                      value={password}
                      onChange={onInputChange}
                    />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      name='confirmPassword'
                      placeholder='Confirm password'
                      id='confirmPassword'
                      type='password'
                      value={confirmPassword}
                      onChange={onInputChange}
                    />
                    <Button color='teal' fluid size='large'>
                      Login
                    </Button>
                  </Segment>
                </Form>
              )}
            </Mutation>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default withApollo(RegisterBox)
