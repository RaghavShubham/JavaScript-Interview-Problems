const localStorageWithExpiry = {
  setItem: (key, val, expiry) => {
    let valueToBeSaved = {
      value: val,
      expirationTime: Date.now() + expiry,
    };

    window.localStorage.setItem(key, JSON.stringify(valueToBeSaved));
  },
  getItem: (key) => {
    const res = window.localStorage.getItem(key);
    const data = JSON.parse(res);

    if (data.expirationTime < Date.now()) {
      window.localStorage.removeItem(key);
      return "The Key has expired";
    } else {
      return data.value;
    }
  },
  removeItem: (key) => {
    return window.localStorage.removeItem(key);
  },
  clear: () => {
    window.localStorage.clear();
  },
};

localStorageWithExpiry.setItem("pappu", "wow", 3000);
setTimeout(() => {
  console.log(localStorageWithExpiry.getItem("pappu"));
}, 2900);
