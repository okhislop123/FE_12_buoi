import axios from "axios";

export const getPosts = () =>
  axios.get("https://jsonplaceholder.typicode.com/posts");

export const getPost = (id) =>
  axios.get("https://jsonplaceholder.typicode.com/posts/" + id);

export const login = ({ email, password }) => {
  console.log(email, password);
  return Promise.resolve({
    id: 1,
    name: "User",
    email: "user@gmail.com",
    token: "token",
  });
};

export const getMe = () => {
  console.log(localStorage.getItem("token"));
  return Promise.resolve({
    id: 1,
    name: "User",
    email: "user@gmail.com",
    token: "token",
  });
};
