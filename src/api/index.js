import axios from "axios";

export const getPosts = () =>
  axios.get("https://jsonplaceholder.typicode.com/posts");

export const getPost = (id) =>
  axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
