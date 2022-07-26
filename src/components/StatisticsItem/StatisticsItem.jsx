import React from 'react';
import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

function StatisticsItem({ id, label, perce }) {
  return (
    <li className={s.item} key={id}>
      <span className={s.label}>{label} </span>
      <span className={s.percentage}>{perce} </span>
    </li>
  );
}
StatisticsItem.prototype = {
  id: PropTypes.string,
  label: PropTypes.string,
  perce: PropTypes.number,
};

export default StatisticsItem;
