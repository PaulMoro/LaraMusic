import { AuthProvider } from "../src/contexts/AuthContext";
import { PlayerProvider } from "../src/contexts/PlayerContext";
import Play from "../src/components/Play/Play";
import Head from "next/head";
import "../src/components/Style/global.scss";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PlayerProvider>
        <>
          <Head>
            <title>Lara</title>
          </Head>
          <Component {...pageProps} />
          <Play></Play>
        </>
      </PlayerProvider>
    </AuthProvider>
  );
}

export default MyApp;
