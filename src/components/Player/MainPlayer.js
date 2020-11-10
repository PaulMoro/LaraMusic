import React from "react";

import ListTrack from "./molecules/Mol__ListTrack";
import SectionPopular from "./molecules/SectionPopular.js";
import FeatureTracks from "../Albums/FeatureTracks";

const MainPlayer = () => {
  return (
    <main className="Container">
      <SectionPopular />
      <article>
        <FeatureTracks />
        <ListTrack />
      </article>
    </main>
  );
};

export default MainPlayer;
