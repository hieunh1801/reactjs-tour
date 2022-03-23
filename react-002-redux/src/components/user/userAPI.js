const baseUrl = "http://localhost:3001";

const userAPI = {
  getUserById: (userId) => {
    return fetch(`${baseUrl}/users/${userId}`).then((res) => res.json());
  },
  getUsers: ({ page = 1, perPage = 10 }) => {
    const queryString = new URLSearchParams({
      _page: page.toString(),
      _limit: perPage.toString(),
      _sort: "id",
      _order: "desc",
    }).toString();
    const url = `${baseUrl}/users?` + queryString;
    return fetch(url).then((res) => {
      return {
        data: res.json(),
        url: url,
        total: parseInt(res.headers.get("x-total-count") || 0, 10),
      };
    });
  },
  updateUser: (user) => {
    return fetch(`${baseUrl}/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  },

  deleteUser: (userId) => {
    return fetch(`${baseUrl}/users/${userId}`, {
      method: "DELETE",
    }).then((res) => res.json());
  },

  createUser: (user) => {
    return fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  },
};

export default userAPI;
