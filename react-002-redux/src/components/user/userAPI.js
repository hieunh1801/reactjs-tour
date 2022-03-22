const baseUrl = "http://localhost:3001";
const userAPI = {
  getUser: (userId) => {
    return fetch(`${baseUrl}/users/${userId}`).then((res) => res.json());
  },
  getUsers: () => {
    return fetch(`${baseUrl}/users`).then((res) => res.json());
  },
};

export default userAPI;
