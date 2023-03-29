import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html style={{scrollBehavior: 'smooth'}}>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id='modal__root'></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
