import styled, { css } from 'styled-components'

const baseStyles = css`
  font-family: ${({ theme }) => theme.primaryFont};
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
  }}
`

const H1 = styled.h1`
  ${baseStyles}
`

const H2 = styled.h2`
  ${baseStyles};
`

const H3 = styled.h3`
  ${baseStyles};
`

const H4 = styled.h4`
  ${baseStyles};
`

const H5 = styled.h5`
  ${baseStyles};
`

const H6 = styled.h6`
  ${baseStyles};
`

const Heading = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}

export default Heading
