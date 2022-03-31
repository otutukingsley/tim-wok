import "../styles/globals.css"
import "../styles/checkbox.css"
import React from "react"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "../utils/reduxstore/store/store"
import "materialize-css/dist/css/materialize.min.css"

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const M = require("materialize-css/dist/js/materialize")
    M.AutoInit()
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
