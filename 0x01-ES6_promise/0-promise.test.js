import getResponseFromAPI from './0-promise.js';

describe('getResponseFromAPI function', () => {
  test('should resolve', () => {
    // Simulate resolving the promise
    return getResponseFromAPI().then((result) => {
      // Replace with actual expectation based on the result of getResponseFromAPI()
      expect(result).toEqual('true'); // Example assertion, adjust as per actual result
    });
  }, 20000); // Timeout set to 10000 milliseconds (10 seconds)
});
