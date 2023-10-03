import { $authHost, $host } from "./index";

export const createNews = async (news) => {
  /*   for (var key of news.entries()) {
    console.log(key[0] + ", " + key[1]);
  } */
  /*   console.log(news); */
  const { data } = await $authHost.post("api/news", news);

  return data;
};

export const fetchNews = async () => {
  const { data } = await $host.get("api/news/");
  return data;
};
export const fetchOneNews = async (id) => {
  const { data } = await $host.get("api/news/" + id);
  return data;
};
