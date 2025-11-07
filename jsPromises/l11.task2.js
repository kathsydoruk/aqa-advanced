function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((result) => result.json())
    .catch((error) => {
      console.error("Error:", error.message);
      throw error;
    });
}

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((result) => result.json())
    .catch((error) => {
      console.error("Error:", error.message);
      throw error;
    });
}

Promise.all([getTodo(), getUser()])
  .then(([todo, user]) => {
    const allResult = { todo, user };
    console.log("Promise.all result:", allResult);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

Promise.race([getTodo(), getUser()])
  .then((firstSettled) => {
    const raceResult = firstSettled;
    console.log("Promise.race result:", raceResult);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });