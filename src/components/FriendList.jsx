import PropTypes from 'prop-types';
import css from "./FriendList.module.css"

export default function FriendList({ friends }) {

    return (<ul className={css.frList}>
        {friends.map((friend) => {
            console.log(friend)
            return <li className={css.frItem} key={friend.id}>
  <img className={css.frImg} src={friend.avatar} alt={friend.name} width="48" />
  <p className={css.frText}>{friend.name}</p>
{friend.isOnline  ? <p className={css.frOnline}>Online</p> : <p className={css.frOffline}>Offline</p>}
</li>}
)}
    </ul>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};