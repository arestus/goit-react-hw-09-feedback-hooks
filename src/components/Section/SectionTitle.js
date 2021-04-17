import React from 'react';
import PropTypes from 'prop-types';
import s from './SectionTitle.module.css';

const Section = ({ title, children }) => (
  <section>
    <h2 className={s.titleText}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
