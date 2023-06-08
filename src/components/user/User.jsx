import PropTypes from 'prop-types';
import css from './User.module.css';




export const User = ({userName, tag,location,avatar, stats}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src= {avatar}
          alt={userName}
          className={css.avatar}
        />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
    <li className={css.item}>
          <span className={css.label}>Followers</span>
          <br />
      <span className={css.quantity}>1000</span>
    </li>
    <li className={css.item}>
          <span className={css.label}>Views</span>
          <br />
      <span className={css.quantity}>2000</span>
    </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <br />
      <span className={css.quantity}>3000</span>
    </li>
  </ul>
    </div>

      
    );
  
};


User.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}


