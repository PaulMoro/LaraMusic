// import App from 'next/app'
import { AuthProvider } from '../contexts/AuthContext';
import { PlayerProvider } from '../contexts/PlayerContext';
import '../assets/style/componentStyle/global.scss';
import Play from '../components/Play/Play';

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
