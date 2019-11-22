import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  /* other styles */
  body {
    font-family: ${props => props.theme.fonts.primaryFont}
    color: ${props => props.theme.colors.black}
  }

  a{
    text-decoration:none;
    color: ${props => props.theme.colors.black}
  }

`
export default GlobalStyles
