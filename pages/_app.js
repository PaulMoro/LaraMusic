// import App from 'next/app'
import { AuthProvider } from "../contexts/AuthContext";
import "../assets/style/componentStyle/global.scss";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
