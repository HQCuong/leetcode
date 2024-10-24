/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
  const firstProm = await promise1;
  const secondProm = await promise2;

  return new Promise(resolve => resolve(firstProm + secondProm));    
};
