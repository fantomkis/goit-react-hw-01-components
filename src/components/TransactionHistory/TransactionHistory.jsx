import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
function TransactionHistory({ items }) {
  return (
    <table className={s.history}>
      <thead>
        <tr className={s.tr}>
          <th className={s.lab}>Type</th>
          <th className={s.lab}>Amount</th>
          <th className={s.lab}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.teer} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.prototype = {
  items: PropTypes.array,
};

export default TransactionHistory;
