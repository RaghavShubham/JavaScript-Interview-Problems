const friends = (mapping, person) => {
  const friendList = mapping[person];
  if (friendList && friendList.length > 0) {
    const finalFriendList = [...friendList];
    for (let friend of friendList) {
      const friendsList = friends(mapping, friend);
      finalFriendList.push(...friendsList);
    }
    return finalFriendList;
  } else {
    return [];
  }
};

const mapping = {
  a: ["b", "c"],
  b: ["d", "g"],
  d: ["p", "q"],
  l: ["x", "y"],
};

console.log(friends(mapping, "a"));

// Output: ["b", "c", "d", "g", "p", "q"];
