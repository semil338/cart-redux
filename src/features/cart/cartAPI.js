import axios from "axios";

export function fetchItems() {
  return axios.get("https://dummyjson.com/carts/user/1");
}

export function addItem(item) {
  return axios.post("https://dummyjson.com/carts/add", item);
}

export function updateItem(item, id) {
  return axios.patch(`https://dummyjson.com/carts/${id}`, item);
}

export function deleteItem(id) {
  return axios.delete(`https://dummyjson.com/carts/${id}`);
}
