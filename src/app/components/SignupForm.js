import { Mutation, withApollo } from 'react-apollo'
import { Button, Container, Form, Grid, Message, Segment } from 'semantic-ui-react'

import mutation from '../mutations/Signup'

const { useState } = React

const RegisterBox = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onInputChange = (e) => {
    e.target.name === 'email' && setEmail(e.target.value)
    e.target.name === 'password' && setPassword(e.target.value)
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
                // If you want to send error to external service?
                console.log(error)
              }}
            >
              {(create, { data, error }) => {
                console.log(data)
                return (
                  <Form
                    size='large'
                    onSubmit={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      create({
                        variables: {
                          email,
                          password
                        }
                      })
                      setEmail('')
                      setPassword('')
                    }}
                  >
                    <Segment stacked>
                      {error && <p>Issue occurred while registering :(</p>}
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
                      <Button color='teal' fluid size='large'>
                        Login
                      </Button>
                    </Segment>
                  </Form>
                )
              }}
            </Mutation>
            <Message>
                New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>

      </Container>
    </>
  )
}

export default withApollo(RegisterBox)
