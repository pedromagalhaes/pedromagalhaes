import { Mutation, withApollo } from 'react-apollo'
import { Button, Container, Form, Grid, Message, Segment } from 'semantic-ui-react'
import Link from 'next/link'
import nanoid from 'nanoid'
import mutation from '@mutations/Login'
import redirect from '@utils/redirect'

const { useState } = React

const SignInBox = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onInputChange = (e) => {
    e.target.name === 'email' && setEmail(e.target.value)
    e.target.name === 'password' && setPassword(e.target.value)
  }

  const validateForm = () => email && password

  const resetForm = () => {
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
                      create({ variables: { email, password } })
                      setTimeout(() => {
                        redirect({}, '/dashboard')
                      }, 400)
                      resetForm()
                    }
                  }}
                >
                  <Segment stacked>
                    {loading && <p>Loading...</p>}
                    {error && (
                      <div>
                        <pre>
                          Bad:{' '}
                          {error.graphQLErrors.map(({ message }) => (
                            <span key={nanoid()}>{message}</span>
                          ))}
                        </pre>
                      </div>
                    )}

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
              )}
            </Mutation>
            <Message>
              New to us?
              <Link href='/public/register' as='/register'>
                <a href='#'>Sign Up</a>
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default withApollo(SignInBox)
