import React from "react";
import { useRouter } from "next/router";
import HeaderHome from "../../src/components/Player/Header";
import NavHomeScreen from "../../src/components/Player/Nav.js";
import List from "../../src/components/Player/ListPlayer";
import Play from "../../src/components/Play/Play";

const playlist = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <div className="lara">
      <p>Im am {title}</p>
      <HeaderHome />
      <NavHomeScreen />
      <div className="containerContent">
        <List title={title} />
      </div>
      <Play></Play>
    </div>
  );
};

export default playlist;
