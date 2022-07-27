import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';
import PropTypes from 'prop-types';
function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          isOnline={el.isOnline}
          avatar={el.avatar}
          name={el.name}
        />
      ))}
    </ul>
  );
}
FriendList.prototype = {
  friends: PropTypes.array,
};

export default FriendList;
