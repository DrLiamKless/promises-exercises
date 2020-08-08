/**
 * EXERCISE 1
 *
 * @format
 * @returns {Promise<3>}
 */

function makePromiseResolveWith3() {
  return Promise.resolve(3);
}

/**
 *
 * EXERCISE 2
 *
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo() {
  return Promise.reject("Boo!");
}

/**
 *
 * EXERCISE 3
 *
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve) {
  return new Promise((resolve, reject) => {
    if (itShouldResolve) {
      resolve();
    } else {
      reject();
    }

    /* If itShouldResolve is true, call resolve */
    /* If itShouldResolve is false, call reject */
  });
}

/**
 *
 * EXERCISE 4
 *
 * @param {any} value
 * @param {number} delayInMs
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), delayInMs);
  });

  // setTimeout(() => {
  //   return Promise.resolve(value);
  // }, delayInMs);
  // return setTimeout();
  /* Return a promise that resolves with the value after delayInMs */
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};
