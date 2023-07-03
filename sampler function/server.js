function sampler(messenger, trigger) {
  let count = 0;
  return (...args) => {
    count++;
    if (count == trigger) {
      messenger(...args);
      count = 0;
    }
  };
}

const messenger = (msg) => {
  console.log(msg);
};

const message = sampler(messenger, 2);
message();
message("this way?");
message();
message("Am I");
message();
message("why");
message();
message("hello");
