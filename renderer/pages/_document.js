import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="description" content="Al Quran Desktop Application" />
        </Head>
        <body className="bg-white dark:bg-darkBody transition-colors duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
