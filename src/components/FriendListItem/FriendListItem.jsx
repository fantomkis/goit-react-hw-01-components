import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.onlaine : s.status}>.</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default FriendListItem;
