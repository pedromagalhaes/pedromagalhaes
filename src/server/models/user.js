/* eslint-disable consistent-return, no-shadow */
const bcrypt = require('bcrypt-nodejs')
const mongoose = require('mongoose')

const { Schema } = mongoose

/*
String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
Decimal128
Map
*/

const UserSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  emailToken: String,
  emailTokenExpiresAt: Date, // correct
  isActive: Boolean
},
{
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

/*
  Mongoose only updates the version key when you use save().
*/
UserSchema.pre('save', function save(next) {
  const user = this
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}

mongoose.model('user', UserSchema)
