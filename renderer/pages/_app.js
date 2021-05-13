import React from "react";
import { Provider } from "react-redux";
import { Layout } from "../components";
import { store } from "../redux/store";

import "antd/dist/antd.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider {...{ store }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
