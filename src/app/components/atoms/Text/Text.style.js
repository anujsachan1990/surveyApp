import styled from 'styled-components'

export const TextStyled = styled.span`
  font-family: ${({ theme }) => theme.primaryFont}
    ${({ emphasized }) => emphasized && 'font-weight:bold'};
  ${({ inverted, theme }) =>
    inverted ? `color: ${theme.white}` : `color: ${theme.defaultColor}`};
  ${({ theme, size }) => {
    if (size === 'small') {
      return `font-size: ${theme.smallFontSize}`
    } else if (size === 'medium') {
      return `font-size: ${theme.mediumFontSize}`
    } else if (size === 'large') {
      return `font-size: ${theme.largeFontSize}`
    } else {
      return `font-size: ${theme.defaultFontSize}`
    }
  }};
`
