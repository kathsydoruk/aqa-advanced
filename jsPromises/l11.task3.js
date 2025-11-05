async function getTodo() {
  try {
    const toDoPromise = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!toDoPromise.ok) {
      throw new Error("Request failed");
    }
    return toDoPromise.json();
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

async function getUser() {
  try {
    const userPromise = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!userPromise.ok) {
      throw new Error("Request failed");
    }
    return userPromise.json();
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

(async () => {
  try {
    const [todo, user] = await Promise.all([getTodo(), getUser()]);
    const allResult = { todo, user };
    console.log("Promise.all result:", allResult);
  } catch (error) {
    console.error("Error:", error.message);
  }

  try {
    const firstSettled = await Promise.race([getTodo(), getUser()]);
    console.log("Promise.race result:", firstSettled);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
