// iterating with Async/Await

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
  }
// Awaiting a call

async function awaitCall() {
    try {
      const data = await fetchDataFromAPI(); // Assuming fetchDataFromAPI is a function that returns a promise
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  //Handling Errors with Async/
  
  async function awaitCall() {
    try {
      const data = await fetchDataFromAPI(); // Assuming fetchDataFromAPI is a function that returns a promise
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch data from the API:', error.message);
    }
  }
  

  //Changing Async/Await

  async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    await secondAsyncFunction();
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    await thirdAsyncFunction();
  }

  
//Awaiting Concurrent Requaests

async function concurrentRequests() {
    const [result1, result2] = await Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2()]);
    console.log('Result 1:', result1);
    console.log('Result 2:', result2);
  }
  
  
//Awaiting Parallel Calls

async function parallelCalls(urls) {
    const promises = urls.map(url => fetch(url));
    const responses = await Promise.all(promises);
    const responseData = await Promise.all(responses.map(response => response.json()));
    console.log(responseData);
  }
  