import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
//import GlobalStyles from './styles/globalStyle.style'

import App from './app/App'
import store from './app/store'
import { styleConstants } from './styles'

render(
  <Provider store={store}>
    <ThemeProvider theme={styleConstants}>
      <App />
    </ThemeProvider>
  </Provider>,
  window.document.getElementById('app')
)
{
  /* <GlobalStyles theme={styleConstants} /> */
}
