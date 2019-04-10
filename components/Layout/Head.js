import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import 'nprogress/nprogress.css'
import { injectPolyfillIO } from '../../utils'

export default React.memo(() => (
  <Head>
    <meta charSet='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0' />
    {injectPolyfillIO()}
  </Head>
))
