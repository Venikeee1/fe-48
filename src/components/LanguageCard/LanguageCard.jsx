import React, { Component } from 'react';
import * as yup from 'yup';
import styles from './LanguageCard.module.css';
import { Formik } from 'formik';

let formSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().matches(/^\d+$/, 'повинні бути лише цифри').required(),
  language: yup.string().required(),
  confirmation: yup.boolean().required(),
});

const INITIAL_VALUES = {
  name: '',
  language: '',
  type: '',
  confirmation: false,
};

export class LanguageCard extends Component {
  state = {
    ...INITIAL_VALUES,
  };

  handleChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const result = type === 'checkbox' ? checked : value;

    this.setState({ [name]: result });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    formSchema.isValid(this.state).then(console.log);
  };

  render() {
    const { language, type, confirmation, name } = this.state;

    return (
      <div className={styles.card}>
        <h2 className={styles.title}>
          Selected tag is <span>{language}</span>
        </h2>
        <Formik
          initialValues={{ ...INITIAL_VALUES }}
          validationSchema={formSchema}
          onSubmit={(values, actions) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   actions.setSubmitting(false);
            // }, 1000);
          }}
        >
          {(props) => (
            <form id="form" onSubmit={props.handleSubmit}>
              <label htmlFor="name" className={styles.label}>
                Feature name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={styles.input}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                // onChange={this.handleChange}
              />
              <span className={styles.alert}>
                {props.errors.name && 'Name is required'}
              </span>
              <input
                name="type"
                type="text"
                className={styles.input}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.type}
                // value={type}
                // onChange={this.handleChange}
              />
              <span className={styles.alert}>
                {props.errors.type && props.errors.type}
              </span>
              <input
                name="confirmation"
                type="checkbox"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.confirmation}
                // onChange={this.handleChange}
              />
              <div className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                rem ex quo totam tenetur cupiditate. Minus delectus quibusdam
                beatae impedit.
              </div>
              <div className="tags">
                <div className={styles.tag}>
                  <input
                    type="radio"
                    name="language"
                    value="Css"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    // onChange={this.handleChange}
                  />
                  Css
                </div>
                <div className={styles.tag}>
                  <input
                    type="radio"
                    name="language"
                    value="React"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    // onChange={this.handleChange}
                  />
                  React
                </div>
                <div className={styles.tag}>
                  <input
                    type="radio"
                    name="language"
                    value="Node.js"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    // onChange={this.handleChange}
                  />
                  Node.js
                </div>
                <button type="submit" className={styles.tag}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
