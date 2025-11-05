class TodoService {
  constructor(baseUrl = "https://jsonplaceholder.typicode.com") {
    this.baseUrl = baseUrl;
  }

  async getById(id = 1) {
    const result = await fetch(`${this.baseUrl}/todos/${id}`);
    if (!result.ok) {
      throw new Error(`Failed to load todo #${id}. HTTP ${result.status}`);
    }
    return result.json();
  }
}

class UserService {
  constructor(baseUrl = "https://jsonplaceholder.typicode.com") {
    this.baseUrl = baseUrl;
  }

  async getById(id = 1) {
    const result = await fetch(`${this.baseUrl}/users/${id}`);
    if (!result.ok) {
      throw new Error(`Failed to load user #${id}. HTTP ${result.status}`);
    }
    return result.json();
  }
}

(async () => {
  const todoApi = new TodoService();
  const userApi = new UserService();
 
  try {
    const [todo, user] = await Promise.all([todoApi.getById(1), userApi.getById(1)]);
    const allResult = { todo, user };
    console.log("Promise.all result:", allResult);
  } catch (error) {
    console.error("Error:", error.message);
  }

    try {
    const firstSettled = await Promise.race([todoApi.getById(1), userApi.getById(1)]);
    console.log("Promise.race result:", firstSettled);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
