import axios from "axios";

export const fetchPosts = async () => {
  const posts = await axios("http://localhost:1337/articles")
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return posts;
};

export const fetchPost = async (slug) => {
  const post = await axios(`http://localhost:1337/articles?slug=${slug}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return post;
};
