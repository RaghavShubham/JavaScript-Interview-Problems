const cachedApiCall = (time) => {
  const cache = {};
  return async (url, config = {}) => {
    const key = `${url}${JSON.stringify(config)}`;

    const entry = cache[key];

    if (!entry || Date.now() > entry.expiry) {
      console.log("Fresh Api call");
      try {
        const res = await fetch(url, config);
        const data = await res.json();

        cache[key] = { value: data, expiry: Date.now() + time };
      } catch (e) {
        console.log("An error occurred", e);
      }
    }

    return cache[key].value;
  };
};

const call = cachedApiCall(1500);
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log("1", a)
);
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log("2", a)
  );
}, 800);
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log("3", a)
  );
}, 1700);
