import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Circle from 'react-circle'

const Progress = ({ progress, progressColor }) => {
  return <Circle progress={progress} progressColor={progressColor} />
}

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  progressColor: PropTypes.string,
}

export default memo(Progress)
