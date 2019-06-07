import http from './_http'

const Auth = {
  signOut: () => http.post('/logout'),
  sendEmail: message => http.post('/smtp', message)
}

export default Auth
