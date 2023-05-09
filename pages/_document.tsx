import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html style={{ scrollBehavior: 'smooth' }}>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id='modal__root' />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                 (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); 
                 for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} 
                 k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) 
                 (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 
                 
                 ym(93502219, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
            });
              `,
            }}
          />
          <noscript>
            <div>
              <img
                src='https://mc.yandex.ru/watch/93502219'
                style={{ position: 'absolute', left: '-9999px' }}
                alt=''
              />
            </div>
          </noscript>
          {/* eslint-disable-next-line @next/next/next-script-for-ga */}
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-6DE7N96P38'
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date()); gtag('config', 'G-6DE7N96P38')`,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
