import { AppProps } from 'next/app'
import {wrapper} from '../modules'

function WraapedApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(WraapedApp);