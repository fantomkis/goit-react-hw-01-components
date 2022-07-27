import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <div>
      <section className={s.statistics}>
        {title ? <h2 className={s.title}>{title}</h2> : null}

        <ul className={s.list}>
          {stats.map(el => (
            <StatisticsItem
              key={el.id}
              label={el.label}
              perce={el.percentage}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default Statistics;
