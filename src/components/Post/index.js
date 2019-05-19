import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from '../PostHeader';

const Post = ({ postInfo }) => (
  <div className="post">
    <PostHeader userImg={postInfo.userImg} userName={postInfo.userName} time={postInfo.time} />
    <hr className="post__separator" />
    <p className="post__body">{postInfo.body}</p>
  </div>
);

Post.propTypes = {
  postInfo: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
