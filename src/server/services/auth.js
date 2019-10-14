/* eslint-disable no-shadow, no-unused-vars, consistent-return */

const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = mongoose.model('user')

// SerializeUser is used to provide some identifying token that can be saved
// in the users session.  We traditionally use the 'ID' for this.
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// The counterpart of 'serializeUser'.  Given only a user's ID, we must return
// the user object.  This object is placed on 'req.user'.
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

// Instructs Passport how to authenticate a user using a locally saved email
// and password combination.  This strategy is called whenever a user attempts to
// log in.  We first find the user model in MongoDB that matches the submitted email,
// then check to see if the provided password matches the saved password. There
// are two obvious failure points here: the email might not exist in our DB or
// the password might not match the saved one.  In either case, we call the 'done'
// callback, including a string that messages why the authentication process failed.
// This string is provided back to the GraphQL client.
passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user) => {
      // eslint-disable-line no-shadow, consistent-return
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false, 'Invalid Credentials')
      }
      user.comparePassword(password, (err, isMatch) => {
        // eslint-disable-line no-shadow
        if (err) {
          return done(err)
        }
        if (isMatch) {
          return done(null, user)
        }
        return done(null, false, 'Invalid credentials.')
      })
    })
  })
)

// Creates a new user account.  We first check to see if a user already exists
// with this email address to avoid making multiple accounts with identical addresses
// If it does not, we save the existing user.  After the user is created, it is
// provided to the 'req.login' function.  This is apart of Passport JS.
// Notice the Promise created in the second 'then' statement.  This is done
// because Passport only supports callbacks, while GraphQL only supports promises
// for async code!  Awkward!
function signup({ firstName, lastName, email, password, emailToken, emailVerified }) {
  const user = new User({ firstName, lastName, email, password, emailToken, emailVerified })
  if (!email || !password) {
    throw new Error('You must provide an email and password.')
  }

  return User.findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        throw new Error('Email in use')
      }
      return user.save()
    })
    .then(
      user => new Promise((resolve, reject) => {
        // eslint-disable-line no-shadow
        // req.login(user, (err) => {
        // if (err) { reject(err) }
        if (!user) {
          reject(new Error('Failed signup'))
        }
        resolve(user)
        // })
      })
    )
}

// Logs in a user.  This will invoke the 'local-strategy' defined above in this
// file. Notice the strange method signature here: the 'passport.authenticate'
// function returns a function, as its indended to be used as a middleware with
// Express.  We have another compatibility layer here to make it work nicely with
// GraphQL, as GraphQL always expects to see a promise for handling async code.
function login({ email, password, req }) {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) {
        reject(new Error('Invalid user or credentials.'))
      }
      if (user.emailVerified) {
        req.login(user, () => resolve(user))
      } else {
        reject(new Error('Your account has not been activated yet. Please click the activation link in your email.'))
      }
    })({ body: { email, password } })
  })
}

function activateAccount({ emailToken }) {
  console.log('activateAccount')
  const user = new User({ emailToken })
  if (!emailToken) {
    throw new Error('=== You must provide an email token. === ')
  }

  return User.findOne({ emailToken })
    .then((foundUser) => {
      console.log('=== foundUser=== ')
      // if (foundUser) {

      // }
    })
    .then(
      user => new Promise((resolve, reject) => {
        if (!user) {
          reject(new Error('Failed activation'))
        }
        resolve(user)
      })
    )
}

module.exports = { signup, login, activateAccount }
