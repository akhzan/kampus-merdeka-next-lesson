import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const noHeader = pathname === '/'
  return (
    <div>
      {!noHeader && (
        <div className='red' style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '24px' }}>
          Header
        </div>
      )}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
