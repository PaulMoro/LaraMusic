import React from "react";

import FromList from "./molecules/FromList";
import SectionPopular from "./molecules/SectionPopular.js";
import FeatureTracks from "../Albums/FeatureTracks";

const MainPlayer = () => {
  return (
    <main className="Container">
      <SectionPopular />
      <article>
        <FeatureTracks />
        <FromList />
      </article>
    </main>
  );
};

export default MainPlayer;
