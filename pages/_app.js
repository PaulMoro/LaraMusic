// import App from 'next/app'
import { AuthProvider, ProtectRoute } from "../contexts/AuthContext";
import "../assets/style/componentStyle/global.scss";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<ProtectRoute>
				<Component {...pageProps} />
			</ProtectRoute>
		</AuthProvider>
	);
}

export default MyApp;
