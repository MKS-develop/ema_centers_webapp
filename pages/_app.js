import '../styles/globals.css'
import { AuthProvider } from '../lib/context/AuthProvider'
import { GlobalProvider } from '../lib/context/GlobalProvider'

export default function App({ Component, pageProps }) {
  return(
    <AuthProvider>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </AuthProvider>
  )
}
