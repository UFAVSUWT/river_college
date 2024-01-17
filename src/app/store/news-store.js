import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import { fetchNews, fetchOneNews } from "../httpService/newsApi";

export default class NewsStore {
  _news = [];
  _isLoading = false;
  _error = null;
  constructor() {
    makeAutoObservable(
      this /* {
      _news: observable,
      loadNews: action,
    } */
    );
  }

  async loadNews() {
    this.setLoading(true);
    try {
      const news = await fetchNews();
      this.setNews(news);
      this.setLoading(false);
      this.setAuth(true);
    } catch (error) {
      this.setError(error.response.data.message);
      this.setLoading(false);
    }
  }
  setNews(news) {
    this._news = news;
  }
  setLoading(bool) {
    this._isLoading = bool;
  }
  setError(error) {
    this._error = error;
  }
  setAuth(bool) {
    this._auth = bool;
  }
  get news() {
    return this._news;
  }
  get isLoading() {
    return this._isLoading;
  }
  get error() {
    return this._error;
  }
}
