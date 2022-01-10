import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

const DEFAULT_OGIMAGE_URL = 'https://blog.35d.jp/og-image.png'
const DEFAULT_DESCRIPTION =
  'じょんこの雑記メモ'

const Header = ({ titlePre = '', ogImageUrl = '', description = '' }) => {
  return (
    <Head>
      <title>{titlePre ? `${titlePre} |` : ''} ああああ」</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <meta name="og:title" content={titlePre} />
      <meta property="og:image" content={ogImageUrl || DEFAULT_OGIMAGE_URL} />
      <meta name="twitter:site" content="@johnko00" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImageUrl || DEFAULT_OGIMAGE_URL} />
      <link rel="shortcut icon" href="../img/favicon.png" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-148970528-2"></script>
    </Head>
  )
}

export default Header