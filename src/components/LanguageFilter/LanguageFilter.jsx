import { Component } from 'react';
import { getFilteredItems } from '../../api/filter';
import qs from 'query-string';
import styles from './LanguageFilter.module.css';

export class LanguageFilter extends Component {
  state = {
    filters: {
      language: '',
      salary: '',
      age: '',
    },
    isOpen: true,
    hasError: false,
  };

  toggleHint = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState((prevState) => ({
      filters: { ...prevState.filters, [name]: value },
    }));
  };

  componentDidMount() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    params.forEach((value, key) =>
      this.setState((prevState) => ({
        filters: {
          ...prevState.filters,
          [key]: value,
        },
      }))
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { filters } = this.state;
    const queryParams = qs.stringify(filters, { skipEmptyString: true });
    window.history.pushState('', '', `?${queryParams}`);

    if (prevState.filters !== this.state.filters) {
      getFilteredItems(queryParams).then(console.log);
    }
  }

  componentDidCatch() {
    console.log('there wa an error');
    this.setState({ hasError: true });
  }

  render() {
    const { filters } = this.state;
    const { language, salary, age } = filters;

    // const { filters: { language, salary } } = this.state;

    return (
      <div className={styles.card}>
        <h2 className={styles.title}>Events</h2>
        <button onClick={this.toggleHint}>Toggle Gallery</button>

        {/* {isOpen && !hasError && <Hint />} */}

        <select
          name="language"
          onChange={this.handleChange}
          className={styles.select}
          value={language}
        >
          <option value="" disabled>
            Select language
          </option>
          <option>Javascript</option>
          <option>Java</option>
        </select>

        <select
          name="salary"
          onChange={this.handleChange}
          value={salary}
          className={styles.select}
        >
          <option value="" disabled>
            Select salary
          </option>
          <option>100000</option>
          <option>10000</option>
        </select>

        <select
          name="age"
          onChange={this.handleChange}
          value={age}
          className={styles.select}
        >
          <option value="" disabled>
            Age
          </option>
          <option>20</option>
          <option>30</option>
        </select>
      </div>
    );
  }
}

let intervalId = null;

class Hint extends Component {
  state = {
    counter: 0,
    intervalId: null,
  };

  handleMOuseMove = () => {
    console.log('moving');
  };

  componentDidMount() {
    intervalId = setInterval(() => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 1000);

    window.addEventListener('mousemove', this.handleMOuseMove);
  }

  componentWillUnmount() {
    clearInterval(intervalId);
    window.removeEventListener('mousemove', this.handleMOuseMove);
  }

  componentDidCatch() {
    console.log('there wa an error');
  }

  render() {
    const { counter } = this.state;
    const obj = {
      type: 'Multypoint',
      geometry: {},
    };

    return (
      <div className={styles.hint}>
        Filter it {obj.geometry.lngLat.lat} {counter}
      </div>
    );
  }
}
