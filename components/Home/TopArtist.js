import React from "react";
import HomeStyle from "./HomeStyle";
import CardArtist from "./molecules/CardArtist";

function TopArtist() {
  return (
    <section className="artist">
      <div className="container">
        <div className="artist__info">
          <h1>New artists</h1>
          <p>
            The artists we represent are one of the most successful in Romania
            and also were a huge breakthrough.
          </p>
        </div>
        <div className="grid__container__artist">
          <CardArtist></CardArtist>
        </div>
      </div>

      <style jsx HomeStyle>
        {HomeStyle}
      </style>
    </section>
  );
}
export default TopArtist;
