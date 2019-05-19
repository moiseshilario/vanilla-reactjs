import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ userName, time, userImg }) => (
  <div className="post__header">
    <img className="post__user-image" src={userImg} alt="profile" />
    <div className="post__user-info">
      <strong>{userName}</strong>
      <p className="post__time">{time}</p>
    </div>
  </div>
);

PostHeader.propTypes = {
  userName: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,
};

export default PostHeader;
