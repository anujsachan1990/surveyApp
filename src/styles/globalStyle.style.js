import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  /* other styles */
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #341cac;
    color:#fff;
  }
  a {
    color:#fff;
  }
`

export default GlobalStyles
