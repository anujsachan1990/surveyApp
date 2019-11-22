import React, { memo } from 'react'
import PropTypes from 'prop-types'
import StarRatingComponent from 'react-star-rating-component'

const Rating = ({ name, editing, starCount, value }) => {
  return (
    <StarRatingComponent
      name={name}
      editing={editing}
      starCount={starCount}
      value={value}
    />
  )
}

Rating.propTypes = {
  name: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  starCount: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

export default memo(Rating)
