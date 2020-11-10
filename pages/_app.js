// import App from 'next/app'
import { AuthProvider } from '../src/contexts/AuthContext';
import { PlayerProvider } from '../src/contexts/PlayerContext';

import '../src/components/Style/global.scss';
import Play from '../src/components/Play/Play';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PlayerProvider>
        <>
          <Component {...pageProps} />
          <Play></Play>
        </>
      </PlayerProvider>
    </AuthProvider>
  );
}

export default MyApp;
