import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';
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

export default FriendList;
