// import App from 'next/app'
import { AuthProvider } from '../contexts/AuthContext';
import '../assets/style/componentStyle/global.scss';
import Play from '../components/Play/Play';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <AuthProvider>
      <>
        <Component {...pageProps} />
        <Play></Play>
      </>
    </AuthProvider>
  );
}

export default MyApp;
