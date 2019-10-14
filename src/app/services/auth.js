import http from './_http'

const Auth = {
  signOut: () => http.post('/logout'),
  sendEmail: message => http.post('/smtp', message),
  activateAccount: (emailToken) => {
    console.log(emailToken)
    return http.post('/activateAccount', emailToken)
  }
}

export default Auth
