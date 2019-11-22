import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Circle from 'react-circle'

const Progress = ({ progress }) => {
  return <Circle progress={progress} />
}

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
}

export default memo(Progress)
