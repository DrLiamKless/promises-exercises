/**
 * EXERCISE 1
 *
 * @format
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
 
function mapPromise(promise, transformer) {
    return promise.then(value => transformer(value)) 
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise.then(value => {
    if(!isNaN(value)) {
      const number = parseInt(value);
      return number * number
    } else {
      throw `Cannot convert '${value}' to a number!`
    }
  })


//   return new Promise((resolve, reject) => 
//     numberPromise.then(value => {
//       if(!isNaN(value)){
//         resolve(Number(value) * Number(value))
//       } else {
//         reject(`Cannot convert '${value}' to a number!`)
//       }
//     })
//   )
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch(error => 0);
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(value => {throw value}, error => error)
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
