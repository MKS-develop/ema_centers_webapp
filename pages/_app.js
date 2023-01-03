import '../styles/globals.css'
import { AuthProvider } from '../lib/context/AuthProvider'

export default function App({ Component, pageProps }) {
  return(
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
