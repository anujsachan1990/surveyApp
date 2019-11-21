import React from 'react'
import PropTypes from 'prop-types'

/**
 * @desc Image is used to render image
 */
const Image = React.memo(function Image({
  className,
  src,
  alt,
  title,
  placeholderSrc,
  ...other
}) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      title={title}
      {...other}
      onError={e => {
        e.target.onerror = null
        e.target.src = placeholderSrc
      }}
    />
  )
})
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholderSrc: PropTypes.string,
  title: PropTypes.string,
}
Image.defaultProps = {
  className: 'image',
  placeholderSrc: 'images/placeholder.png',
  title: 'product image',
}

export default Image
