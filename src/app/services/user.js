import http from './_http'

const User = {
  signIn: (data) => {
    const {
      username, password
    } = data
    const params = {
      username,
      password,
      generateCsrfToken: true,
      expirationPolicy: 'AFTER_LOGIN'
    }
    return http.post('/msvc/v1/login', params)
  },

  getRoles: headers => http.get('/msvc/v1/login', null, headers),

  signOut: () => http.del('/msvc/v1/login'),

  getMe: () => http.get('/msvc/v1/userprofiles/me')
}

export default User
