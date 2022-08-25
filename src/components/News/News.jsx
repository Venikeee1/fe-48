import { Component } from 'react';
import qs from 'query-string';
import styles from './News.module.css';
import { Select } from '../../UI/Select/Select';
import { fetchNews } from '../../api/newsApi';
import { Input } from '../../UI/Input/Input';
import debounce from 'lodash.debounce';
import { NewsList } from '../NewsList/NewsList';

const sortByOptions = [
  {
    label: 'relevancy',
    value: 'relevancy',
  },
  {
    label: 'popularity',
    value: 'popularity',
  },
  {
    label: 'publishedAt',
    value: 'publishedAt',
  },
];

const searchInOptions = [
  {
    label: 'title',
    value: 'title',
  },
  {
    label: 'description',
    value: 'description',
  },
  {
    label: 'content',
    value: 'content',
  },
];

export class News extends Component {
  constructor() {
    super();
    const queryString = window.location.search;
    const { q } = queryString ? qs.parse(queryString) : { q: '' };
    this.state = {
      filters: {
        q,
        sortBy: '',
        searchIn: '',
      },
      articles: [],
      hasError: false,
      error: null,
      isLoading: false,
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState((prevState) => ({
      filters: { ...prevState.filters, [name]: value },
    }));
  };

  debounceHandleSearch = debounce(this.handleChange, 250);

  updateSearchParams = (filters) => {
    const queryParams = qs.stringify(filters, { skipEmptyString: true });
    window.history.pushState('', '', `?${queryParams}`);
  };

  getArticlesBySearchParams = (filters) => {
    const { q } = filters;

    if (!q) {
      this.setState({ news: [] });
      return;
    }

    this.setState({ isLoading: true });

    fetchNews(filters)
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        console.log(this.state);
      });
  };

  componentDidMount() {
    const queryString = window.location.search;
    if (!queryString) return;

    const params = qs.parse(queryString);
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        ...params,
      },
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { filters } = this.state;

    if (filters === prevState.filters) return;
    console.log(this.state);

    this.updateSearchParams(filters);

    this.getArticlesBySearchParams(filters);
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { filters, articles, isLoading, error } = this.state;

    return (
      <div className={styles.card}>
        <h2 className={styles.title}>Filters</h2>
        <form>
          <Input
            defaultValue={filters.q}
            label="Search"
            name="q"
            onChange={this.debounceHandleSearch}
          />
          <div className={styles.filters}>
            <Select
              value={filters.sortBy}
              name="sortBy"
              options={sortByOptions}
              label="Sort by"
              onChange={this.handleChange}
            />
            <Select
              name="searchIn"
              value={filters.searchIn}
              options={searchInOptions}
              label="Search in"
              onChange={this.handleChange}
            />
          </div>
        </form>
        <NewsList articles={articles} isLoading={isLoading} error={error} />
      </div>
    );
  }
}
