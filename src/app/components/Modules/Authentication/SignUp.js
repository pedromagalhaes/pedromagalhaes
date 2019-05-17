import { Mutation, withApollo } from 'react-apollo'
import { Button, Container, Form, Grid, Message } from 'semantic-ui-react'
import nanoid from 'nanoid'

import mutation from '@mutations/Signup'
import { ModuleTitle } from '@components'
import Styles from './SignUp.styles'

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
      <Styles>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <ModuleTitle as='h1' text='Create an Account' icon='signup' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column computer='10'>
                <p>
                  As a registered user you will be able to save your favorite artworks, galleries, artists and events.
                  You can also access exclusive features and subscribe to our newsletters.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>

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
                <Grid>
                  <Grid.Row>
                    <Grid.Column computer={10}>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column computer={16}>
                            {loading && <p>Loading...</p>}
                            {error && error.graphQLErrors.length > 0 && (
                              <Message
                                header='There was some errors with your submission:'
                                negative
                                size='small'
                                content={error.graphQLErrors.map(({ message }) => (
                                  <span key={nanoid()}>- {message}</span>
                                ))}
                              />
                            )}
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column computer='8'>
                            <Form.Input
                              fluid
                              label='First name'
                              name='firstName'
                              id='firstName'
                              value={firstName}
                              onChange={onInputChange}
                            />
                          </Grid.Column>
                          <Grid.Column computer='8'>
                            <Form.Input
                              fluid
                              label='Last name'
                              name='lastName'
                              id='lastName'
                              value={lastName}
                              onChange={onInputChange}
                            />
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column computer={16}>
                            <Form.Input
                              fluid
                              label='E-mail address'
                              name='email'
                              id='email'
                              value={email}
                              onChange={onInputChange}
                            />
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column computer={8}>
                            <Form.Input
                              fluid
                              name='password'
                              label='Password'
                              id='password'
                              type='password'
                              value={password}
                              onChange={onInputChange}
                            />
                          </Grid.Column>
                          <Grid.Column computer={8}>
                            <Form.Input
                              fluid
                              name='confirmPassword'
                              label='Confirm password'
                              id='confirmPassword'
                              type='password'
                              value={confirmPassword}
                              onChange={onInputChange}
                            />
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column computer='16'>
                            <Form.Checkbox label='I agree to the Terms and Conditions' />
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column computer='16'>
                            <Button color='teal' fluid size='large'>
                              Submit
                            </Button>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Form>
            )}
          </Mutation>
        </Container>
      </Styles>
    </>
  )
}

export default withApollo(RegisterBox)
