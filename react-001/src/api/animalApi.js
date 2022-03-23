import requestApi from "./requestApi";

const animalApi = {
  getAllAnimals: ({ params }) => {
    const url = "/animals";
    return requestApi({ url, method: "GET", params });
  },
  getAnimalById: (id) => {
    const url = `/animals/${id}`;
    return requestApi({ url, method: "GET" });
  },
  createAnimal: (animal) => {
    const url = "/animals";
    return requestApi({ url, method: "GET", body: animal });
  },
  updateAnimal: (id, animal) => {
    const url = `/animals/${animal.id}`;
    return requestApi({ url, method: "PUT", body: animal });
  },
  deleteAnimal: (id) => {
    const url = `/animals/${id}`;
    return requestApi({ url, method: "DELETE" });
  },
};

export default animalApi;
