import React, { useState, useEffect } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { likeHandler } from '../../../lib/likeHandler';
import { useAuth } from '../../../contexts/AuthContext';

const LikeButton = ({ user, song }) => {
  const { setFavorites } = useAuth();

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

  async function likeClic() {
    setState({
      isLiked: !state.isLiked,
      song: state.song,
    });
    const newList = await likeHandler(state.song, user);
    console.log(newList.musictracks);
    setFavorites(newList.musictracks);
  }

  if (state.isLiked) {
    return <FaRegThumbsUp onClick={likeClic}></FaRegThumbsUp>;
  } else {
    return <FaThumbsUp onClick={likeClic}></FaThumbsUp>;
  }
};

export default LikeButton;
