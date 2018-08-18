import axios from 'axios';
import { Story } from './models/item';

const api = (path) => `https://hacker-news.firebaseio.com/v0${path}.json?print=pretty`;

const getItem = async (id) => {
  const { data: item } = await axios.get(api(`/item/${id}`));
  return new Story(item);
};

const getTopStories = async (limit = 10, next = 0) => {
  const { data } = await axios.get(api('/topstories'));
  const topStories = data.slice(next, limit + next);
  return await Promise.all(topStories.map(async (id) => await getItem(id)));
};

const getNewStories = async (limit = 10, next = 0) => {
  const { data } = await axios.get(api('/newstories'));
  const topStories = data.slice(next, limit + next);
  return await Promise.all(topStories.map(async (id) => await getItem(id)));
};

export {
  getTopStories,
  getNewStories,
};