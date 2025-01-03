//import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from "./FriendList.module.css"

export default function FriendList({ friends }) {
  return (
      <ul className={css.frList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
          
      )
      )}
    </ul>
  );
}

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };