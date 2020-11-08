import React from "react";
import AlbumStyles from "./AlbumStyles";
import CardSong from "./molecules/CardSong";
function FeatureTracks() {
  return (
    <section className="feature__tracks">
      <div className="feature_tracks_title">
        <h1>Featured Tracks</h1>
      </div>
      <div className="card__list">
        <CardSong></CardSong>
      </div>
      <style jsx AlbumStyles>
        {AlbumStyles}
      </style>
    </section>
  );
}
export default FeatureTracks;
