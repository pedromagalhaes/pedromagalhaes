/* eslint-disable import/prefer-default-export */

/*
  Add here functions related to objects
  Ideally we should not use lodash if we can do with vanilla js
*/

// finds object by key/value, similiar as _.find
export const findObjByKey = (object, key, value) => {
  let objByKey = null
  Object.keys(object).forEach((item) => {
    if (object[item][key] === value) {
      objByKey = object[item]
    }
  })
  return objByKey
}
