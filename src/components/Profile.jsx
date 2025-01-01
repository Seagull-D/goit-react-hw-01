
import PropTypes from 'prop-types';
import css from "./Profile.module.css"
console.log(css)
export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileInfo}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}><span>@</span>{tag}</p>
        <p className={css.profileCity}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span  className={css.profilelistName}>Followers</span>
          <span className={css.profileCount}>{followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profilelistName}>Views</span>
          <span className={css.profileCount}>{views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profilelistName}>Likes</span>
          <span className={css.profileCount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}


Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
