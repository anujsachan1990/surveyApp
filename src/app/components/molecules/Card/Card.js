import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Progress from '../../atoms/Progress'
import { CardContainerStyle } from './Card.style'

const Card = ({ survey }) => {
  const {
    name,
    participant_count,
    response_rate,
    url,
    submitted_response_count,
  } = survey
  return (
    <CardContainerStyle>
      <Link to={url}>
        <div className="card">
          <h3>{name}</h3>
          <Progress progress={response_rate.toFixed(2) * 100} />
          <p>
            {'Participation Count: '}
            {participant_count}
          </p>

          <p>
            {'Total Submission: '}
            {submitted_response_count}
          </p>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </Link>
    </CardContainerStyle>
  )
}

Card.propTypes = {
  survey: PropTypes.shape({
    name: PropTypes.string.isRequired,
    participant_count: PropTypes.number.isRequired,
    response_rate: PropTypes.number.isRequired,
    submitted_response_count: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

export default memo(Card)
