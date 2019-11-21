import React from 'react'
import PropTypes from 'prop-types'
import { TextStyled } from './Text.style'

/**
 * @desc Text Component to render any text we can use this component
 */

const Text = React.memo(function Text({ ...props }) {
  const { children } = props
  return (
    <TextStyled {...props} small>
      {children}
    </TextStyled>
  )
})

Text.propTypes = {
  children: PropTypes.string,
}

export default Text
