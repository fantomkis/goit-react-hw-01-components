import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

function StatisticsItem({ label, perce }) {
  return (
    <li className={s.item}>
      <span className={s.label}>{label} </span>
      <span className={s.percentage}>{perce} </span>
    </li>
  );
}
StatisticsItem.prototype = {
  label: PropTypes.string,
  perce: PropTypes.number,
};

export default StatisticsItem;
