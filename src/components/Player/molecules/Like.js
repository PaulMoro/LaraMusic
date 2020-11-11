import React, { useState, useEffect } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { likeHandler, likHandler } from '../../../lib/likeHandler';

const LikeButton = ({ user, song }) => {
  const [state, setState] = useState({
    isLiked: 'false',
    song: {},
  });
  useEffect(() => {
    setState({
      isLiked: state.isLiked,
      song: song,
    });
  }, []);

  function likeClic() {
    setState({
      isLiked: !state.isLiked,
      song: state.song,
    });
    likeHandler(state.song, user);
  }

  if (state.isLiked) {
    return <FaRegThumbsUp onClick={likeClic}></FaRegThumbsUp>;
  } else {
    return <FaThumbsUp onClick={likeClic}></FaThumbsUp>;
  }
};

export default LikeButton;
