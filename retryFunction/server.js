const testPromise = () => {
  let count = 0;

  return () => {
    return new Promise((resolve, reject) => {
      count += 1;
      if (count <= 5) {
        reject("I failed :(");
      } else resolve("I passed!!!");
    });
  };
};

// const retry = (fn, retries, finalError) => {
//   return new Promise((resolve, reject) => {
//     fn().then(resolve, (err) => {
//       if (retries === 1) {
//         reject(finalError);
//       }
//       retry(fn, retries - 1, finalError).then(resolve, reject);
//     });
//   });
// };

const retry = async (fn, retries, finalError) => {
  try {
    const response = await fn();
    return response;
  } catch (error) {
    if (retries === 1) {
      return Promise.reject(finalError);
    }
    return retry(fn, retries - 1, finalError);
  }
};

retry(testPromise(), 5, "I am a big failure").then(
  (res) => console.log(res),
  (err) => console.error(err)
);
