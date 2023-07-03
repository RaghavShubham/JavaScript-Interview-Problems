const originalFetch = window.fetch;

window.fetch = async (...args) => {
  const updatedRequest = requestInterceptor(args);

  const response = await originalFetch(...updatedRequest);

  const updatedResponse = responseInterceptor(response);

  return updatedResponse;
};

window.requestInterceptor = (args) => {
  console.log("We're in the Request Interceptor");

  return args;
};

window.responseInterceptor = (response) => {
  console.log("We're in the Response Interceptor");

  return response.json();
};

fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
  console.log(res)
);
