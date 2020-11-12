import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

import RoundPlayButton from '../Play/molecules/RoundPlayButton';

import { VscThumbsup } from 'react-icons/vsc';
import { GrAddCircle } from 'react-icons/gr';
import { CgPlayButtonO } from 'react-icons/cg';
import logoAlbum from '../../../assets/img/album.png';
import bannerFavorite from '../../../assets/img/imagen-favoritos1.jpg';
import FavoritesTracks from './FavoritesTracks';
import FavoritesStyles from '../Style/Favorites/FavoritesStyles';

const Favorites = () => {
  const { user } = useAuth();
  const musiclist = user?.profile?.musiclists ?? [];
  const title =
    musiclist.find((playlist) => playlist.type_list === 'favourites')?.title ??
    [];
  const tracks =
    musiclist.find((playlist) => playlist.type_list === 'favourites')
      ?.musictracks ?? [];
  return (
    <div className='containerContent'>
      <div id='trending'>
        <img src={bannerFavorite} alt='favorites-list-image' />
      </div>
      <FavoritesTracks />
      <section className='about__album'>
        <div className='banner__song'>
          <img src={logoAlbum} alt='list-image' />
        </div>
        <div className='info__album_container'>
          <a href=''>// My Favorites</a>
          <h1 className='title__album'>List Name: {title}</h1>
          <h2 className='authors__album'>Enjoy your Favorite`s selection!</h2>

          <div className='content__music'>
            {tracks.map((item) => (
              <div className='tab__music' key={item.id}>
                <div className='tab__music__icons'>
                  <div className='icon'>
                    <RoundPlayButton song={item} />
                  </div>
                </div>
                <p className='tab__music__title'>{item.title}</p>
                <p className='tab__music__plays'>{item.artist}</p>
                <p className='tab__music__time'>{item.fuente}</p>
                <p className='tab__music__time'>{item.gender}</p>
                <div className='icon'>
                  <VscThumbsup></VscThumbsup>
                </div>
                <div className='icon'>
                  <GrAddCircle></GrAddCircle>
                </div>
              </div>
            ))}
          </div>
          {/* <div className='show__more'>
						<p>Show More</p>
					</div> */}
        </div>
      </section>
      <style jsx FavoritesStyles>
        {FavoritesStyles}
      </style>
    </div>
  );
};

export default Favorites;
